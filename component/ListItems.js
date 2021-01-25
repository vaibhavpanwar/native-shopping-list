import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from "react-native";

const ListItems = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Text style={styles.cross} onPress={() => deleteItem(item.id)}>
          X
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 9,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
  cross: {
    paddingRight: 10,
    color: "red",
  },
});
