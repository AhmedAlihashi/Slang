import React, { useState, useEffect } from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Button,
  Sidebar,
  Card,
  Rating,
} from "semantic-ui-react";
import "./../App.css";
import { Title, LeftBar, Body } from "../components/containers";
import { Scrollbars } from "react-custom-scrollbars";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const demoVid =
    "https://firebasestorage.googleapis.com/v0/b/slang-e0aea.appspot.com/o/Will%20%26%20Carlton.mp4?alt=media&token=14a07826-7f5b-4f21-b21f-6b35377cd3cc";

  useEffect(() => {}, []);

  return (
    <Scrollbars id="NoDrag" style={{ width: "100vw", height: "100vh" }}>
      <Segment inverted tertiary style={{ padding: 0 }}>
        <Sidebar.Pushable as="div">
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
              <Grid columns="equal">
                <Grid.Row
                  className="AppHeader"
                  style={{ marginTop: 10, marginRight: 12, marginLeft: 12 }}
                >
                  <Title
                    sidebarVisible={sidebarVisible}
                    setSidebarVisible={setSidebarVisible}
                  />

                  <LeftBar setSidebarVisible={setSidebarVisible} />

                  <Body demoVid={demoVid} />
                </Grid.Row>
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Segment>
    </Scrollbars>
  );
};

export default App;
