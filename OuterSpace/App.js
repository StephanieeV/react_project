// App.js

import React from "react";
import Navigation from "./Navigation/Navigation.js";
import { Provider } from "react-redux";
import Store from "./Store/conﬁgureStore.js";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
