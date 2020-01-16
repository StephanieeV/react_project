import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchPlanet from "../Component/SearchPlanet";

const SearchStackNavigator = createStackNavigator({
  SearchPlanet: {
    screen: SearchPlanet,

    navigationOptions: {
      title: "Rechercher"
    }
  }
});

export default createAppContainer(SearchStackNavigator);
