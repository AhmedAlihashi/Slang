import React, { Component } from "react";
import { Grid, Rating, Segment, Header, Icon } from "semantic-ui-react";
import { RecommendedContent } from "../";
import {
  VideoPlayer,
  ContentOptions,
  CommentSection,
  InfoSection,
  ShareSection,
  SaveSection,
  VidReplySection,
  FlagSection,
} from "../modules";
import { BodyContext } from "../../Reactor/Context/BodyContext";

class Body extends Component {
  state = {
    rating: undefined,
    maxRating: undefined,
    controlSwitch: "Super Elastic Bubble Plastic",
  };

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating: rating, maxRating: maxRating });

  render() {
    const { demoVid } = this.props;
    const { controlSwitch } = this.state;

    const controlCallback = (controlSwitch) => {
      this.setState({ controlSwitch: controlSwitch });
    };

    const controlOptions = (controlSwitch) => {
      switch (controlSwitch) {
        default:
          return <InfoSection />;
        case "info":
          return <InfoSection />;
        case "comments":
          return <CommentSection />;
        case "share":
          return <ShareSection />;
        case "save":
          return <SaveSection />;
        case "videoReply":
          return <VidReplySection />;
        case "flag":
          return <FlagSection />;
      }
    };
    return (
      <Grid.Column width={14}>
        <BodyContext.Consumer>
          {(context) => {
            console.log(context.infoSwitch);
          }}
        </BodyContext.Consumer>
        <Segment basic id="NoDrag">
          <Segment>
            <Grid columns="equal">
              <Grid.Column width={11}>
                <Header as="h3" floated="right">
                  <ContentOptions controlCallback={controlCallback} />
                </Header>
                <Segment piled textAlign="center" style={{ overflowY: "" }}>
                  <VideoPlayer src={demoVid} />

                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Header floated="left" as="h3">
                          <Header.Content>
                            <Header.Subheader as="h5">
                              Nov 13, 1995
                            </Header.Subheader>
                          </Header.Content>
                        </Header>
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Header floated="right">
                          <Header.Content>
                            <Grid>
                              <Grid.Column width={13}>
                                <Rating
                                  onRate={this.handleRate}
                                  maxRating={5}
                                  // defaultRating={rating}
                                  icon="heart"
                                  size="large"
                                />
                              </Grid.Column>
                              <Grid.Column width={3}>
                                <Icon
                                  link
                                  name="paper plane outline"
                                  color="grey"
                                  onClick={() => {
                                    console.log("rate it");
                                  }}
                                />
                              </Grid.Column>
                            </Grid>
                          </Header.Content>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column width={5}>
                <Segment style={{ maxHeight: "64vh", overflowY: "auto" }}>
                  {controlOptions(controlSwitch)}
                </Segment>
              </Grid.Column>
              <Grid.Column width={16}>
                <Grid.Row stretched>
                  <RecommendedContent />
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment>
      </Grid.Column>
    );
  }
}

export default Body;
