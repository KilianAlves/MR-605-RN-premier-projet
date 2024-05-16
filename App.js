import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
import useLayout from "./Hooks/useLayout";

export default function App() {
  const [sizeSquare, setSizeSquare] = useState(0);
  console.log(sizeSquare);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray" />
      <View>
        <Text
          style={{
            marginTop: Constants.statusBarHeight,
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "dimgray",
          }}
        >
          Mon application
        </Text>
        <View
          style={styles.central}
          onLayout={({ nativeEvent }) => {
            setSizeSquare(useLayout(nativeEvent));
          }}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              width: sizeSquare,
              height: sizeSquare,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "1%",
          }}
        >
          <Button title="BUTTON1" />
          <Button title="BUTTON2" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  central: {
    flex: 15,
    width: 371,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
});
