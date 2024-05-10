import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { selectRestaurant } from "../features/restaurantSlice";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  console.log(restaurant);

  return (
    <View className="bg-[#F5CF8E] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon color="black" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-black text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row space-x-2">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="#F5CF8E" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order is being prepared!
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: -34.606703397474234,
          longitude: -58.418651972600756,
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          latitude={-34.606703397474234}
          longitude={-58.418651972600756}
          title={restaurant.title}
          pinColor="#F5CF8E"
          identifier="origin"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Gaston Cohan</Text>
          <Text className="text-gray-400">Your Rider!</Text>
        </View>

        <Text className="text-[#F5CF8E] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
