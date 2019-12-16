import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchPlanet from "../Component/SearchPlanet";
import Accueil from "../Component/Accueil";
import Accueil from "../Component/MeteoMars";

const SearchStackNavigator = createStackNavigator({
  SearchPlanet: {
    screen: SearchPlanet,

    navigationOptions: {
      title: "Rechercher"
    }
  }
});

export default createAppContainer(SearchStackNavigator);
