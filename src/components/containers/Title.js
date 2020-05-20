import React, { Component } from "react";
import { Header, Grid, Rating, Button, Icon, Input } from "semantic-ui-react";

class Title extends Component {
  state = {};

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });

  render() {
    const { sidebarVisible, setSidebarVisible } = this.props;
    return (
      <>
        <Grid.Column width={2}>
          <Header
            as="h1"
            textAlign={"left"}
            style={{ color: "white", fontSize: "250%" }}
          >
            Slang.
          </Header>
        </Grid.Column>

        <Grid.Column width={4}>
          <Header
            floated="left"
            as="h3"
            textAlign={"left"}
            style={{ color: "white" }}
          >
            <Header.Content>
              The Will & Carlton Dance
              <Header.Subheader as="h4" style={{ color: "white" }}>
                Will & Carlton
              </Header.Subheader>
              <Header.Subheader as="h5">Nov 13, 1995</Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>

        <Grid.Column width={4}>
          <Input
            id="NoDrag"
            fluid
            icon="search"
            iconPosition="left"
            placeholder="Search..."
          />
        </Grid.Column>

        <Grid.Column width={3}>
          <Header floated="right" style={{ color: "white" }}>
            <div id="NoDrag">
              <Rating
                onRate={this.handleRate}
                maxRating={5}
                // defaultRating={rating}
                icon="star"
                size="large"
              />
            </div>
            <div id="NoDrag">
              <Button.Group size="small">
                <Button
                  icon="share alternate"
                  basic
                  color="black"
                  onClick={() => {
                    console.log("share");
                  }}
                />
                <Button
                  icon="save outline"
                  basic
                  color="black"
                  onClick={() => {
                    console.log("save");
                  }}
                />
                <Button
                  icon="flag outline"
                  basic
                  color="black"
                  onClick={() => {
                    console.log("flag");
                  }}
                />
              </Button.Group>
            </div>
          </Header>
        </Grid.Column>

        <Grid.Column width={3}>
          <Button.Group id="NoDrag" floated="right">
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
        </Grid.Column>
      </>
    );
  }
}

export default Title;
