import * as React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Image, Menu, Icon, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { updateCurrentPage } from "../redux/actions";

import "../styles/components/navigation.scss";

interface INavigationProps {
  activeItem: string;
  updateCurrentPage(target: string): any;
}

interface INavigationState {

}

class Header extends React.Component<INavigationProps, INavigationState> {

  public constructor(props) {
    super(props);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  public render() {
    return (
      <div>
        <Responsive vertical as={Menu} minWidth={768}>
          <Menu.Item>
            <Image src={require("../assets/logo.svg")} spaced="right" size="tiny" />
            <br /><br />
            <h3>Creative Computing Club at Cornell</h3>
            <h4>cs and the arts</h4>

            <div className="social-icons">
              <a href="https://www.facebook.com/creativecomputing.at.cornell/" target='_blank'><Icon name='facebook' /></a>
              <a href="https://github.coecis.cornell.edu/Creative-Computing-Club" target='_blank'><Icon name='github' /></a>
              {/* <a href="https://github.coecis.cornell.edu/Creative-Computing-Club" target='_blank'><Icon name='medium' /></a> */}
            </div>

            <br />
            <p>ccc@cornell~$ ls</p>

          </Menu.Item>

          <Menu.Item
            name="home"
            active={this.props.activeItem === "home"}
            onClick={this.handleHeaderClick}
            as={Link}
            to="/"
          >
            <span>Home</span>
          </Menu.Item>
          <Menu.Item
            name="projects"
            active={this.props.activeItem === "projects"}
            onClick={this.handleHeaderClick}
            as={Link}
            to="/projects/"
          >
            <span>Projects</span>
          </Menu.Item>
          <Menu.Item
            name="teams"
            active={this.props.activeItem === "teams"}
            onClick={this.handleHeaderClick}
            as={Link}
            to="/teams/"
          >
            <span>Teams</span>
          </Menu.Item>
          <Menu.Item
            name="sponsor"
            active={this.props.activeItem === "sponsor"}
            onClick={this.handleHeaderClick}
            as={Link}
            to="/sponsor/"
          >
            <span>Sponsors</span>
          </Menu.Item>
          <Menu.Item
            name="events"
            active={this.props.activeItem === "events"}
            onClick={this.handleHeaderClick}
            as={Link}
            to="/events/"
          >
            <span>Events</span>
          </Menu.Item>
          <Menu.Item
            name="contact"
            active={this.props.activeItem === "contact"}
            onClick={this.handleHeaderClick}
            as={Link}
            to="/join/"
          >
            <span>Join Us</span>
          </Menu.Item>
        </Responsive>
        <Responsive inverted as={Menu} maxWidth={767}>
          <Menu.Item>
            <Image src={require("../assets/logo.svg")} spaced="right" size="mini" />
            Creative Computing At Cornell
          </Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item icon='chevron down'>
              <Dropdown.Menu>
                <Dropdown.Item to="/" as={Link}>Home</Dropdown.Item>
                <Dropdown.Item to="/projects/" as={Link}>Projects</Dropdown.Item>
                <Dropdown.Item to="/teams/" as={Link}>Teams</Dropdown.Item>
                <Dropdown.Item to="/sponsor/" as={Link}>Sponsors</Dropdown.Item>
                <Dropdown.Item to="/events/" as={Link}>Events</Dropdown.Item>
                <Dropdown.Item to="/join/" as={Link}>Join Us</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Responsive>
      </div>

    )
  }

  private handleHeaderClick(e, { name }) {
    this.props.updateCurrentPage(name);
  }

}

function mapStateToProps(state) {
  const { currentPage } = state;
  return { activeItem: currentPage };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentPage: (target) => dispatch(updateCurrentPage(target)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);