import React from 'react';
import VanillaTilt from 'vanilla-tilt';

export class TiltCard extends React.Component {
  componentDidMount() {
    VanillaTilt.init(this.el);
  }

  componentWillUnmount() {
    this.el.vanillaTilt.destroy();
  }

  render() {
    return <div ref={el => (this.el = el)} {...this.props} />;
  }
}
