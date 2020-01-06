import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Accueil from "../Component/Accueil";
import SearchPlanet from "../Component/SearchPlanet";

const SearchStackNavigator = createStackNavigator({
  Accueil: {
    screen: Accueil,

    navigationOptions: {
      title: "Accueil"
    }
  }
});

export default createAppContainer(SearchStackNavigator);
