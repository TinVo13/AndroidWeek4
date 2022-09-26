import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import home from './views/home.js';
import detail from './views/detail.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    //<HomeComponent/>
    <NavigationContainer>{/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={home}/>
        <Stack.Screen name='Chọn màu' component={detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
