import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

function getCurrentValue(path) {
  switch (path) {
    case '/':
      return 0;
    case '/about':
      return 1;
    default:
      return 0;
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ value: getCurrentValue(this.props.location.pathname) });
  }

  handleChange(e, value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <AppBar title="PUBG Win Tracker">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About" component={Link} to="/about" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;