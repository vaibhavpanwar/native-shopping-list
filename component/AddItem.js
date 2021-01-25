import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        onChangeText={(text) => setText(text)}
        placeholder="Add Items.."
        style={styles.input}
        value={text}
      />
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.btnText}
          onPress={() => {
            if (!text) {
              return;
            } else {
              addItem(text);
              setText("");
            }
          }}
        >
          + Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 7,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
