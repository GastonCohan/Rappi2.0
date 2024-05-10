import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketTotal } from "../features/basketSlice";
import { setRestaurant } from "../features/restaurantSlice";

const Restaurant = () => {
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <>
      {basketTotal !== 0 && <BasketIcon />}

      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="rounded-full absolute top-14 left-5 p-2 bg-gray-100"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={20} color="#F5CF8E" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-grey-500">
                  <Text className="text-green-500">{rating}</Text> ~ {genre}
                </Text>
              </View>

              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <MapPinIcon color="grey" opacity={0.4} size={22} />
                  <Text className="text-xs text-gray-500">
                    Nearby ~ {address}
                  </Text>
                </View>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y-border-grey-300">
            <QuestionMarkCircleIcon color="grey" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food alergy?
            </Text>
            <ChevronRightIcon color="#F5CF8E" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* <DishRows/> */}

          {dishes.map((item) => {
            return (
              <DishRow
                key={item.id}
                id={item._id}
                name={item.name}
                description={item.short_description}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
