import React from "react";
import Link from 'gatsby-link';
import styles from './style.module.css';

const ControlBar = (props) => (
  <div className={styles.controlBar}>{props.children}</div>
);

const Control = (props) => {
  const {
    active, onClick
  } = props;
  let attrs = {
    stackClass: `fa-stack ${styles.inactiveStack} pulse inactive`,
    onClick: onClick,
    iconBG: '#fff',
    iconFG: '#7b7b7b',
  }
  if(active) {
    attrs = {
      stackClass: 'fa-stack',
      onClick: (() => {}),
      iconFG: '#fff',
      iconBG: '#7b7b7b',
    }
  }
  return <span className={attrs.stackClass} onClick={attrs.onClick}>
    <i
      style={{color: attrs.iconBG}}
      className="fa fa-circle fa-stack-2x"></i>
    <i style={{color: attrs.iconFG}} className={`fa ${props.className} fa-stack-1x fa-inverse`}></i>
  </span>
};

const ViewTypes = {
  preview: 'preview',
  grid: 'grid',
  list: 'list',
};

export default class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      activeControlName: ViewTypes.preview
    }
  }

  render(){
    const {data} = this.props;
    const {activeControlName} = this.state
    return (
      <article className={styles.container}>
        <section className={styles.postList}>
          <h4>Latest</h4>
          <ControlBar>
             <Control className='fa-align-justify' active={ViewTypes.preview === activeControlName} onClick={() => this.onControlClick(ViewTypes.preview)} />
             <Control className='fa-th' active={ViewTypes.grid === activeControlName} onClick={() => this.onControlClick(ViewTypes.grid)} />
             <Control className='fa-list-ul' active={ViewTypes.list === activeControlName} onClick={() => this.onControlClick(ViewTypes.list)} />
          </ControlBar>
          {data.allMarkdownRemark.edges.map(({ node }) => (
             <Link
                to={node.fields.slug}
                css={{ textDecoration: `none`, color: `inherit` }}
              >
                <div key={node.id}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span color="#BBB">— {node.frontmatter.date}</span>
                  </h3>
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            ))}
          </section>
        </article>
    );
  }

  onControlClick(controlName) {
    this.setState({
      activeControlName: controlName
    })
  }
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            date
          }
          excerpt
        }
      }
    }
  }
`
