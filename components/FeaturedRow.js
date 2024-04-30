import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  const restaurants = [
    {
      id: 123,
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi",
      rating: 4,
      genre: "female",
      address: "123 Av Street",
      short_description: "Sushi",
      dishes: [],
      long: 20,
      lat: 0,
    },
    {
      id: 1234,
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi",
      rating: 3,
      genre: "female",
      address: "123 Av Street",
      short_description: "Sushi",
      dishes: [],
      long: 20,
      lat: 0,
    },
  ];

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        {restaurants.map((item) => {
          return (
            <RestaurantCard
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              genre={item.genre}
              address={item.address}
              short_description={item.short_description}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
