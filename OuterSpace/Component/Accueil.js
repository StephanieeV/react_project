// Affiche l'image du jour
import React from "react";

import { StyleSheet, View, ActivityIndicator, Image } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { Button, Text } from "galio-framework";

export default class Accueil extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item: "", content: false};
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text muted style={styles.text}>
            Image du {this.state.item.date}
          </Text>
          <Text h5 bold style={styles.text}>
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
          >Afficher l'explication
          </Button>

              {/* <Block style={styles.slider}>
                <Slider
                  disabled
                  activeColor="#F6A127"
                  thumbStyle = {styles.colorMin}
                  maximumValue={200}
                  minimumValue={-200}
                  value= {2}
                />
                <Text>Valeur: {this.state.value}</Text>
                <Slider
                  disabled
                  activeColor="#E19426"
                  thumbStyle = {styles.colorMax}
                  maximumValue={200}
                  minimumValue={-200}
                  value={100}
                />
                <Text>Valeur: {100}</Text>
                <Slider
                  disabled
                  activeColor="#AD6D11"
                  thumbStyle ={styles.colorAverage}
                  maximumValue={200}
                  minimumValue={-200}
                  value={-50}
                />
                <Text>Valeur: {-50}</Text>
              </Block> */}
              
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
  text: {
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    marginTop: 50,
    marginLeft: 60
  }
  // slider: {
  //   width: 250, 
  //   marginLeft: 20
  // },
  // colorMin: {
  //   borderColor: '#F6A127'
  // },
  // colorMax: {
  //   borderColor: '#E19426'
  // },
  // colorAverage: {
  //   borderColor: '#AD6D11'
  // }
});
