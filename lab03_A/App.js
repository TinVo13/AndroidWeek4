import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, TextInput } from 'react-native';

export default function App() {
  var height = Dimensions.get('window').height;
  var width = Dimensions.get('window').width;


  const [number, setNumber] = useState(1);
  const [gia,setGia] = useState(141800);
  function HamCong(){
    setGia(141800*(number+1));
    setNumber(number + 1);
  };
  function HamTru(){
    setNumber(number-1);
    setGia(141800*(number-1));
  };
  function Gia(){
    var gia = 141.800;

  }
  function thongbao(){
    Alert.alert('Đặt hàng thành công!')
  }


  return (
    <View style={styles.container}>
      {/* header */}
      <View>
        <View style={{ marginTop: 0.05 * height, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row' }}>
            {/* hinh anh */}
            <Image source={require('./assets/book.png')} style={{ margin: 10 }}></Image>
            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 14, }}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 14, marginTop: 10 }}>Cung cấp bởi Tiki Trading</Text>
              <Text style={{ fontSize: 18, fontWeight: '700', lineHeight: 21, color: '#EE0D0D', marginTop: 10 }}>141.800 đ</Text>
              <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 14, textDecorationLine: 'line-through', textDecorationStyle: 'solid', marginTop: 10 }}>141.000 đ</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#C4C4C4', justifyContent: 'center', alignItems: 'center', height: 20, width: 20 }} onPress={HamTru}>
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 14, alignItems: 'center' }}>-</Text>
                  </TouchableOpacity>
                  <TextInput style={{ marginHorizontal: 10, fontSize: 16, fontWeight: '700', lineHeight: 14, textAlign:'center',}} maxLength={2}>{number}</TextInput>
                  {/* <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: '700', lineHeight: 18, }}>{number}</Text> */}
                  <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#C4C4C4', justifyContent: 'center', alignItems: 'center', height: 20, width: 20 }} onPress={HamCong}>
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 14, alignItems: 'center', }}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, alignItems: 'flex-end', width: 150, }}>
                  <Text style={{ fontWeight: '700', fontSize: 12, lineHeight: 14, color: '#134FEC' }}>Mua sau</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 14 }}>Mã giảm giá đã lưu</Text>
            <Text style={{ marginLeft: 10, color: '#134FEC', fontSize: 12, fontWeight: '700', lineHeightL: 14 }}>Xem tại đây</Text>
          </View>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <TouchableOpacity style={{ justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, flexDirection: 'row', width: 220 }}>
              <Image style={{ backgroundColor: 'yellow', height: 20, width: 40, margin: 10 }}></Image>
              <Text style={{ fontSize: 18, fontWeight: '700', lineHeight: 21 }}>Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10, marginLeft: 50, alignItems: 'center', backgroundColor: '#0A5EB7', flex: 2, justifyContent: 'flex-end' }}>
              <Text style={{ fontSize: 20, fontWeight: '700', lineHeight: 23, color: 'white' }}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'white' }}>
          <View style={{ paddingVertical: 20, flexDirection: 'row' }}>
            <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 14, marginLeft: 10 }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox</Text>
            <Text style={{ fontSize: 12, fontWeight: '700', lineHeight: 14, color: '#134FEC', marginLeft: 10 }}>Nhập tại đây?</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'white' }}>
          <View style={{ width: '70%', paddingVertical: 20, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', lineHeight: 21 }}>Tạm tính</Text>
          </View>
          <View style={{ paddingVertical: 20, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, fontWeight: '700', lineHeight: 21, color: 'red' }}>{gia} đ</Text>
          </View>
        </View>
      </View>

      {/* footer */}
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '70%', paddingVertical: 20, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', lineHeight: 21 }}>Thành tiền</Text>
          </View>
          <View style={{ paddingVertical: 20, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, fontWeight: '700', lineHeight: 21, color: 'red' }}>{gia} đ</Text>
          </View>
        </View>
        <TouchableOpacity style={{ padding: 15, alignItems: 'center', backgroundColor: 'red', margin: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', lineHeight: 23 }} onPress={thongbao}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    justifyContent: 'space-between',
  },
});
