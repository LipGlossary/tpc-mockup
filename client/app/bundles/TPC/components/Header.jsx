import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  static propTypes = {
    // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      title: "The People's Colloquium"
    };
  }

  render() {
    return (
      <header className="header__wrapper">
        <nav className="navbar fixed-top navbar-toggleable navbar-inverse bg-inverse">
          <a className="navbar-brand" href="#">
            <img />
            {this.state.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Foo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bar</a>
              </li>
            </ul>
          </div>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </header>
    );
  }
}
