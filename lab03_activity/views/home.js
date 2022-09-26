import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Rating } from "react-native-ratings";

export default HomeComponent = ({ navigation }) => {
  var height = Dimensions.get("window").height;
  return (
    <View
      style={{
        marginTop: 0.05 * height,
        flex:1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        // width:'100%',
        // height:'100%'
      }}
    >
      {/* <TouchableOpacity style={{borderWidth:1,padding:20,backgroundColor:'#155'}} onPress={()=>{
        navigation.navigate('Details');
      }}>
        <Text style={{color:'white'}}>Click me</Text>
      </TouchableOpacity> */}
      <View style={{ width: "100%",}}>
        <View style={{ width: "100%", height: "60%", alignItems: "center" }}>
          <Image
            source={require("../assets/vsmart_live_xanh.png")}
            style={{ width: "75%", height: "100%" }}
            resizeMode="cover"
          ></Image>
        </View>
        <View
          style={{
            justifyContent: "center",
            marginTop: 0.02 * height,
            marginLeft: 30,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "400", lineHeight: 18 }}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 0.02 * height,
            justifyContent: "space-around",
          }}
        >
          <Rating ratingCount={5} imageSize={30} style={{}}></Rating>
          <Text style={{ fontSize: 15, fontWeight: "400", lineHeight: 18 }}>
            (Xem 828 đánh giá)
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: 0.02 * height,
            paddingLeft: 30,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700", lineHeight: 21 }}>
            1.790.000 đ
          </Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              marginLeft: 20,
            }}
          >
            1.790.000 đ
          </Text>
        </View>
        <View
          style={{
            marginTop: 0.02 * height,
            paddingLeft: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 12,
              fontWeight: "700",
              lineHeight: 14,
              marginRight: 10,
            }}
          >
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image source={require("../assets/doubts-button.png")}></Image>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            marginHorizontal: 30,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 0.02 * height,
          }} onPress={()=>{
            navigation.navigate('Chọn màu');
          }}
        >
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ padding: 10 }}>4 MÀU-CHỌN MÀU</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              width: "20%",
            }}
          >
            <Image source={require("../assets/Vector.png")} style={{}}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{margin:10,width:'80%'}}>
        <TouchableOpacity style={{backgroundColor:'red',borderWidth:1,padding:15,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:20,fontWeight:'700',lineHeight:23}}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
