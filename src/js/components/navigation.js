import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {

  activeStyles() {
    return {color: '#eee', background: '#c8340f', borderRadius: '10px'};
  }

  render() {
    return (
      <header className="app-header">
        <div className="app-header-wrap">
          <a className="app-header-logo">
            <img className="app-header-logo__image" src="img/logo-dark.svg" alt="Logo" />
          </a>
          <nav className="app-nav-container">
            <ul className="app-nav">
              <li className="app-nav__item"><Link className="app-nav__link" to={this.props.url.pageName === undefined ? '/' : '/create'} activeStyle={this.activeStyles()}>Create</Link></li>
              <li className="app-nav__item"><Link className="app-nav__link" to='/explore' activeStyle={this.activeStyles()}>Explore</Link></li>
              <li className="app-nav__item"><Link className="app-nav__link" to='/presets' activeStyle={this.activeStyles()}>Presets</Link></li>
              <li className="app-nav__item"><Link className="app-nav__link" to='/export' activeStyle={this.activeStyles()}>Export</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
