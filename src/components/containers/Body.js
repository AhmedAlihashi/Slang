import React, { Component } from "react";
import {
  Grid,
  Rating,
  Segment,
  Header,
  Icon,
  Popup,
  Button,
} from "semantic-ui-react";
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

                  <Grid style={{ margin: 2 }}>
                    <Grid.Row>
                      <Grid.Column width={5}>
                        <Header floated="left" as="h3">
                          <Header.Content>
                            <Header.Subheader as="h5">
                              Nov 13, 1995
                            </Header.Subheader>
                          </Header.Content>
                        </Header>
                      </Grid.Column>

                      <Grid.Column width={11}>
                        <Header floated="right">
                          <Header.Content>
                            <Grid>
                              <Grid.Column width={7}>
                                <Rating
                                  onRate={this.handleRate}
                                  maxRating={5}
                                  // defaultRating={rating}
                                  icon="heart"
                                  size="large"
                                />
                              </Grid.Column>
                              <Grid.Column width={9}>
                                <Popup
                                  wide
                                  position="bottom center"
                                  on="click"
                                  trigger={
                                    <Button
                                      size="mini"
                                      labelPosition="left"
                                      content="Promote?"
                                      label={{
                                        as: "a",
                                        basic: true,
                                        pointing: "right",
                                        content: "2,048",
                                      }}
                                      onClick={() => {
                                        console.log("rate it");
                                      }}
                                    />
                                  }
                                >
                                  <Grid columns="equal">
                                    <Grid.Column>
                                      <Popup
                                        trigger={
                                          <Button
                                            color="red"
                                            icon={
                                              <Icon
                                                size="large"
                                                name="thumbs down outline"
                                                flipped="horizontally"
                                                color="black"
                                              />
                                            }
                                            label={{
                                              basic: true,
                                              color: "red",
                                              pointing: "left",
                                              content: "725",
                                            }}
                                          />
                                        }
                                        content="wouldnt recommend it"
                                        position="bottom center"
                                        size="tiny"
                                        inverted
                                      />
                                      <Icon />
                                    </Grid.Column>
                                    <Grid.Column>
                                      <Popup
                                        trigger={
                                          <Button
                                            labelPosition="left"
                                            color="blue"
                                            icon={
                                              <Icon
                                                size="large"
                                                name="thumbs up outline"
                                                color="black"
                                              />
                                            }
                                            label={{
                                              basic: true,
                                              color: "blue",
                                              pointing: "right",
                                              content: "733",
                                            }}
                                          />
                                        }
                                        content="wouldnt recommend it"
                                        position="bottom center"
                                        size="tiny"
                                        inverted
                                      />

                                      {/* <Popup
                                        trigger={
                                          <Button
                                            onClick={() => {
                                              console.log("good");
                                            }}
                                            color="blue"
                                            icon={
                                              <Icon
                                                size="large"
                                                name="thumbs up outline"
                                                color="black"
                                              />
                                            }
                                            fluid
                                          />
                                        }
                                        content="would recommend it"
                                        position="bottom center"
                                        size="tiny"
                                        inverted
                                      /> */}
                                    </Grid.Column>
                                  </Grid>
                                </Popup>
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
                <Segment style={{ maxHeight: "63vh", overflowY: "auto" }}>
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
