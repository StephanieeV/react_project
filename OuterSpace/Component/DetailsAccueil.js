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
  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{this.state.item.title}</Text>
          <Image
            style={styles.stretch}
            source={{ uri: this.state.item.url }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text>{this.state.item.explanation}</Text>
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
