import React, { Component } from "react";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      recipes: 0,
    };
  }
  render() {
    return (
      <div className="header">
        <header className="header-wrapper">
          <h1>Simple Recipe Tracker</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        </header>
      </div>
    );
  }
}

export default Header;
