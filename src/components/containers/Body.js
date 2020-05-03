import React from "react";
import { Grid, Segment, Comment, Header } from "semantic-ui-react";
import Comments from "../Comments";

const demo = require("../../assets/Will&Carlton.mp4");

const Body = () => (
  <Grid columns="equal" divided>
    <Grid.Column width={11}>
      <Segment piled textAlign="center" style={{ overflowY: "" }}>
        <video width="80%vw" controls id="NoDrag">
          <source src={demo} type="video/mp4" />
        </video>
      </Segment>
    </Grid.Column>
    <Grid.Column>
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
  </Grid>
);

export default Body;
