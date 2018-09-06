import React from "react";
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import styles from './albumStyles.module.css';

const AlbumDisplay = (props) => {
  return <div>
    {props.children}
  </div>
}

const Album = (props) => {
  return (
    <a
      className={styles.item}
      href={props.data.fields.url}
      style={{backgroundImage: `url(/images/releases/${props.data.fields.basename}.png`}}
    >
      <div className={styles.disc}>
        💿
      </div>
      <div className={styles.overlay}>
        <div className={styles.title}>{props.data.frontmatter.title}</div>
        <div className={styles.year}>{props.data.frontmatter.releaseYear}</div>
      </div>
    </a>
  );
}

export default class AlbumIndex extends React.Component {
  render(){
    return <Content>
      <Breadcrumbs>
        <Breadcrumb>Albums</Breadcrumb>
      </Breadcrumbs>
      <AlbumDisplay>
        {this.props.data.albums.edges.map((a) => a.node).map((a) => {
          return <Album key={a.id} data={a} />
        })}
      </AlbumDisplay>
    </Content>
  }
}

export const query = graphql`
  query AlbumIndex {
    albums: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___released_on] }
      filter: { fields: { relativeDirectory: {eq: "albums"}  }}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            releaseYear: released_on(formatString: "YYYY")
          }
          fields {
            url
            basename
          }
        }
      }
    }

}
`
