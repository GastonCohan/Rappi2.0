import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurant] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{ 
            name
          }
        }
      }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurant(data?.restaurants);
      });
  }, []);

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
        {restaurants.map((item, key) => {
          return (
            <RestaurantCard
              id={item._id}
              imgUrl={item.image}
              title={item.name}
              rating={item.rating}
              genre={item.genre}
              address={item.address}
              short_description={item.short_description}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
              key={key}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
