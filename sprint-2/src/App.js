import React from "react";
import Header from "./components/Header";
import PostComponent from "./components/PostComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PostComponent />
      </div>
    );
  }
}

export default App;
