import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    { imgUrl: "https://links.papareact.com/gn7", title: "Testing 1" },
    { imgUrl: "https://links.papareact.com/gn7", title: "Testing 2" },
    { imgUrl: "https://links.papareact.com/gn7", title: "Testing 3" },
    { imgUrl: "https://links.papareact.com/gn7", title: "Testing 4" },
    { imgUrl: "https://links.papareact.com/gn7", title: "Testing 5" },
    { imgUrl: "https://links.papareact.com/gn7", title: "Testing 6" },
  ];

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
      {categories.map((item) => {
        return <CategoryCard imgUrl={item.imgUrl} title={item.title} />;
      })}
    </ScrollView>
  );
};

export default Categories;
