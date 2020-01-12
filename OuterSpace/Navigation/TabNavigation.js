import Accueil from "../Component/Accueil";
import MeteoMars from "../Component/MeteoMars";
import SearchPlanet from "../Component/SearchPlanet";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

const BottomTabNavigator = createBottomTabNavigator({
  Accueil: Accueil,
  MeteoMars: MeteoMars,
  SearchPlanet: SearchPlanet
});

export default createAppContainer(BottomTabNavigator);
