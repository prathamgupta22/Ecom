import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const InputBox = ({
  value,
  setValue,
  autoComplete,
  placeholder,
  secureTextEntry,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={24}
            color="#7a7a7a"
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
          autoComplete={autoComplete}
          placeholder={placeholder}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholderTextColor="#7a7a7a"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  inputWrapper: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    color: "#333",
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default InputBox;
