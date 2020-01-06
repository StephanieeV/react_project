// afficher la meteo sur mars
import React from "react";
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
      apikey: "PAQslsDyD4gonPcnIngcaOv2w9wfJXYAysOEi5OY",
      infos: [],
      isLoading: true,
      solKeys: []
    };
  }

  render() {
    this.getInfos();
    return (
      <View>
        <Text>Météo de Mars</Text>
        <View>
          {/* <Text>Dernier Jour validé : sol n°{this.getSolKey()}</Text>
          <Text>{this.getTemperature()}</Text> */}
          <Text>Météo de la semaine passée</Text>
          <Text>Bilan des données météorologique de la semaine</Text>
        </View>
      </View>
    );
  }

  getInfos() {
    return fetch(
      "https://api.nasa.gov/insight_weather/?api_key=PAQslsDyD4gonPcnIngcaOv2w9wfJXYAysOEi5OY&feedtype=json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ infos: responseJson, solKeys: responseJson.sol_keys });
      })
      .catch(error => {
        console.error(error);
      });
  }

  getTemperature() {
    console.log(this.infos[6]);
    return "coucou";
  }

  getSolKey() {
    return this.state.solKeys[6];
  }
}
