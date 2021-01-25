import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import Header from "./component/Header";
import ListItems from "./component/ListItems";
import AddItem from "./component/AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: Math.random(), text: "Hehe" },
    { id: Math.random(), text: "Curd" },
    { id: Math.random(), text: "Milk" },
    { id: Math.random(), text: "Eggs" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    setItems([{ text, id: Math.random() }, ...items]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItems item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
