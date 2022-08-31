import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from "react-native";

import React from "react";

const BLSButton = (props) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.containerMore}>
        <TouchableOpacity
          style={styles.buttonMore}
          activeOpacity={0.9}
          onPress={() => {
            props.navigate.navigation.openDrawer();
          }}
        >
          <Text style={styles.containerTextMore}>Citeste mai mult.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/");
          }}
          activeOpacity={0.9}
        >
          <Text style={styles.containerText}>Acceseaza site-ul BLS.</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonForum}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/forum/index.php");
          }}
          activeOpacity={0.9}
        >
          <Text style={styles.containerText}>Acceseaza forum-urile BLS.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  containerMore: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
    flexDirection: "row",
    marginHorizontal: 20,
    borderWidth: 2,
    borderTopColor: "white",
    paddingTop: 20,
  },
  containerText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  containerTextMore: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 25,
    flex: 1,
    marginVertical: 2,
    marginLeft: 10,
  },
  buttonForum: {
    backgroundColor: "purple",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonMore: {
    backgroundColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25,
  },
});
export default BLSButton;
