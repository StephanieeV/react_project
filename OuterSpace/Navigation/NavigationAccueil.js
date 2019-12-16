import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchPlanet from "../Component/SearchPlanet";
import Accueil from "../Component/Accueil";

const SearchStackNavigator = createStackNavigator({
  Accueil: {
    screen: Accueil,

    navigationOptions: {
      title: "Accueil"
    }
  }
});

export default createAppContainer(SearchStackNavigator);
