import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import championCelebration from "../../../assets/108242-ellipse-bust.json";
import coin from "../../../assets/image/coin3.png";

import noel_bhai_modified from "../../../assets/image/noel_bhai_modified.png";
import rank from "../../../assets/image/27525-removebg.png";

const LeaderboardScreen = () => {
  const [isTodaySelected, setIsTodaySelected] = useState(true);

  const [hasWon, setHasWon] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    setHasWon(true);
  }, []);
  useEffect(() => {
    setAnimationKey(animationKey + 1);
  }, [hasWon]);

  return (
    <LinearGradient
      // colors={["#F7CF47", "#FFEF99"]}
      colors={["#000000", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 10,
          paddingHorizontal: 20,
        }}
      >
        <View
        // style={{
        //   backgroundColor: "#000000",
        //   borderRadius: 10,
        //   padding: 10,
        // }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#F7CF47",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 25,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>
              {isTodaySelected ? "Week" : "Today"}
            </Text>
          </TouchableOpacity>
        </View>

        <Switch
          value={isTodaySelected}
          onValueChange={(value) => setIsTodaySelected(value)}
          trackColor={{ false: "#D3D3D3", true: "#F7CF47" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          source={noel_bhai_modified}
          style={{
            position: "absolute",
            top: 40,
            left: 165,
            zIndex: 10,
            width: 60,
            height: 60,
            borderWidth: 0.5,
            borderRadius: 60,
            borderColor: "#F7CF47",
          }}
        />

        <Image
          source={noel_bhai_modified}
          style={{
            position: "absolute",
            top: 110,
            left: 75,
            zIndex: 10,
            width: 60,
            height: 60,
            borderWidth: 0.5,
            borderRadius: 60,
            borderColor: "#F7CF47",
          }}
        />

        <Image
          source={noel_bhai_modified}
          style={{
            position: "absolute",
            top: 112,
            left: 265,
            zIndex: 10,
            width: 60,
            height: 60,
            borderWidth: 0.5,
            borderRadius: 60,
            borderColor: "#F7CF47",
          }}
        />
        {hasWon && (
          <LottieView
            key={animationKey}
            source={championCelebration}
            autoPlay
            loop={false}
            style={{
              position: "absolute",
              top: -80,
              left: 0,
              width: 300,
              height: 300,
            }}
          />
        )}
        <Image source={rank} style={{ width: 300, height: 305 }} />
      </View>

      <View
        style={{
          position: "absolute",
          height: 300,
          bottom: -10,
          left: 20,
          backgroundColor: "#F7CF47",
          width: "90%",

          borderRadius: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ScrollView style={{ height: 280 }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>4</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>5</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>
                Samiya Kazi
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>8670</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>6</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>Noel Alam</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>7</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>
                Asif Bin Abedin
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>8</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>Zahid</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>9</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>
                Pollock Nag
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>6</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>Noel Alam</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>6</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 20 }}>Noel Alam</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>6</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>Noel Alam</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 15,
              marginHorizontal: -10,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 18 }}>6</Text>
            <View style={{ flex: 0.5 }}>
              <Text style={{ color: "#000000", fontSize: 18 }}>Noel Alam</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#000000", fontSize: 18 }}>7780</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default LeaderboardScreen;
