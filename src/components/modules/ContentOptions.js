import React from "react";

import { Button } from "semantic-ui-react";

const ContentOptions = () => {
  return (
    <Button.Group size="small" id="NoDrag">
      <Button
        icon="info"
        basic
        color="grey"
        onClick={() => {
          console.log("info");
        }}
      />
      <Button
        icon="comments"
        basic
        color="grey"
        onClick={() => {
          console.log("comments");
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
        icon="paperclip"
        basic
        color="grey"
        onClick={() => {
          console.log("video reply");
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
  );
};

export default ContentOptions;
