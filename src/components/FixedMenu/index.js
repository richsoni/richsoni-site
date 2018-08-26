import React from 'react';
import styles from './index.module.css';
import Logo from '../Logo/';
import MenuToggle from '../MenuToggle/';
import SocialButton from '../SocialButton/';

class SocialButtons extends React.Component {
  render(){
    return <nav className={this.props.className || ''} style={this.props.style || {}}>
      <SocialButton service='spotify' href='https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O' />
      <SocialButton service='soundcloud' href='https://soundcloud.com/richsoni' />
      <SocialButton service='play' href='https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q' />
      <SocialButton service='twitter' href='https://twitter.com/richsoni'/>
      <SocialButton service='facebook' href='https://www.facebook.com/richsonimusic/'/>
      <SocialButton service='github' href='https://github.com/richsoni'/>
      <SocialButton
        href='http://richsoni.com/subscribe'
        service='envelope'
      >
      &nbsp;Sign Up
      </SocialButton>
    </nav>
  }
}

export default class FixedMenu extends React.Component {
  render() {
    const { showNavMenu } = this.props
    return (
      <header className={styles.header}>
        <Logo style={{position: 'fixed'}} />
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
            <a style={{color: 'black', background: 'none', textDecoration: 'none', marginLeft: '1em'}}href='/blog'>Blog</a>
            <a style={{color: 'black', background: 'none', textDecoration: 'none', marginLeft: '1em'}}href='/albums'>Albums</a>
            <a style={{color: 'black', background: 'none', textDecoration: 'none', marginLeft: '1em'}}href='/songs'>Songs</a>
            <a style={{color: 'black', background: 'none', textDecoration: 'none', marginLeft: '1em'}} href='/shows'>Live</a>
          </nav>
          <SocialButtons
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
          />
        </div>
      </header>
    )
  }
}
