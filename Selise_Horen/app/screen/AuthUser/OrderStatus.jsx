import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Timeline from "react-native-timeline-flatlist";
import Svg, { Polyline } from "react-native-svg";
import Tick from "../../../assets/image/correct.png";
import Cross from "../../../assets/image/crossed.png";
import config from "../../config";
import { useFocusEffect } from "@react-navigation/native";

const OrderStatus = ({ navigation }) => {
  const [orderData, setorderData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetch(`${config.API_URL}/order`)
        .then((res) => res.json())
        .then((data) => {
          setorderData(data);
        })
        .catch((error) => console.error(error));
    }, [])
  );
  // useEffect(() => {
  //   fetch(`${config.API_URL}/order`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setorderData(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={orderData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.vehicleContainer}>
            <TouchableOpacity style={styles.vehicle}>
              <View style={styles.orderInfoContainer}>
                <Text style={styles.vehicleTitle}>Track order</Text>
                <Text>Order Id# {item._id.substring(0, 7)}</Text>
              </View>
              <Timeline
                data={[
                  {
                    title:
                      item.paymentStatus === "paid" &&
                      item.deliveryStatus === "pending"
                        ? "Payment is Paid"
                        : item.paymentStatus === "paid"
                        ? "Payment is Paid"
                        : "Payment is Pending",
                    titleStyle: {
                      color:
                        item.paymentStatus === "paid" &&
                        item.deliveryStatus === "pending"
                          ? "#b58d08"
                          : item.paymentStatus === "paid"
                          ? "#b58d08"
                          : "#000",
                    },
                    lineColor:
                      item.paymentStatus === "paid" &&
                      item.deliveryStatus === "pending"
                        ? "#b58d08"
                        : "#f4c31f",
                    circleColor:
                      item.paymentStatus === "paid"
                        ? "#b58d08"
                        : item.paymentStatus === "pending" ||
                          item.deliveryStatus === "pending"
                        ? "#f4c31f"
                        : "#b58d08",
                    icon:
                      item.paymentStatus === "paid" ? (
                        <Image source={Tick} style={styles.icon} />
                      ) : (
                        ""
                      ),
                  },
                  {
                    title: "Your order has been placed successfully",
                    titleStyle: {
                      color:
                        item.paymentStatus === "paid" &&
                        item.deliveryStatus === "pending"
                          ? "#b58d08"
                          : item.paymentStatus === "paid"
                          ? "#b58d08"
                          : "#000",
                    },
                    lineColor:
                      item.paymentStatus === "pending" ||
                      item.deliveryStatus === "pending"
                        ? "#f4c31f"
                        : "#b58d08",
                    lineColor:
                      item.paymentStatus === "pending" ||
                      item.deliveryStatus === "pending"
                        ? "#f4c31f"
                        : "#b58d08",
                    circleColor:
                      item.paymentStatus === "paid"
                        ? "#b58d08"
                        : item.paymentStatus === "pending" ||
                          item.deliveryStatus === "pending"
                        ? "#f4c31f"
                        : "#b58d08",
                    icon:
                      item.paymentStatus === "paid" ? (
                        <Image source={Tick} style={styles.icon} />
                      ) : (
                        ""
                      ),
                  },
                  {
                    title:
                      "Your order has been confirmed and is being processed",
                    titleStyle: {
                      color:
                        item.paymentStatus === "pending" &&
                        item.deliveryStatus === "pending"
                          ? "#000"
                          : item.paymentStatus === "paid" &&
                            item.deliveryStatus === "pending"
                          ? "#000"
                          : "#b58d08",
                    },
                    lineColor:
                      item.deliveryStatus === "pending" ? "#000" : "#b58d08",
                    lineColor:
                      item.deliveryStatus === "pending" ? "#f4c31f" : "#b58d08",
                    circleColor:
                      item.deliveryStatus === "pending" ? "#f4c31f" : "#b58d08",
                  },
                  {
                    title: "Your order is out for delivery",
                    titleStyle: {
                      color:
                        item.paymentStatus === "pending" &&
                        item.deliveryStatus === "pending"
                          ? "#000"
                          : item.paymentStatus === "paid" &&
                            item.deliveryStatus === "pending"
                          ? "#000"
                          : "#b58d08",
                    },
                    lineColor:
                      item.deliveryStatus === "pending" ? "#000" : "#b58d08",
                    lineColor:
                      item.deliveryStatus === "pending" ? "#f4c31f" : "#b58d08",
                    circleColor:
                      item.deliveryStatus === "pending" ? "#f4c31f" : "#b58d08",
                  },
                  {
                    title: "Your order has been delivered successfully",
                    titleStyle: {
                      color:
                        item.paymentStatus === "pending" &&
                        item.deliveryStatus === "pending"
                          ? "#000"
                          : item.paymentStatus === "paid" &&
                            item.deliveryStatus === "pending"
                          ? "#000"
                          : "#b58d08",
                    },
                    lineColor:
                      item.deliveryStatus === "pending" ? "#000" : "#b58d08",
                    lineColor:
                      item.deliveryStatus === "pending" ? "#f4c31f" : "#b58d08",
                    circleColor:
                      item.deliveryStatus === "pending" ? "#f4c31f" : "#b58d08",
                  },
                ]}
                innerCircle="icon"
              />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.scrollView}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7CF47",
    padding: 10,
  },
  scrollView: {
    marginTop: 20,
  },
  vehicleContainer: {
    marginTop: 20,
  },
  vehicle: {
    backgroundColor: "#F7CF47",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginLeft: 15,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    width: "90%",
    borderRadius: 20,
    padding: 10,
  },
  vehicleTitle: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  vehicleInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderInfoContainer: {
    // display: "flex",
    // flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginLeft: 10,
  },
  orderId: {
    color: "#4d4d4d",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#f9d96c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    //borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default OrderStatus;
