import React, { useEffect, useState } from "react";
import config from "../../config";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

import SelectDropdown from "react-native-select-dropdown";
import { getZone, getCity, getArea } from "../../services/PathaoServis";
import { MaterialIcons } from "@expo/vector-icons";

import axios from "axios";

const PurchaseDevice = () => {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [allCity, setAllCity] = useState([]);
  const [city, setCity] = useState({});

  const [zones, setZones] = useState([]); //all zone
  const [zone, setZone] = useState({}); //selected zone

  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState({});

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isloaderModal, setLoaderModal] = useState(false);
  const [isloadingPayment, setLoadingPayment] = useState(false);

  const validateForm = () => {
    if (
      quantity !== "" &&
      zone !== "" &&
      phone !== "" &&
      city !== "" &&
      address !== "" &&
      price !== "" &&
      area !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (validateForm()) setIsValid(true);
  }, [quantity, price, zone, city, area, address, phone]);

  //Get city
  useEffect(() => {
    getCity()
      .then((res) => {
        //console.log(res);
        setAllCity(res.cities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get Zone
  useEffect(() => {
    getZone(city.value)
      .then((res) => {
        //console.log(res);
        setZones(res.zones);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  // Get Area
  useEffect(() => {
    getArea(zone.value)
      .then((res) => {
        //console.log(res);
        setAreas(res.areas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [zone]);

  const handleSubmit = () => {
    if (validateForm()) {
      const data = {
        quantity: quantity,
        price: price,

        phonenumber: phone,

        shippingAddress: {
          city: {
            city: city.label,
            id: city.value,
          },
          zone: {
            zone_id: zone.value,
            zone_name: zone.label,
          },
          area: {
            area_id: area.value,
            area_name: area.label,
          },
          fullAddress: address,
        },
      };
      setLoaderModal(true);

      fetch(`${config.API_URL}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoaderModal(false);
          if (data) {
            setShowModal(true);
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(data);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);

    const calculatedPrice = parseInt(value) * 6000;
    setPrice(calculatedPrice.toString());
    setIsValid(validateForm());
  };
  const handleConfirmation = () => {
    setLoadingPayment(true);

    try {
      axios
        .get("https://orders-service.fly.dev/payment/123/123", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        })
        .then((res) => {
          setLoadingPayment(false);
          Linking.openURL(res.data.url);
          //setShowModal(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.order_info}>
          <Text
            style={{
              paddingLeft: 9,
              width: "35%",
              fontSize: 18,
              backgroundColor: "#000",
              color: "#F7CF47",
              fontWeight: "bold",
              borderTopLeftRadius: 5,
              borderBottomRightRadius: 5,
              //borderRadius: 5,
              marginTop: -10,
              marginLeft: -10,
              marginBottom: 18,
            }}
          >
            Order Details
          </Text>
          <Text style={styles.text}>Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="Quantity*"
            value={quantity}
            onChangeText={handleQuantityChange}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Price</Text>
          <TextInput
            style={[styles.input, { color: "#333" }]}
            placeholder="Price"
            onChangeText={setPrice}
            value={price}
            editable={false}
          />
        </View>
        <View style={styles.pathao_info}>
          <Text style={styles.details}>Shipping Details</Text>
          <Text style={styles.text}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            placeholder="Phone"
            value={phone}
          />
          <Text
            style={styles.text}
            onChangeText={setCity}
            placeholder="city*"
            value={city}
          >
            What is your city?
          </Text>

          {allCity ? (
            <SelectDropdown
              data={allCity.map((city) => ({
                label: city.city,
                value: city.id,
              }))}
              onSelect={(selectedcity) => setCity(selectedcity)}
              defaultButtonText="Select city"
              buttonTextAfterSelection={(selectedItem) => selectedItem.label}
              rowTextForSelection={(item) => item.label}
              buttonStyle={styles.input}
              buttonTextStyle={styles.dropdownText}
              renderDropdownIcon={() => (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="#333"
                />
              )}
            />
          ) : null}

          {city && zones ? (
            <View>
              <Text style={styles.text}>What is your zone?</Text>
              <SelectDropdown
                data={zones.map((zone) => ({
                  label: zone.zone_name,
                  value: zone.zone_id,
                }))}
                onSelect={(selectedZone) => setZone(selectedZone)}
                defaultButtonText="Select zone"
                buttonTextAfterSelection={(selectedItem) => selectedItem.label}
                rowTextForSelection={(item) => item.label}
                buttonStyle={styles.input}
                buttonTextStyle={styles.dropdownText}
                renderDropdownIcon={() => (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="#333"
                  />
                )}
              />
            </View>
          ) : null}

          {zone && areas ? (
            <View>
              <Text style={styles.text}>Which area do you reside in?</Text>
              <SelectDropdown
                data={areas.map((area) => ({
                  label: area.area_name,
                  value: area.area_id,
                }))}
                onSelect={(selectedArea) => setArea(selectedArea)}
                defaultButtonText="Select area"
                buttonTextAfterSelection={(selectedItem) => selectedItem.label}
                rowTextForSelection={(item) => item.label}
                buttonStyle={styles.input}
                buttonTextStyle={styles.dropdownText}
                renderDropdownIcon={() => (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="#333"
                  />
                )}
              />
              {/* <Text style={styles.text}>Write down your complete address</Text>
              <TextInput
                style={styles.input}
                onChangeText={setAddress}
                placeholder="Address"
                value={address}
              /> */}
            </View>
          ) : null}
          {area && (
            <View>
              <Text style={styles.text}>Write down your complete address</Text>
              <TextInput
                style={styles.input}
                onChangeText={setAddress}
                placeholder="Address"
                value={address}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, isValid ? null : { opacity: 0.5 }]}
        onPress={handleSubmit}
        disabled={!isValid}
      >
        {isloaderModal ? (
          <ActivityIndicator size="large" color="#F7CF47" />
        ) : (
          <Text style={styles.buttonText} onChangeText={setPrice} value={price}>
            Pay now | BDT{" "}
          </Text>
        )}
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            Are you sure you want to proceed with this order?
          </Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.modal_btn}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modal_btn}
              onPress={handleConfirmation}
            >
              {isloadingPayment ? (
                <ActivityIndicator size="large" color="#F7CF47" />
              ) : (
                <Text style={styles.buttonText}>Confirm</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7CF47",
  },
  scrollView: {
    flex: 1,
  },
  order_info: {
    marginTop: 15,
    height: "35%",
    width: "90%",
    padding: 10,
    marginLeft: 25,
    backgroundColor: "#F7CF47",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pathao_info: {
    height: "70%",
    width: "90%",
    padding: 10,
    marginTop: 15,
    marginLeft: 25,
    backgroundColor: "#F7CF47",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20,
  },
  input: {
    height: 50,
    fontWeight: "600",
    backgroundColor: "#F7CF47",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    marginLeft: 120,
    width: "40%",
    //height: "30%",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: "#F7CF47",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  modal: {
    backgroundColor: "#000000",
    width: "80%",
    margin: 80,
    marginLeft: 40,
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalText: {
    color: "#F7CF47",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
  },
  modal_btn: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#F7CF47",
    padding: 10,
    width: 100,
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  dropdownContainer: {
    height: 50,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: "#F7CF47",
    borderRadius: 5,
    borderWidth: 0,
  },
  dropdownItem: {
    justifyContent: "flex-start",
  },
  dropdownMenu: {
    backgroundColor: "#F7CF47",
    borderRadius: 5,
    elevation: 2,
  },

  dropdownText: {
    color: "#333",

    fontSize: 16,
    fontWeight: "600",
  },
  details: {
    padding: 3,
    paddingLeft: 9,
    width: "45%",
    fontSize: 18,
    backgroundColor: "#000",
    color: "#F7CF47",
    fontWeight: "bold",
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: -10,
    marginLeft: -10,
    marginBottom: 18,
  },
});

export default PurchaseDevice;
