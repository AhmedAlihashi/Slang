import React, { useState, useEffect } from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Button,
  Sidebar,
} from "semantic-ui-react";
import "./../App.css";
import { Body } from "../components/containers";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="slide along"
        icon="labeled"
        inverted
        onHide={() => setSidebarVisible(!sidebarVisible)}
        vertical
        visible={sidebarVisible}
        width="thin"
      >
        <Menu.Item as="a">Home</Menu.Item>
        <Menu.Item as="a">Games</Menu.Item>
        <Menu.Item as="a">Channels</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarVisible}>
        <Segment basic style={{ padding: 0 }}>
          <div className="AppHeader">
            <div style={{ margin: 10 }}>
              <Button
                fluid
                compact
                id="NoDrag"
                icon="bars"
                color="black"
                style={{ fontSize: "1.5vw" }}
                onClick={() => {
                  setSidebarVisible(!sidebarVisible);
                }}
              />
            </div>

            <div className="AppTitle">
              <div>
                <Header as="h1" style={{ color: "white" }}>
                  Slang.
                </Header>
              </div>
              <Header as="h2" floated="right" id="NoDrag">
                <Button.Group>
                  <Button icon>
                    <Icon className="bell outline icon" />
                  </Button>
                  <Button content="Logout" />
                  <Button
                    icon
                    color="red"
                    onClick={() => {
                      window.close();
                    }}
                  >
                    <Icon className="power off icon" />
                  </Button>
                </Button.Group>
              </Header>
            </div>
          </div>
          <Grid columns={2}>
            <Grid.Row stretched>
              <Grid.Column width={2}>
                <Segment
                  vertical
                  id="NoDrag"
                  inverted
                  style={{
                    alignItems: "flex-start",
                    justifyItems: "center",
                    backgroundColor: "#2d5857",
                  }}
                >
                  <Segment
                    vertical
                    id="NoDrag"
                    inverted
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      marginTop: -15,
                      marginBottom: 15,
                      border: "solid 5px black",
                      backgroundColor: "#7C8C8C",
                    }}
                  >
                    <Button.Group vertical>
                      <Button
                        icon="expand"
                        color="black"
                        style={{ fontSize: "2.5vw" }}
                        onClick={() => {
                          console.log("Picture-in-picture");
                        }}
                      />
                      <Button
                        icon="expand arrows alternate"
                        color="black"
                        style={{ fontSize: "2.5vw" }}
                        onClick={() => {
                          console.log("Fullscreen video");
                        }}
                      />
                      <Button
                        icon="shuffle"
                        color="black"
                        style={{ fontSize: "2.5vw" }}
                        onClick={() => {
                          console.log("Random video");
                        }}
                      />
                    </Button.Group>
                  </Segment>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Button.Group vertical>
                      <Button
                        size="massive"
                        icon="user circle"
                        color="black"
                        onClick={() => {
                          console.log("Picture-in-picture");
                        }}
                      />
                      <Button
                        size="massive"
                        icon="search"
                        color="black"
                        onClick={() => {
                          console.log("Fullscreen video");
                        }}
                      />
                      <Button
                        size="massive"
                        icon="hotjar"
                        color="black"
                        onClick={() => {
                          console.log("Random video");
                        }}
                      />
                      <Button
                        size="massive"
                        icon="expand"
                        color="black"
                        onClick={() => {
                          console.log("Picture-in-picture");
                        }}
                      />
                      <Button
                        size="massive"
                        icon="expand arrows alternate"
                        color="black"
                        onClick={() => {
                          console.log("Fullscreen video");
                        }}
                      />
                      <Button
                        size="massive"
                        icon="history"
                        color="black"
                        onClick={() => {
                          console.log("Random video");
                        }}
                      />
                    </Button.Group>
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column width={14}>
                <Segment basic id="NoDrag">
                  <Body />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default App;
