import React from "react";
import { Grid, Segment, Comment, Header } from "semantic-ui-react";
import { Comments, RecommendedContent } from "../";
import { VideoPlayer } from "../modules";

const demo =
  "https://firebasestorage.googleapis.com/v0/b/slang-e0aea.appspot.com/o/Will%26Carlton.mp4?alt=media&token=2d384eed-d8b3-447c-b411-9430a88516d2";

const Body = () => (
  <Segment>
    <Grid columns="equal">
      <Grid.Column width={11}>
        <Segment piled textAlign="center" style={{ overflowY: "" }}>
          <VideoPlayer src={demo} />
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
);

export default Body;
