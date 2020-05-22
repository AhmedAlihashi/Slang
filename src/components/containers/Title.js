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

        <Grid.Column width={6}>
          <Header
            floated="left"
            as="h3"
            textAlign={"left"}
            style={{ color: "white" }}
          >
            <Header.Content>
              The Will & Carlton Dance
              <Header.Subheader style={{ color: "black" }}>
                Will & Carlton
                <div id="NoDrag">
                  <Rating
                    onRate={this.handleRate}
                    maxRating={5}
                    // defaultRating={rating}
                    icon="star"
                    size="large"
                  />
                </div>
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>

        <Grid.Column width={5}>
          <Input
            id="NoDrag"
            fluid
            icon="search"
            iconPosition="left"
            placeholder="Search..."
          />
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
