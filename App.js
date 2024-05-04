import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home"></Stack.Screen>
          <Stack.Screen component={Restaurant} name="Restaurant"></Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}
