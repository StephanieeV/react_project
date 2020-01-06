// Affiche l'image du jour
import React from "react";

import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
<<<<<<< HEAD
import { Button, Block } from 'galio-framework';
import { AuthSession } from "expo";
=======
import { Button } from "galio-framework";

>>>>>>> e6506f1fb0fb94a5519f1b7da5333072345496fe
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
        <Text style={styles.date}>Image du {this.state.item.date}</Text>
        <Text style={styles.title}>{this.state.item.title}</Text>
        <Image 
          style={styles.stretch}
          source={{uri: this.state.item.url}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Button style={styles.button} round size="small" color="#808080" onPress={() => { this.props.navigation.navigate("DetailsAccueil");}}>Afficher l'explication</Button>
=======
          <Text>Image du jour du : {this.state.item.date}</Text>
          <Text>Titre : {this.state.item.title}</Text>
          <Image
            style={styles.stretch}
            source={{ uri: this.state.item.url }}
            PlaceholderContent={<ActivityIndicator />}
          />

          {this.state.content ? (
            <Text> {this.state.item.explanation} </Text>
          ) : null}
          <Button
            round
            size="small"
            color="#808080"
            type="outline"
            onPress={() => {
              this.props.navigation.navigate("DetailsAccueil");
            }}
          >
            Afficher l'explication
          </Button>
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
    marginTop: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {
    marginBottom: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 50,
    marginLeft: 50,
  },
});
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
  }
});
>>>>>>> e6506f1fb0fb94a5519f1b7da5333072345496fe
