import React, { Component } from "react";
import { Comment } from "semantic-ui-react";

export default class Comments extends Component {
  render() {
    const { author, content } = this.props;
    return (
      <Comment>
        {/* <Comment.Avatar as='a' src='/images/avatar/small/matt.jpg' /> */}
        <Comment.Content>
          <Comment.Author as="a">{author}</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text>{content}</Comment.Text>
          <Comment.Actions>
            <span>
              <p>
                Reply {"    "}20 <i className="thumbs up outline"></i>
              </p>
            </span>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}
