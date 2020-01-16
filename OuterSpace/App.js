import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
// import Icon from "react-native-ionicons";
//import { Icon } from "react-native-elements";
import Accueil from "./Component/Accueil";
import MeteoMars from "./Component/MeteoMars";
import { createAppContainer } from "react-navigation";
import SearchPlanet from "./Component/SearchPlanet";
import DetailsAccueil from "./Component/DetailsAccueil";
import { createStackNavigator } from "react-navigation-stack";
import { Button } from "galio-framework";

import { createBottomTabNavigator } from "react-navigation-tabs";

const AccueilStackNavigator = createStackNavigator({
  Accueil: {
    screen: Accueil,
    navigationOptions: {
      title: "Accueil"
    }
  },
  DetailsAccueil: {
    screen: DetailsAccueil,
    navigationOptions: {
      title: "Description"
    }
  }
});
const MeteoMarsStackNavigator = createStackNavigator({
  MeteoMars: {
    screen: MeteoMars,
    navigationOptions: {
      title: "Meteo sur mars"
    }
  }
});
const SearchPlanetStackNavigator = createStackNavigator({
  SearchPlanet: {
    screen: SearchPlanet,
    navigationOptions: {
      title: "Recherche de planète"
    }
  }
});

const BottomTabNavigator = createBottomTabNavigator({
  Accueil: {
    screen: AccueilStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      )
    }
  },
  MeteoMars: {
    screen: MeteoMarsStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cloud-sun-rain" size={25} color={tintColor} />
      )
    }
  },
  SearchPlanet: {
    screen: SearchPlanetStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={25} color={tintColor} />
      )
    }
  }
});

export default createAppContainer(BottomTabNavigator);
