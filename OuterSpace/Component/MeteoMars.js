// afficher la meteo sur mars
import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        infos: [],
        isLoading: true,
        solJour: '',
        infosWeek: [],
      };
    }
    
    render() {
      return <ScrollView>
            <Text>Latest Weather at Elysium Planitia</Text>
            <Text>InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. </Text>
            <Text>sol : {this.state.solJour}, saison : {this.state.infos.season}</Text>
            <Text>Temperature</Text>
            {this.getTemperature()}
            <Text>Météo de la semaine passée</Text>

            <FlatList
              data= {this.state.infosWeek}
              keyExtractor = {item => ''+item.sol}
              renderItem={({item}) =>
                <View>
              <Text>sol : {item.sol} - season : {item.season}</Text>
                  <Text>average temperature : {item.air.temperature.average }°C</Text>
                </View>
              }
            />

          </View>;
  }

  componentWillMount() {
    return fetch("https://api.mars.spacexcompanion.app/v1/weather/latest" )
    .then((response) => response.json())
    .then(async (responseJson) => {
      this.setState({
        solJour: responseJson.sol,
        infos: responseJson,
      });
      var weekPromises = [];
      for(let i = 1; i<8; i++){
        weekPromises.push(this.getInfosWeek(i));
      }
      var week = await Promise.all(weekPromises);
      this.setState({
        infosWeek: week,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getInfosWeek(i) {
    return fetch("https://api.mars.spacexcompanion.app/v1/sols/" + (this.state.solJour-i).toString())
    .then((response) => response.json())
  }

 getTemperature(){
   if(this.state.infos.air !== undefined){
    return <View>

      <Text>min : {this.state.infos.air.temperature.minimum}</Text>
      <Text>max : {this.state.infos.air.temperature.maximum}</Text>
      <Text>moyenne : {this.state.infos.air.temperature.average}</Text>
    </View>;
  }
  }
}
