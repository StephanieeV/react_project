import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Accueil from "../Component/Accueil";
import DetailsAccueil from "../Component/DetailsAccueil";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "", content: false };
  }
<<<<<<< HEAD
=======
  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };
>>>>>>> e6506f1fb0fb94a5519f1b7da5333072345496fe
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
<<<<<<< HEAD
        
        <Text style={styles.title}>{this.state.item.title}</Text>
        <Image 
          style={styles.stretch}
          source={{uri: this.state.item.url}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.text}>{this.state.item.explanation}</Text>
=======
          <Text>{this.state.item.title}</Text>
          <Image
            style={styles.stretch}
            source={{ uri: this.state.item.url }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text>{this.state.item.explanation}</Text>
>>>>>>> e6506f1fb0fb94a5519f1b7da5333072345496fe
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
<<<<<<< HEAD
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
=======
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch"
>>>>>>> e6506f1fb0fb94a5519f1b7da5333072345496fe
  }
});
