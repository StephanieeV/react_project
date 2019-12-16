import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MeteoMars from "../Component/MeteoMars";

const SearchStackNavigator = createStackNavigator({
  MeteoMars: {
    screen: MeteoMars,

    navigationOptions: {
      title: "Meteo Mars"
    }
  }
});

export default createAppContainer(SearchStackNavigator);
