import Accueil from "./Component/Accueil";
import MeteoMars from "./Component/MeteoMars";
import { createAppContainer } from "react-navigation";
import SearchPlanet from "./Component/SearchPlanet";
import DetailsAccueil from "./Component/DetailsAccueil";
import { createStackNavigator } from "react-navigation-stack";

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
  Accueil: AccueilStackNavigator,
  MeteoMars: MeteoMarsStackNavigator,
  SearchPlanet: SearchPlanetStackNavigator
});

export default createAppContainer(BottomTabNavigator);
