import React from "react";
import { Header as S_header, Button, Icon } from "semantic-ui-react";

const Header = ({ sideBar }) => {
  const openSidebar = () => {
    return sideBar(true);
  };
  return (
    <div className="AppHeader">
      <S_header as="h1">Slang.</S_header>
      <S_header as="h2" floated="right" id="NoDrag">
        <Button.Group>
          <Button icon>
            <Icon className="bell outline icon" />
          </Button>
          <Button content="Logout" />
          <Button
            icon
            color="red"
            onClick={() => {
              window.close();
            }}
          >
            <Icon className="power off icon" />
          </Button>
        </Button.Group>
      </S_header>
    </div>
  );
};

export default Header;
