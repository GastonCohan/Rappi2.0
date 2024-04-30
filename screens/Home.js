import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const Home = () => {
  const navigation = useNavigation();

  const featuredRowItem = [
    {
      id: 123,
      title: "Featured",
      description: "Paid placements for our parents",
    },
    {
      id: 1234,
      title: "Tasty Discounts",
      description: "Everyone's been enjoying these juicy discounts!",
    },
    {
      id: 12345,
      title: "Offers near you!",
      description: "Why not support your local restaurants tonight !",
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-grey-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-grey-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* Search */}

      <View className="flex-row items-center space-x-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-grey-200 p-3">
          <MagnifyingGlassIcon />
          <TextInput
            placeholder="Restauraants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-grey-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* FeaturedRow */}
        {featuredRowItem.map((item, key) => {
          return (
            <FeaturedRow
              title={item.title}
              description={item.description}
              id={item.id}
              key={key}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;