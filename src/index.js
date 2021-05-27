import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/contact/:id">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
