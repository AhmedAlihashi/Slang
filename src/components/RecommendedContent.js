import React from "react";
import { Grid, Segment, Header, Pagination } from "semantic-ui-react";
import { SlangCard } from "./modules";

const RecommendedContent = () => {
  return (
    <Segment piled textAlign="left">
      <Grid>
        <Grid.Column width={16}>
          <Header as="h1" floated="left">
            Content
          </Header>
          <Header as="h2" floated="right">
            <Pagination
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={3}
            />
          </Header>
        </Grid.Column>

        <Grid.Column width={16}>
          <Segment.Group horizontal>
            <SlangCard />
            <SlangCard />
            <SlangCard />
          </Segment.Group>
          <Segment.Group horizontal>
            <SlangCard />
            <SlangCard />
            <SlangCard />
          </Segment.Group>
          <Segment.Group horizontal>
            <SlangCard />
            <SlangCard />
            <SlangCard />
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
export default RecommendedContent;
