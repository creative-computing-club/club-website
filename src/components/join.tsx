import * as React from 'react';
import { connect } from 'react-redux';

import '../styles/components/join.scss';

interface IJoinProps {

}


class Join extends React.Component<IJoinProps> {
  public render() {
    return (
      <div className={"page-card"}>
        <div className={"join-text-container"}>
          <h1 className={"page-title"}>Join Us</h1>
          <h2 className={"join-subtitle"}>
            Come work with us if you care deeply about what you do.<br />
            No technical interviews. Show us your passion and willingness to learn.
          </h2>
          <br />
          <p className={"page-text join"}>
            Join our listserv <b>creative-computing</b> to get information about upcoming G-Body meetings, info sessions, and more!<br />
            See instructions on <a href="https://it.cornell.edu/lyris/join-e-lists-lyris" target="_blank">
              how to join a Cornell listserv here
          </a>.
        </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Join);