import * as React from 'react';
import '../styles/app.scss';
import '../styles/components/home.scss';

class Home extends React.Component {
  public render() {
    return (
      <div className="home-container">
        <div className="home-text">
          <h1>come make cool <br /> stuff with us.</h1>
          <br />
          <p>we explore the intersection of CS and the arts. <br /> if you're passionate about what you do, talk to us.</p>
        </div>
      </div>
    )
  }
}

export default Home;