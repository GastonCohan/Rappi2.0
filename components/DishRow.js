import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const dispatch = useDispatch();

  const handlePressAdd = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const handlePressRemove = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white border p-4 border-gray-200"
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2"></Text>
            <View className="row">
              <Text className="text-gray-400">$ {price}</Text>
            </View>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F3" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View
          className={`bg-white border p-4 border-gray-200 ${
            isPressed && "border-b-0"
          }`}
        >
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={handlePressRemove}
              disabled={items.length === 0}
            >
              <MinusCircleIcon
                size={40}
                color={items.length === 0 ? "grey" : "#F5CF8E"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={handlePressAdd}>
              <PlusCircleIcon color="#F5CF8E" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
