import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Image } from 'semantic-ui-react';

import "../styles/components/sponsor.scss";

interface ISponsorProps {

}

class Sponsor extends React.Component<ISponsorProps> {

  public constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Container fluid className="page-card">
        <h1 className={"page-title"}>Sponsors</h1>
        <h3 className={"page-subtitle"}>Why Sponsor Us?</h3>
        <p className={"page-text"}>
          We have a unique mission of connecting Cornell students with
          interesting projects. You can help make an impact on the Cornell
          community by helping us reach more students, build, and sustain
          cool projects.
        </p>
        <h3 className={"page-subtitle"}>Interested?</h3>
        <p className={"page-text"}>
          We'd be happy to send you our latest prospectus and answer any
          questions you may have.
        </p>
        <p className={"page-text"}>
          Reach out with an email to NETID at cornell.edu!
        </p>
        <h3 className={"page-subtitle"}>
          Our Current Sponsors
        </h3>
        <p className={"page-text"}>
          Thank you to our sponsors for their generous support!
        </p>
        <Image.Group size={"small"}>
          <Image src={require("../assets/sponsors/facebook.png")}
            as={"a"} href={"https://facebook.com"} target={"_blank"} />
        </Image.Group>
      </Container >
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Sponsor);