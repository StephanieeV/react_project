import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationAccueil from "./Navigation/NavigationAccueil";
import NavigationSearchPlanet from "./Navigation/NavigationSearchPlanet";
import NavigationMeteoMars from "./Navigation/NavigationMeteoMars";
import TabNavigation from "./Navigation/TabNavigation";
import StackNavigation from "./Navigation/StackNavigation";

export default class App extends React.Component {
  render() {
    return (<TabNavigation />), (<StackNavigation />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
