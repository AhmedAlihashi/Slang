import React, { useState, useEffect } from "react";
import { Grid, Icon, Menu, Segment, Button, Sidebar } from "semantic-ui-react";
import "./../App.css";
import { Header, Body } from "../components/containers";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="AppContainer">
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
          <Grid columns={2}>
            <Grid.Column width={16}>
              <div style={{ border: "solid green" }}>
                <Header />
              </div>
            </Grid.Column>
            <Grid.Row stretched>
              <Grid.Column width={2}>
                <Segment
                  id="NoDrag"
                  inverted
                  color="black"
                  style={{
                    alignItems: "flex-start",
                    justifyItems: "center",
                    paddingTop: 10,
                  }}
                >
                  <Button
                    id="NoDrag"
                    icon="bars"
                    fluid
                    compact
                    color="blue"
                    style={{ fontSize: "1vw" }}
                    onClick={() => {
                      setSidebarVisible(!sidebarVisible);
                    }}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={14}>
                <Segment basic id="NoDrag">
                  <div
                    style={{
                      textAlign: "left",
                      border: "solid red",
                      padding: 20,
                    }}
                  >
                    <Body />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default App;
