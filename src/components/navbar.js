import React, { Component } from 'react';
import NavItem from './nav_item';

const pages = ['Overview', 'Projects', 'Members', 'Blog', 'Gallery', 'Leaderboard'];
const links = ['/', '/projects', '/members', '/', '/'];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }


  createNavItems(navPages) {
    const navItems = pages.map((page, index) => {
      return <NavItem key={index} title={page} index={index} link={links[index]} selected={this.state.selectedIndex} changeSelected={(newIndex) => this.setState({ selectedIndex: index })} />;
    });
    return navItems;
  }

  render() {
    const navItems = this.createNavItems(pages);

    return (
      <div>
        <div id="logo">
          <h3> DALI </h3>
          <p style={{ paddingLeft: '10px' }}> Digital Arts Leadership and Innovation Lab at Dartmouth </p>
        </div>
        <ul>
          {navItems}
        </ul>
      </div>
    );
  }
}

export default NavBar;
