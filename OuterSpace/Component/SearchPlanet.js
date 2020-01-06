// vue de la recherche planète
// mettre un bouton et input comme pour
// les livres, et afficher une flatlist
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";

import { Button } from 'galio-framework';

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
            style={styles.button}
            round size="small" 
            color="#808080"
            onPress={text => this.getPlanet()}
          >Rechercher</Button>
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
            </View>
          )}
        />
      </View>
    );
  }
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
    marginLeft: 20
  },
  policeText: {
    fontFamily: "Verdana"
  },
  input: {
    marginTop: 30,
    width: 200,
    borderColor: '#808080', 
    borderWidth: 1,
    borderRadius: 20,
    height: 40
  },
  button: {
    marginTop: 40,
    marginBottom: 50
  }
});
