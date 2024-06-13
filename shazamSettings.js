import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const shazamLogo = require("../logo-directory");

const Settings = () => {
  return (
    <View styles={styles.container}>
      <View>
        <Text>Settings</Text>
      </View>
      <View>
        <Image source={shazamLogo} />
        <Text>Save your Shazams</Text>
        <Pressable styles={{ backgroundColor: "blue", color: "white" }}>
          SIGN UP OR LOG IN
        </Pressable>
      </View>
      <View>
        <Text styles={{ color: "blue" }}>GENERAL SETTINGS</Text>

        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
