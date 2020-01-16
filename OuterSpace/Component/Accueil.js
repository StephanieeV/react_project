// Affiche l'image du jour
import React from "react";

import { StyleSheet, View, ActivityIndicator, Image } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { Button, Text } from "galio-framework";
import { connect } from "react-redux";

class Accueil extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item: "", content: false };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text muted style={styles.date}>
            Image du {this.state.item.date}
          </Text>
          <Text h5 bold style={styles.title}>
            {this.state.item.title}
          </Text>
          <Image
            style={styles.stretch}
            source={{ uri: this.state.item.url }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Button
            style={styles.button}
            round
            size="small"
            color="#808080"
            onPress={() => {
              this.props.navigation.navigate("DetailsAccueil");
            }}
          >
            Afficher l'explication
          </Button>
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
  _toggle() {
    const action = {
      type: "TOGGLE",
      value: this.state.item
    };
    this.props.dispatch(action);
  }
}

const mapStateToProps = state => {
  return { item: "", content: false };
};

export default connect(mapStateToProps)(Accueil);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 20
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
    alignItems: "center",
    marginTop: 20
  },
  title: {
    marginBottom: 20,
    textAlign: "center"
  },
  date: {
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    marginTop: 50,
    marginLeft: 50
  }
});
