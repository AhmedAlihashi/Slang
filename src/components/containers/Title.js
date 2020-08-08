import React, { Component } from "react";
import {
  Header,
  Grid,
  Button,
  Icon,
  Input,
  Statistic,
} from "semantic-ui-react";

class Title extends Component {
  state = {};

  componentDidMount() {}

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });

  render() {
    const { context } = this.props;

    const renderSwitch = (props) => {
      switch (props) {
        case 1:
          return <Icon name="remove" color="red" size="small" />;
        case 2:
          return <Icon name="meh" color="orange" size="small" />;
        case 3:
          return <Icon name="hand pointer" color="blue" size="small" />;
        case 4:
          return <Icon name="hand peace" color="green" size="small" />;
        default:
          return <Icon name="leaf" color="yellow" size="small" />;
      }
    };
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
          <Grid columns="equal">
            <Grid.Column width={12}>
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
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="mini">
                <Statistic.Value>
                  <span style={{ fontSize: 17, fontWeight: "bold" }}>Lv. </span>
                  {renderSwitch(context.state.Levels)}
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid>
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
