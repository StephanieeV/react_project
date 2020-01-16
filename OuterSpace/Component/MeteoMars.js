// affiche la meteo sur mars
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import {  Slider, Block } from "galio-framework";

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
      return (
      <View style={styles.container}>
        <ScrollView>
            <Text>Latest Weather at Elysium Planitia</Text>
            <Text style={styles.text}>InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. </Text>
            <Text style={styles.text}>sol : {this.state.solJour} - saison : {this.state.infos.season}</Text>
            <Text style={styles.textBold}>Température :</Text>
            {this.getTemperature()}
            <Text style={styles.textBold}>Météo de la semaine passée :</Text>

            <FlatList
              data= {this.state.infosWeek}
              keyExtractor = {item => ''+item.sol}
              renderItem={({item}) => (
            <View>
              <Text style={styles.text}>sol : {item.sol} - saison : {item.season}</Text>
              <Text>température moyenne : {item.air.temperature.average }°C</Text>
              <Block style={styles.slider}>
                <Slider
                  disabled
                  activeColor="#AD6D11"
                  thumbStyle = {styles.colorAverage}
                  maximumValue={50}
                  minimumValue={-150}
                  value= {item.air.temperature.average }
                />
              </Block>
            </View>
          )}
          />
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
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
              <Block style={styles.slider}>
                <Slider
                  disabled
                  activeColor="#F6A127"
                  thumbStyle = {styles.colorMin}
                  maximumValue={50}
                  minimumValue={-150}
                  value= {this.state.infos.air.temperature.minimum}
                />
                <Text>min : {this.state.infos.air.temperature.minimum}°C</Text>
                <Slider
                  disabled
                  activeColor="#E19426"
                  thumbStyle = {styles.colorMax}
                  maximumValue={50}
                  minimumValue={-150}
                  value={this.state.infos.air.temperature.maximum}
                />
                <Text>max : {this.state.infos.air.temperature.maximum}°C</Text>
                <Slider
                  disabled
                  activeColor="#AD6D11"
                  thumbStyle ={styles.colorAverage}
                  maximumValue={50}
                  minimumValue={-150}
                  value={this.state.infos.air.temperature.average}
                />
                <Text style={styles.text}>moyenne : {this.state.infos.air.temperature.average}°C</Text>
              </Block>
            </View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  slider: {
    width: 250,
    marginLeft: 20
  },
  colorMin: {
    borderColor: '#F6A127'
  },
  colorMax: {
    borderColor: '#E19426'
  },
  colorAverage: {
    borderColor: '#AD6D11'
  },
  text: {
    marginBottom: 10
  },
  textBold: {
    fontWeight: 'bold',
    marginBottom: 10
  }
});