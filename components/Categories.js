import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCard */}
      {categories.map((item, key) => {
        return <CategoryCard imgUrl={item.image} title={item.name} key={key} />;
      })}
    </ScrollView>
  );
};

export default Categories;
