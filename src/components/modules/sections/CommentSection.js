import React from "react";
import { Comment, Header } from "semantic-ui-react";
import { Comments } from "../..";

const CommentSection = () => {
  return (
    <Comment.Group size="mini">
      <Header as="h3" dividing>
        Comments
      </Header>
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
      <Comments author="John Doe" content="Look at this comment" />
    </Comment.Group>
  );
};

export default CommentSection;
