// afficher la meteo sur mars
import React from "react";
import { connect } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  Table,
  Image,
  TextInput,
  FlatList,
  Button,
  Linking,
  WebView
} from "react-native";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [],
      isLoading: true,
      solJour: "",
      infosWeek: []
    };
  }

  render() {
    return (
      <View>
        <Text>Météo de Mars</Text>
        <View>
          <Text>Latest Weather at Elysium Planitia</Text>
          <Text>
            InSight is taking daily weather measurements (temperature, wind,
            pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
            plain near Mars’ equator.
          </Text>
          <Text>
            sol : {this.state.solJour}, saison : {this.state.infos.season}
          </Text>
          <Text>Temperature</Text>
          {this.getTemperature()}
          <Text>Météo de la semaine passée</Text>

          <FlatList
            data={this.state.infosWeek}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View>
                <Text>sol : {this.getDate(item.volumeInfo.publishedDate)}</Text>
                <Text>
                  average temperature : {item.air.temperature.average}...
                </Text>
              </View>
            )}
          />
          <Text>Bilan des données météorologique de la semaine</Text>
        </View>
      </View>
    );
  }

  componentWillMount() {
    return fetch("https://api.mars.spacexcompanion.app/v1/weather/latest")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          solJour: responseJson.sol,
          infos: responseJson,
          infosWeek: []
        });
        for (let i = 1; i < 8; i++) {
          this.getInfosWeek(i);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  getInfosWeek(i) {
    return fetch(
      "https://api.mars.spacexcompanion.app/v1/sols/" +
        (this.state.solJour - i).toString()
    )
      .then(response => response.json())
      .then(responseJson => {
        this.state.infosWeek.push(responseJson);
        console.log(this.state.infosWeek);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getTemperature() {
    if (this.state.infos.air !== undefined) {
      return (
        <View>
          <Text>min : {this.state.infos.air.temperature.minimum}</Text>
          <Text>max : {this.state.infos.air.temperature.maximum}</Text>
          <Text>moyenne : {this.state.infos.air.temperature.average}</Text>
        </View>
      );
    }
  }
}
