// Affiche les détails de l'accueil
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "", content: false };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        
        <Text style={styles.title}>{this.state.item.title}</Text>
        <Image 
          style={styles.stretch}
          source={{uri: this.state.item.url}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.text}>{this.state.item.explanation}</Text>
        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    return fetch(
      "https://api.nasa.gov/planetary/apod?api_key=PAQslsDyD4gonPcnIngcaOv2w9wfJXYAysOEi5OY"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ item: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginLeft: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
  }
});
