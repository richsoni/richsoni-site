import React from "react";
import style from './style.css';
import styleMod from './style.module.css';
import moment from "moment";
import {showsWithSong} from '../utils/data';

export default ({ data }) => {
  const song = data.song;
  const date = new moment(song.fields.composedAt).format('MM/DD/YYYY')
  const _showsWithSong = showsWithSong(data.shows, song.fields.basename);
  const performedLive = showsWithSong.length > 0 ? `Performed Live: ${_showsWithSong.length} ${_showsWithSong.length === 1 ? 'time' : 'times'}` : ''
  return (
    <div className={styleMod.wrapper} >
      <h1>
        <a href="/songs">Songs</a> / {song.frontmatter.title}
      </h1>
      {performedLive}
      <div dangerouslySetInnerHTML={{__html: song.content}} />
      <h3>Comments</h3>
    </div>
  )
};

export const query = graphql`
  query SongQuery($url: String!) {
    song: markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
      }
      fields {
        date
        basename
      }
    }

    shows: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "shows"}  }}
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
`;
