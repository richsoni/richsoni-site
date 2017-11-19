import React from 'react';
import {Provide} from '../../shared/reduxProvider';
import {fetchAll as fetchAllReleases} from '../../data/releases/actions';
import {sorted as sortedReleases} from '../../data/releases/selectors';
import Half from "../../shared/half";
import styles from './latestRelease.module.css';

const getSpotifyURI = function(release){
  return release.links['spotify'].match(/[^\/]*$/)[0]
}

class Container extends React.Component {
  render() {
    const {
      release
    } = this.props
    console.log(this.props.release)
    if(!release) { return <div /> }
    return <Half
      style={{backgroundImage: `url(${release.artwork})`}}
      classNames={{
        section: styles.halfSection,
      }}
    >
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h1 className={styles.header}>{release.title} Available Now!!!</h1>
          <br/>
          <h2 className={styles.rounded}>
            <a className={styles.whiteLink} href={release.links['bandcamp']}>
              <i className='fa fa-headphones' />
              Purchase On Bandcamp!
            </a>
          </h2>
          <br />
          <div className={styles.bottomLinks}>
            <a className={styles.rounded} href={release.links['itunes']}><i className='fa fa-apple' /> iTunes</a>
            <a className={styles.rounded} href={release.links['amazon']}><i className='fa fa-amazon' /> Amazon</a>
          </div>
        </div>
        <div className={styles.rightSection}>
          <iframe src={`https://embed.spotify.com/?uri=spotify%3Aalbum%3A${getSpotifyURI(release)}`} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
        </div>
      </div>
    </Half>
  }

  componentDidMount() {
    if(this.props.componentDidMount){
      this.props.componentDidMount(this.props)
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: (props) => {
      dispatch(fetchAllReleases())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    release: sortedReleases(state)[0],
  }
}

export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
