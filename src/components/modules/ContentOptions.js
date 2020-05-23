import React from "react";

import { Button } from "semantic-ui-react";

const ContentOptions = ({ controlCallback }) => {
  const sentData = (props) => {
    controlCallback(props);
  };

  return (
    <Button.Group size="small" id="NoDrag">
      <Button
        icon="info"
        basic
        color="grey"
        onClick={() => {
          sentData("info");
        }}
      />
      <Button
        icon="comments"
        basic
        color="grey"
        onClick={() => {
          sentData("comments");
        }}
      />

      <Button
        icon="share alternate"
        basic
        color="grey"
        onClick={() => {
          sentData("share");
        }}
      />
      <Button
        icon="save outline"
        basic
        color="grey"
        onClick={() => {
          sentData("save");
        }}
      />
      <Button
        icon="paperclip"
        basic
        color="grey"
        onClick={() => {
          sentData("videoReply");
        }}
      />
      <Button
        icon="flag outline"
        basic
        color="grey"
        onClick={() => {
          sentData("flag");
        }}
      />
    </Button.Group>
  );
};

export default ContentOptions;
