import React from 'react';
import styles from './index.module.css';
import Logo from '../Logo/';
import MenuToggle from '../MenuToggle/';
import SocialButton from '../SocialButton/';
import navItems from '../ResponsiveMenu/nav-items';
import socialButtons from '../ResponsiveMenu/social-items';

const SocialButtons = socialButtons.map((sb) =>
  <SocialButton key={sb.href} service={sb.service} href={sb.href}>{sb.value || ''}</SocialButton>
);

const NavItems = navItems.map((ni) =>
  <a key={ni.url} style={{color: 'black', background: 'none', textDecoration: 'none', marginLeft: '1em'}} href={ni.url}>{ni.title}</a>,
);

export default class FixedMenu extends React.Component {
  render() {
    const { showNavMenu } = this.props
    return (
      <header className={styles.header}>
        <div style={{ }}>
          <nav
            style={{
              right: showNavMenu ? 80 : -10000,
            }}
            className={styles.navItemsContainer}
          >
            { NavItems }
          </nav>
          <nav
            style={{
              right: !showNavMenu ? 64 : -10000,
            }}
            className={styles.socialButtonsContainer}
          >
            { SocialButtons }
          </nav>
        </div>
      </header>
    )
  }
}
