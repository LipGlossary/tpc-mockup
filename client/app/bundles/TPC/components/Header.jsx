import React, { PropTypes } from 'react';
import Faker from 'faker';
import c from 'classnames';

export default class Header extends React.Component {
  static propTypes = {
    location: PropTypes.string,
    loggedIn: PropTypes.bool,
    // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param railsContext - Comes from React on Rails
   */
  constructor(props, railsContext) {
    super(props);
    this.state = {
      title: 'The People\'s Colloquium',
      links: [
        { title: 'About', url: '/about' },
        { title: 'Events', url: '/events' },
        { title: 'Blog', url: '/blog' },
      ],
      location: this.props.location,
      loggedIn: this.props.loggedIn,
    };
  }

  renderLinks (links, location) {
    return links.map((link, index) => {
      let classes = c('nav-item', { active: location === link.url });
      return (
        <li className={classes} key={index}>
          <a className='nav-link' href={link.url}>
            {link.title}
          </a>
        </li>
      );
    });
  }

  renderLogin (loggedIn) {
    if (!loggedIn) {
      return (
        <li className='nav-item'>
          <a href='#loginModal' className='nav-link' data-toggle='modal'>
            Log in
          </a>
        </li>
      );
    }

    return (
      <li className='nav-item dropdown'>
        <a className='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          { Faker.name.findName() }
        </a>
        <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
          <a className='dropdown-item' href='/profile'>Profile</a>
          <a className='dropdown-item' rel='nofollow' data-method='post' href='/logout'>Log out</a>
        </div>
      </li>
    );
  }

  render() {
    let { title, links, location, loggedIn} = this.state;

    return (
      <header className='header__wrapper'>
        <nav className='navbar fixed-top navbar-toggleable-sm navbar-inverse bg-inverse'>
          <a className='navbar-brand' href='/home'>
            <img src={Faker.image.abstract()} />
            {title}
          </a>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              { this.renderLinks(links, location) }
              { this.renderLogin(loggedIn) }
            </ul>
          </div>
          <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </header>
    );
  }
}
