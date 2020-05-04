import React from "react";
import {
  Grid,
  Icon,
  Image,
  Segment,
  Header,
  Pagination,
} from "semantic-ui-react";
import { SlangCard } from "./modules";

const RecommendedContent = () => {
  return (
    <Segment piled textAlign="left">
      <Header as="h1">What we think you'll like</Header>
      <Grid>
        <Grid.Column width={16}>
          <Segment.Group horizontal>
            <SlangCard />
            <SlangCard />
            <SlangCard />
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={16}>
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={3}
          />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
export default RecommendedContent;
