import React, { Component } from "react";
import {
  Grid,
  Rating,
  Segment,
  Comment,
  Header,
  Button,
} from "semantic-ui-react";
import { Comments, RecommendedContent } from "../";
import { VideoPlayer } from "../modules";

class Body extends Component {
  state = {};

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });

  render() {
    const { demoVid } = this.props;

    return (
      <Grid.Column width={14}>
        <Segment basic id="NoDrag">
          <Segment>
            <Grid columns="equal">
              <Grid.Column width={11}>
                <Segment piled textAlign="center" style={{ overflowY: "" }}>
                  <VideoPlayer src={demoVid} />
                  <span>
                    <Header floated="left" as="h3" textAlign={"left"}>
                      <Header.Content>
                        <Header.Subheader as="h5">
                          Nov 13, 1995
                        </Header.Subheader>
                      </Header.Content>
                    </Header>
                  </span>

                  <span>
                    <Header textAlign={"right"}>
                      <Header.Content>
                        <Rating
                          onRate={this.handleRate}
                          maxRating={5}
                          // defaultRating={rating}
                          icon="heart"
                          size="large"
                        />
                      </Header.Content>
                    </Header>
                  </span>
                </Segment>
              </Grid.Column>
              <Grid.Column width={5}>
                <div style={{ height: "auto", overflowY: "hidden" }}>
                  <Segment>
                    <Button.Group size="small" id="NoDrag">
                      <Button
                        icon="certificate"
                        basic
                        color="grey"
                        onClick={() => {
                          console.log("certified");
                        }}
                      />
                      <Button
                        icon="share alternate"
                        basic
                        color="grey"
                        onClick={() => {
                          console.log("share");
                        }}
                      />
                      <Button
                        icon="save outline"
                        basic
                        color="grey"
                        onClick={() => {
                          console.log("save");
                        }}
                      />
                      <Button
                        icon="flag outline"
                        basic
                        color="grey"
                        onClick={() => {
                          console.log("flag");
                        }}
                      />
                    </Button.Group>
                    <Comment.Group size="mini">
                      <Header as="h3" dividing>
                        Comments
                      </Header>
                      <Comments author="Matt" content="How artistic!" />
                      <Comments author="Matt" content="How artistic!" />
                      <Comments author="Matt" content="How artistic!" />
                      <Comments author="Matt" content="How artistic!" />
                    </Comment.Group>
                  </Segment>
                </div>
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
