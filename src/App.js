import React, { useState, useEffect } from "react";
import {
  Header,
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import "./App.css";
import Body from "./components/containers/Body";

const Core = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <div style={{ borderStyle: "solid", borderColor: "coral" }}>
          <App />
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const App = () => (
  <div className="AppContainer" style={{ padding: 10 }}>
    <div className="AppHeader">
      <Header as="h1">
        <span>
          <Button icon="bars" size="massive" />
        </span>
        Slang.
      </Header>
      <Header as="h2" floated="right" id="NoDrag">
        <Button.Group>
          <Button icon>
            <Icon name="bell outline icon" />
          </Button>
          <Button content="Logout" />
          <Button
            icon
            color="red"
            onClick={() => {
              window.close();
            }}
          >
            <Icon name="power off icon" />
          </Button>
        </Button.Group>
      </Header>
    </div>
    <div className="App">
      <Body />
    </div>
  </div>
);

export default Core;
