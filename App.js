import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Image } from "expo-image";
import Constants from "expo-constants";
import { useState } from "react";
import useLayout from "./Hooks/useLayout";
import useModes from "./Hooks/useModes";
import useImages from "./Hooks/useImages";

export default function App() {
  const [sizeSquare, setSizeSquare] = useState(0);
  const { currentMode, pressedModes } = useModes();
  const { img, pressedImages } = useImages();

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
          >
            <Image
              source={img}
              contentFit={currentMode}
              style={{ width: sizeSquare, height: sizeSquare }}
            />
          </View>
          <Text>{currentMode}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "1%",
          }}
        >
          <Button title="MODES" onPress={pressedModes} />
          <Button title="IMAGES" onPress={pressedImages} />
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
