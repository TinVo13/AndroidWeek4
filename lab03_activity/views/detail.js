import React, { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default Details = ({ navigation }) => {
  var height = Dimensions.get("window").height;
  var bac = require("../assets/vs_bac.png");
  var xanh = require("../assets/vsmart_live_xanh.png");
  var red = require("../assets/vs_red.png");
  var black = require("../assets/vsmart_black_star.png");
  const [hinhanh, setHinhAnh] = useState(xanh);
  return (
    <View
      style={{
        marginTop: 0.05 * height,
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "30%",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%", padding: 10 }}>
          <Image
            source={hinhanh}
            style={{ height: "100%", width: "100%" }} resizeMode='contain'
          ></Image>
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              lineHeight: 18,
              padding: 10,
            }}
          >
            Điện Thoại Vsmart Joy 3 hàng chính hãng
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#C4C4C4" }}>
        <Text
          style={{
            padding: 10,
            fontSize: 18,
            fontWeight: "400",
            lineHeight: 21,
          }}
        >
          Chọn một màu bên dưới:
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#C5F1FB",
              width: 85,
              height: 80,
              marginBottom: 10,
            }}
            onPress={() => {setHinhAnh(bac);}}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#F30D0D",
              width: 85,
              height: 80,
              marginBottom: 10,
            }}
            onPress={()=>{
                setHinhAnh(red);
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#000000",
              width: 85,
              height: 80,
              marginBottom: 10,
            }} onPress={()=>{
                setHinhAnh(black);
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#234896",
              width: 85,
              height: 80,
              marginBottom: 10,
            }}
            onPress={()=>{
                setHinhAnh(xanh);
            }}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            backgroundColor: "rgba(25, 82, 226, 0.58)",
            margin: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              color: "white",
              padding: 10,
              fontSize: 20,
              fontWeight: "700",
              lineHeight: 23,
            }}
          >
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
