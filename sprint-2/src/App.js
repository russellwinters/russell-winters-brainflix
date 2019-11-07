import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PostComponent from "./components/PostComponent";
import UploadPage from "./components/UploadPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <PostComponent {...props} />}
          />
          <Route path="/videos/:videoID" component={PostComponent} />
          <Route path="/upload" component={UploadPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
