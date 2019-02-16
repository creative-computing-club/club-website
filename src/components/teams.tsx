import * as React from 'react';
import { connect } from 'react-redux';
import "semantic-ui-react";
import '../styles/components/teams.scss';
import data from '../data/teams.json'; // declared module json in d.ts
import { Button, Card, Grid, Icon, Image, Label, Segment } from 'semantic-ui-react';

interface ITeamMember {
  firstName: string;
  lastName: string;
  image: string;
  role: string;
  teams: string[];
  linkedin: string;
  github: string;
  website: string;
}

const teamMembers: ITeamMember[] = data; // enforcing right format in json using Interfaces

interface ITeamsProps { }

interface ITeamsNavigation { }

interface IComponentState {
  teamSelected: string;
  width: number;
}

class Teams extends React.Component<ITeamsProps, ITeamsNavigation, IComponentState> {

  public state: IComponentState;

  public constructor(props) {
    super(props);
    this.state = {
      teamSelected: 'ALL',
      width: window.innerWidth
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  public componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  public displayTeam() {
    const team = this.state.teamSelected; // get current team selected
    const numberOfItems = (this.state.width > 768) ? (this.state.width > 1024 ? 4 : 3) : 1;
    return (
      <Card.Group itemsPerRow={numberOfItems}>
        {teamMembers.map((member, i) =>
          (member.teams.indexOf(team) !== -1 || team === "ALL") ?
            <Card key={"team-member-" + i}>
              <Image src={require("../assets/members/" + this.getMemberImage(member.image))} />
              <Card.Content>
                <Card.Header>{member.firstName + " " + member.lastName}</Card.Header>
                <Card.Description>{member.role}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                {(member.linkedin !== "") ? <a href={member.linkedin} target={"_blank"}><Icon name='linkedin' /></a> : null}
                {(member.github !== "") ? <a href={member.github} target={"_blank"}><Icon name='github' /></a> : null}
                {(member.website !== "") ? <a href={member.website} target={"_blank"}><Icon name='globe' /></a> : null}
              </Card.Content>
            </Card> : null
        )}
      </Card.Group>
    );
  }

  public render() {
    return (
      <div className="page-container">
        <Grid stackable container>
          <Grid.Row>
            <div className="title-container">
              <h1 className="page-title"> We are Creative Computing.</h1>
              <p className="subpage-title1"> We represent students across different disciplines, countries, and colleges bound together by a common passion for technology and creativity. </p>
              <h2 className="subpage-title2"> Join us if you’re passionate about what you do.</h2>
            </div>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={(this.state.width > 768) ? (this.state.width > 1024 ? 2 : 12) : 12}>
              <Segment color='blue' className="teams-buttons-container">
                <Label attached={"top"}>Teams</Label>
                <Button.Group basic vertical fluid>
                  <Button value="ALL" onClick={this.handleChange} active={this.state.teamSelected === 'ALL'}>Everyone</Button>
                  <Button value="EBOARD" onClick={this.handleChange} active={this.state.teamSelected === 'EBOARD'}>E-Board</Button>
                  <Button value="ARCADEZONE" onClick={this.handleChange} active={this.state.teamSelected === 'ARCADEZONE'}>ArcadeZone</Button>
                  <Button value="MUSICVIZ" onClick={this.handleChange} active={this.state.teamSelected === 'MUSICVIZ'}>MusicViz</Button>
                  <Button value="WEBDEV" onClick={this.handleChange} active={this.state.teamSelected === 'WEBDEV'}>WebDev</Button>
                </Button.Group>
              </Segment>

            </Grid.Column>
            <Grid.Column width={(this.state.width > 768) ? (this.state.width > 1024 ? 10 : 12) : 12}>
              <div className="members-container">
                {this.displayTeam()}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
    )
  }

  private getMemberImage(inputStr) {
    return (inputStr === "") ? "avatar.png" : inputStr;
  }

  private handleChange(event) {
    const { value } = event.target;
    this.setState({
      teamSelected: value // change team selected according to user click
    });
  }

  private updateDimensions() {
    this.setState({
      ...this.state,
      width: window.innerWidth
    });
  }

}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
