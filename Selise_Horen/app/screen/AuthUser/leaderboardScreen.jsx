import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import coin from "../../../assets/image/coin3.png";
import sport5 from "../../../assets/image/sport5.png";
import noel_bhai_modified from "../../../assets/image/noel_bhai_modified.png";

const LeaderboardScreen = () => {
  const [isTodaySelected, setIsTodaySelected] = useState(true);

  return (
    <LinearGradient
      colors={["#F7CF47", "#F7CF47"]}
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
          style={{
            backgroundColor: "#000000",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{ color: "#F7CF47", fontSize: 18 }}>
            {isTodaySelected ? "Week" : "Today"}
          </Text>
        </View>

        <Switch
          value={isTodaySelected}
          onValueChange={(value) => setIsTodaySelected(value)}
          trackColor={{ false: "#D3D3D3", true: "#000000" }}
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
            top: 20,
            left: 165,
            zIndex: 10,
            width: 60,
            height: 60,
            borderRadius: 60,
            borderColor: "#000000",
          }}
        />
        <Image
          source={noel_bhai_modified}
          style={{
            position: "absolute",
            top: 80,
            left: 58,
            zIndex: 10,
            width: 60,
            height: 60,
            borderRadius: 60,
            borderColor: "#000000",
          }}
        />
        <Image
          source={noel_bhai_modified}
          style={{
            position: "absolute",
            top: 90,
            left: 275,
            zIndex: 10,
            width: 60,
            height: 60,
            borderWidth: 3,
            borderRadius: 60,
            borderColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
          }}
        />
        <Image source={sport5} style={{ width: 300, height: 321 }} />
      </View>

      <View
        style={{
          position: "absolute",
          height: 300,
          bottom: -10,
          left: 20,
          backgroundColor: "#000000",
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
              flex: 1,
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}>4</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}>5</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 6</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "#F7CF47", fontSize: 20 }}> 7</Text>
            <View>
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>D.vas</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={coin}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ color: "#F7CF47", fontSize: 20 }}>8682</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default LeaderboardScreen;
