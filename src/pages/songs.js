import React from "react";
import Link from 'gatsby-link';
import styles from './style.module.css';
import Table from '../components/Table/';
import Tabs from '../components/Tabs/';
import {sortObjMomentASC, sortObjMomentDESC} from '../utils/sorting';
import momentify from '../utils/momentify';

const tableFields = [
  {
    title: 'Song',
    key: 'title',
  },
  {
    title: 'Artists',
    key: 'artists',
  },
  {
    title: 'Date Composed',
    key: 'composedAt',
    sortASC: sortObjMomentASC('composedAtMoment'),
    sortDESC: sortObjMomentDESC('composedAtMoment'),
  },
  {
    title: "Times Played",
    key: "performanceCount",
  },
  {
    title: 'First Performed',
    key: 'firstPerformance',
    sortASC: sortObjMomentASC('firstPerformanceMoment'),
    sortDESC: sortObjMomentDESC('firstPerformanceMoment'),
  },
  {
    title: 'Last Performed',
    key: 'lastPerformance',
    sortASC: sortObjMomentASC('lastPerformanceMoment'),
    sortDESC: sortObjMomentDESC('lastPerformanceMoment'),
  },
];

const parseSongs = (props) => {
  const songs = props.data.songs.edges.map((s) => s.node)
  const showsBySong = props.data.shows.edges.map((s) => s.node).filter((s) => s.frontmatter.setlist).reduce((memo, item) => {
    (item.frontmatter.setlist || []).map((song) => {
      if(!memo[song]) { memo[song] = [] }
      memo[song].push(item.fields.date)
    })
    return memo;
  }, {})
  return songs.map((song) => {
    const artists = song.frontmatter.artists.sort().join(', ')
    const composedAtMoment = momentify(song.frontmatter.composed_at);
    const shows = showsBySong[song.fields.basename] || [];
    const firstPerformance = shows[shows.length - 1];
    const firstPerformanceMoment = momentify(firstPerformance)
    const lastPerformance = shows[0];
    const lastPerformanceMoment = momentify(lastPerformance)
    return {
      title: song.frontmatter.title,
      composedAt: composedAtMoment ? composedAtMoment.format('YYYY-MM-DD') : null,
      artists: artists,
      isMine: !!artists.match('Rich Soni'),
      composedAtMoment: composedAtMoment,
      url: song.fields.url,
      performanceCount: shows.length,
      firstPerformanceMoment,
      firstPerformance,
      lastPerformanceMoment,
      lastPerformance,
      key: song.id,
    }
  });
}
export default class SongIndex extends React.Component {

  render(){
    return (
      <article className={styles.container}>
        <h1>Songs</h1>
        <Tabs tabs={this.tabs()} />
      </article>
    );
  }

  tabs() {
    const songs = parseSongs(this.props);
    return [{
      content: () => <Table
        fields={tableFields}
        items={songs}
      />,
      title: "All",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s) => s.isMine)}
      />,
      title: "Originals",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s) => !s.isMine)}
      />,
      title: "Covers",
    },
    ];
  }
};

export const query = graphql`
  query SongIndex {
    songs: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "songs"}  }}
      limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              hero
              composed_at(formatString: "YYYY-MM-DD")
              artists
            }
            fields {
              url
              basename
              date
            }
            excerpt
          }
        }
      }

    shows: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "shows"}  }}
      limit: 1000
    ) {
      edges {
        node {
          id
          fields {
            date(formatString: "YYYY-MM-DD")
          }
          frontmatter {
            setlist
          }
        }
      }
    }
  }
`
