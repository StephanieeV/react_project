// vue de la recherche planète
// mettre un bouton et input comme pour
// les livres, et afficher une flatlist
import React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import { StyleSheet, Text, View, FlatList } from "react-native";

import { Button, Input } from "galio-framework";

class SearchPlanet extends React.Component {
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
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.policeText}>
              Choisissez une planète pour afficher ses informations !
            </Text>
            <Input
              style={(styles.policeText, styles.input)}
              right
              icon="search1"
              family="antdesign"
              iconSize={14}
              placeholder="Saisir une planète"
              onChangeText={text => this.setState({ text })}
            ></Input>
            <Button
              style={styles.button}
              round
              size="small"
              color="#808080"
              onPress={text => this.getPlanet()}
            >
              Rechercher
            </Button>
          </View>
          <FlatList
            data={this.state.planètes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.infos}>
                <Text style={styles.policeText}>
                  Host Name:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.pl_hostname}
                </Text>
                <Text style={styles.policeText}>
                  Planet Letter:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.pl_letter}
                </Text>
                <Text style={styles.policeText}>
                  Planet Name:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.pl_name}
                </Text>
                <Text style={styles.policeText}>
                  Discovery Mode:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.pl_discmethod}
                </Text>
                <Text style={styles.policeText}>
                  Orbital Period (days): &nbsp;&nbsp;&nbsp;
                  {item.pl_orbper}
                </Text>
                <Text style={(styles.policeText, styles.space)}>
                  Date of Last
                  Update:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.rowupdate}
                </Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
  _update() {
    const action = {
      type: "UPDATE",
      value: this.state.item
    };
    this.props.dispatch(action);
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
      });
  }
}
const mapStateToProps = state => {
  return {
    text: "",
    text_titre: "",
    planètes: []
  };
};

export default connect(mapStateToProps)(SearchPlanet);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    fontFamily: "Verdana"
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
    height: 40
  },
  button: {
    marginTop: 40,
    marginBottom: 50
  },
  space: {
    marginBottom: 30
  }
});
