// vue de la recherche planette
// mettre un bouton et input comme pour
// les livres, et afficher une flatlist
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
    this.state = {
      text: "",
      text_titre: "",
      planètes: [],
      isLoading: true
    };
  }
  render() {
    return (
      <View>
        <Text>Choisissez une planète pour afficher ses informations !</Text>
        <TextInput
          style={{ width: 120 }}
          placeholder="Saisir une planète"
          onChangeText={text => this.setState({ text })}
        ></TextInput>
        <Button onPress={text => this.getPlanet()} title="Rechercher"></Button>

        {/* <FlatList
          data={this.state.planètes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <Text
                onPress={() =>
                  Linking.openURL(this.test_lien(item.saleInfo.buyLink))
                }
              >
                Nom: {item.volumeInfo.title}
              </Text>
              <View style={styles.vue_image}>
                <Image
                  style={styles.image}
                  source={this.test_img(item.volumeInfo.imageLinks)}
                />
              </View>

              <Button
                onPress={() => {
                  this.props.navigation.navigate("Details");
                }}
                title="details"
              ></Button>
            </View>
          )}
        /> */}
      </View>
    );
  }

  //   test_desc(description) {
  //     if (description != undefined) {
  //       return description.substring(0, 100);
  //     } else {
  //       return "";
  //     }
  //   }
  //   test_img(image) {
  //     if (image != undefined) {
  //       return { uri: image.smallThumbnail };
  //     } else {
  //       return require("../img.jpeg");
  //     }
  //   }
  //   test_date(date) {
  //     if (date != undefined) {
  //       return date;
  //     } else {
  //       return "";
  //     }
  //   }
  //   test_lien(lien) {
  //     if (lien != undefined) {
  //       return lien;
  //     } else {
  //       return "https://play.google.com/store/books/404";
  //     }
  //   }

  getPlanet() {
    return fetch(
      //   "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=JSON&where=pl_kepflag=1" +
      //     this.state.text

      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=JSON&where=pl_hostname like '" +
        this.state.text +
        "'"
    )
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson);
        this.setState({ planètes: responseJson.items });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
