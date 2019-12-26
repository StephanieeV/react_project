// Affiche l'image du jour
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: '', exp: '', content: false};
  }
  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text>Image du jour du {this.state.item.date}</Text>
        <Text>Titre : {this.state.item.title}</Text>
        <Image 
          style={styles.stretch}
          source={{uri: this.state.item.url}}
        />

        {
        this.state.content ? <Text> {this.state.item.explanation} </Text> : null
        } 
        <Button onPress={this.componentHideAndShow} title="Afficher l'explication"></Button>

        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=PAQslsDyD4gonPcnIngcaOv2w9wfJXYAysOEi5OY')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ item : responseJson });
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