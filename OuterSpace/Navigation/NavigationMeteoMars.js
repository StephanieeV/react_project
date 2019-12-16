import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchPlanet from "../Component/SearchPlanet";
import Accueil from "../Component/Accueil";
import MeteoMars from "../Component/MeteoMars";

const SearchStackNavigator = createStackNavigator({
  Accueil: {
    screen: MeteoMars,

    navigationOptions: {
      title: "Meteo Mars"
    }
  }
});

export default createAppContainer(SearchStackNavigator);
