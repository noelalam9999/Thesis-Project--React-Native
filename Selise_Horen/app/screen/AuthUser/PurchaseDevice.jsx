import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";

const PurchaseDevice = () => {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleQuantityChange = (value) => {
    setQuantity(value);

    const calculatedPrice = parseInt(value) * 6000;
    setPrice(calculatedPrice.toString());
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <Text style={styles.text}>Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="Quantity*"
            value={quantity}
            onChangeText={handleQuantityChange}
            keyboardType="numeric"
          />
          {/* <Text style={styles.text}>Name</Text>
          <TextInput style={styles.input} placeholder="Name*" /> */}
          {/* <Text style={styles.text}>Email</Text>
          <TextInput style={styles.input} placeholder="email*" /> */}
          <Text style={styles.text}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="Phone" />
          <Text style={styles.text}>What is your zone?</Text>
          <TextInput style={styles.input} placeholder="zone*" />
          <Text style={styles.text}>Which area do you reside in?</Text>
          <TextInput style={styles.input} placeholder="Area" />
          <Text style={styles.text}>Write down your complete address </Text>
          <TextInput style={styles.input} placeholder="Address" />
          <Text style={styles.text}>Price</Text>
          <TextInput
            style={[styles.input, { color: "#333" }]}
            placeholder="Price"
            value={price}
            editable={false}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  form: {
    width: "90%",
    height: "90%",
    backgroundColor: "#F7CF47",
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
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
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PurchaseDevice;
