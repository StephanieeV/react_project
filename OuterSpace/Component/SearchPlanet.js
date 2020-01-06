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
        <View style={styles.container}>
          <Text style={styles.policeText}>
            Choisissez une planète pour afficher ses informations !
          </Text>
          <TextInput
            style={(styles.policeText, styles.input)}
            placeholder="Saisir une planète"
            onChangeText={text => this.setState({ text })}
          ></TextInput>
          <Button
            onPress={text => this.getPlanet()}
            title="Rechercher"
          ></Button>
        </View>
        <FlatList
          data={this.state.planètes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.infos}>
              <Text style={styles.policeText}>
                Host Name: {item.pl_hostname}
              </Text>
              <Text style={styles.policeText}>
                Planet Letter: {item.pl_letter}
              </Text>
              <Text style={styles.policeText}>Planet Name: {item.pl_name}</Text>
              <Text style={styles.policeText}>
                Discovery Mode: {item.pl_discmethod}
              </Text>
              <Text style={styles.policeText}>
                Orbital Period (days): {item.pl_orbper}
              </Text>
              <Text style={styles.policeText}>
                Date of Last Update: {item.rowupdate}
              </Text>
              {/* 
              <Button
                onPress={() => {
                  this.props.navigation.navigate("Details");
                }}
                title="details"
              ></Button> */}
            </View>
          )}
        />
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

      //"https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=JSON&where=pl_hostname like 'Kepler-87'"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ planètes: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  infos: {
    marginBottom: 10,
    marginLeft: 5
  },
  policeText: {
    fontFamily: "Verdana"
  },
  input: {
    width: 150
  }
});
