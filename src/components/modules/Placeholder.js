import React from "react";
import { Placeholder as Holder } from "semantic-ui-react";

const Placeholder = (size, width) => {
  return (
    <Holder>
      <Holder.Header image>
        <Holder.Line />
        <Holder.Line />
      </Holder.Header>
      <Holder.Paragraph>
        <Holder.Line />
        <Holder.Line />
        <Holder.Line />
        <Holder.Line />
      </Holder.Paragraph>
    </Holder>
  );
};
export default Placeholder;
