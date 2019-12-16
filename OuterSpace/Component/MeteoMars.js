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
    render() {
        return (
            <View>
                <Text>Météo de Mars</Text>
                <Text>Dernier Jour validé</Text>
                
                <Text>Météo de la semaine passée</Text>

                <Text>Bilan des données météorologique de la semaine</Text>
                <Table></Table>
            </View>
    );
  }
}
