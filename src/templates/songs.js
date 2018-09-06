import React from "react";
import style from './style.css';
import moment from "moment";
import {showsWithSong} from '../utils/data';
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';

export default ({ data }) => {
  const song = data.song;
  const date = new moment(song.fields.composedAt).format('MM/DD/YYYY')
  const _showsWithSong = showsWithSong(data.shows, song.fields.basename);
  const performedLive = showsWithSong.length > 0 ? `Performed Live: ${_showsWithSong.length} ${_showsWithSong.length === 1 ? 'time' : 'times'}` : ''
  return (
    <Content>
      <Breadcrumbs>
        <Breadcrumb href="/songs">Songs</Breadcrumb>
        <Breadcrumb>{song.frontmatter.title}</Breadcrumb>
      </Breadcrumbs>
      {performedLive}
      <div style={{marginTop: '2em'}} dangerouslySetInnerHTML={{__html: song.html}} />
      <h3>Comments</h3>
    </Content>
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
