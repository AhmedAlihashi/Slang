import React from "react";
import { Grid, Segment, Comment, Header } from "semantic-ui-react";
import { Comments, RecommendedContent } from "../";
import { VideoPlayer } from "../modules";

const Body = ({ demoVid }) => (
  <Grid.Column width={14}>
    <Segment basic id="NoDrag">
      <Segment>
        <Grid columns="equal">
          <Grid.Column width={11}>
            <Segment piled textAlign="center" style={{ overflowY: "" }}>
              <VideoPlayer src={demoVid} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <div style={{ height: "auto", overflowY: "hidden" }}>
              <Segment>
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

export default Body;
