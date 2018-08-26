import React from 'react';
import styles from './index.module.css';
import Logo from '../Logo/';
import MenuToggle from '../MenuToggle/';
import SocialButton from '../SocialButton/';
import navItems from '../ResponsiveMenu/nav-items';
import socialButtons from '../ResponsiveMenu/social-items';

const SocialButtons = socialButtons.map((sb) =>
  <SocialButton service={sb.service} href={sb.href}>{sb.value || ''}</SocialButton>
);

const NavItems = navItems.map((ni) =>
  <a style={{color: 'black', background: 'none', textDecoration: 'none', marginLeft: '1em'}} href={ni.slug}>{ni.title}</a>,
);

export default class FixedMenu extends React.Component {
  render() {
    const { showNavMenu } = this.props
    return (
      <header className={styles.header}>
        <div style={{ }}>
          <nav
            style={{
              position: 'fixed',
              backgroundColor: 'white',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'flex-end',
              top: 0,
              height: '2.8em',
              right: showNavMenu ? 80 : -10000,
              alignItems: 'center',
              transitionProperty: 'right',
              transitionDuration: '.5s',
              width: 435,
              overflow: 'hidden'
            }}
            className={styles.hoverDim}
          >
            { NavItems }
          </nav>
          <nav
            style={{
              position: 'fixed',
              zIndex: 3,
              justifyContent: 'center',
              top: 0,
              height: '4em',
              right: !showNavMenu ? 30 : -10000,
              whitespace: 'nowrap',
              alignItems: 'center',
              width:  435,
              transitionProperty: 'right',
              transitionDuration: '.5s',
              overflow: 'hidden',
              fontSize: '.8em',
              display: 'flex',
            }}
            className={styles.hoverDim}
          >
            { SocialButtons }
          </nav>
        </div>
      </header>
    )
  }
}
