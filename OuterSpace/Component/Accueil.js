// afficher l'image du jour
import React from "react";

import {
  StyleSheet,
  Text,
  View,
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
    this.state = {text: '', item: []};
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={(text) => this.getImageDuJour()} title="Afficher l'image du jour"></Button>
        <Text>Titre : {this.state.item.title}</Text>
        <Image 
          style={styles.stretch}
          source={{uri: this.state.item.url}}
        />
        <Text>Date : {this.state.item.date}</Text>
        <Text>Explication : {this.state.item.explanation}</Text>
      </View>
    );
  }
  getImageDuJour() {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=PAQslsDyD4gonPcnIngcaOv2w9wfJXYAysOEi5OY')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ item : responseJson});
    })
    .catch((error) => {
      console.error(error);
    }); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  }
});