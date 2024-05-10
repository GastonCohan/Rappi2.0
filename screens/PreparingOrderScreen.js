import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("Delivery");
  }, 4000);

  return (
    <SafeAreaView className="bg-[#F5CF8E] flex-1 justify-center items-center">
      {/* <Text>PreparingOrderScreen</Text> */}
      <Animatable.Image
        source={require("../assets/loading.gif")}
        iterationCount={1}
        animation="slideInUp"
        className="h-96 w-96"
      />
      <Animatable.Text
        iterationCount={1}
        animation="slideInUp"
        className="text-lg text-white text-center font-bold"
      >
        Waiting for Restaurant to accept you order!
      </Animatable.Text>

      <Progress.Circle
        size={60}
        indeterminate={true}
        color="white"
        className="my-10"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
