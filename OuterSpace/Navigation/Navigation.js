import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Accueil from "../Component/Accueil";
import MeteoMars from "../Component/MeteoMars";
import { createAppContainer } from "react-navigation";
import SearchPlanet from "../Component/SearchPlanet";
import DetailsAccueil from "../Component/DetailsAccueil";
import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs";

const AccueilStackNavigator = createStackNavigator({
  Accueil: {
    screen: Accueil,
    navigationOptions: {
      title: "Accueil",
      headerTitleStyle: {
        color: "gray"
      }
    }
  },
  DetailsAccueil: {
    screen: DetailsAccueil,
    navigationOptions: {
      title: "Description",
      headerTitleStyle: {
        color: "gray"
      },
      headerTintColor: "#E19426ed"
    }
  }
});
const MeteoMarsStackNavigator = createStackNavigator({
  MeteoMars: {
    screen: MeteoMars,
    navigationOptions: {
      title: "Meteo sur mars",
      headerTitleStyle: {
        color: "gray"
      }
    }
  }
});
const SearchPlanetStackNavigator = createStackNavigator({
  SearchPlanet: {
    screen: SearchPlanet,
    navigationOptions: {
      title: "Recherche de planète",
      headerTitleStyle: {
        color: "gray"
      }
    }
  }
});

const BottomTabNavigator = createBottomTabNavigator({
  Accueil: {
    screen: AccueilStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "#E19426",
        inactiveTintColor: "gray"
      }
    }
  },
  "Météo Mars": {
    screen: MeteoMarsStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cloud-sun-rain" size={25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "#E19426",
        inactiveTintColor: "gray"
      }
    }
  },
  "Recherche Planète": {
    screen: SearchPlanetStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "#E19426",
        inactiveTintColor: "gray"
      }
    }
  }
});

export default createAppContainer(BottomTabNavigator);
