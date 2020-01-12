import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Accueil from "../Component/Accueil";
import DetailsAccueil from "../Component/DetailsAccueil";

const SearchStackNavigator = createStackNavigator({
  Accueil: {
    screen: Accueil,
    navigationOptions: {
      title: "Rechercher"
    }
  },
  DetailsAccueil: {
    screen: DetailsAccueil,
    navigationOptions: {
      title: "Description"
    }
  }
});

export default createAppContainer(SearchStackNavigator);