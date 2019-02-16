import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Item } from 'semantic-ui-react';

import "../styles/components/projects.scss";
import data from "../data/projects.json";
import { Link } from 'react-router-dom';

interface IButtonData {
  icon: string;
  label: string;
  link: string;
  internal: boolean;
}

interface IProjectData {
  name: string;
  subtitle: string;
  description: string;
  imageName: string;
  buttons: IButtonData[];
}

const projectData: IProjectData[] = data;

interface IProjectsProp {

}

class Projects extends React.Component<IProjectsProp> {
  public render() {
    return (
      <div className={"page-card"}>
        <h1 className={"page-title"}>Projects</h1>
        {
          this.renderProjects(projectData)
        }
      </div>
    )
  }
  private renderProjects(projects: IProjectData[]): JSX.Element {
    return (
      <Item.Group>
        {
          projects.map((project, i) =>
            <Item fluid key={"project-" + i}>
              <Item.Image fluid
                src={require("../assets/projects/" + project.imageName)}
                size='medium'
              />
              <Item.Content>
                <Card basic fluid className={"projects-card"}>
                  <Card.Content>
                    <Card.Header>{project.name}</Card.Header>
                    <Card.Meta>{project.subtitle}</Card.Meta>
                    <Card.Description>{project.description}</Card.Description>
                    {
                      project.buttons.map((button, j) =>
                        (button.internal) ?
                          <Button key={"project-" + i + "-button-" + j}
                            color='blue'
                            content={button.label}
                            icon={button.icon}
                            labelPosition='right'
                            className='projects-button'
                            as={Link}
                            to={button.link}
                          /> :
                          <Button key={"project-" + i + "-button-" + j}
                            color='blue'
                            content={button.label}
                            icon={button.icon}
                            labelPosition='right'
                            className='projects-button'
                            as={"a"}
                            href={button.link}
                            target={"_blank"}
                          />
                      )
                    }
                  </Card.Content>
                </Card>
              </Item.Content>
            </Item>
          )
        }
      </Item.Group>
    );

  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Projects);