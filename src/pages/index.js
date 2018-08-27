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

const Grid = (props) => {
 const {post} = props
 return (<Link
    to={post.fields.slug}
    style={{
      background: 'none',
      marginTop: '1em',
      textShadow: 'none',
      paddingBottom: '1em',
      width: 250,
      height: '21em',
      display: 'block',
    }}
  >
    <div
      key={post.id}
      style={{
        display: 'block',
        color: '#000',
        textDecoration: 'none',
        backgroundImage: `url(${post.frontmatter.hero})`,
        height: 280,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#bebebe',
      }} >
    </div>
    <h1 style={{
      marginTop: '.4em',
      marginBottom: '.4em',
      fontSize: '1em',
    }}>{post.frontmatter.title}</h1>
  </Link>);
}

const List = (props) => {
 const {post} = props
 return (<Link
    to={post.fields.slug}
    style={{ alignItems: 'center', borderTop: '1px solid black', textDecoration: 'none', backgroundImage: 'none', display: 'flex', width: '100%', textDecoration: `none`, color: `inherit` }}
  >
    <div style={{minWidth: '250px', width: '250px'}}>{post.frontmatter.date}</div>
    <div>{post.frontmatter.title}</div>
  </Link>);
}

const Preview = (props) => {
  const {post} = props
 return (<div>
    <Link
      to={post.fields.slug}
      style={{ textDecoration: `none`}}
    ><span style={{fontSize: '1.5em'}}>{post.frontmatter.title}</span></Link>
    <div><i>Posted {post.frontmatter.date}</i></div>
    <p>{post.excerpt} <Link to={post.fields.slug}>Read More</Link></p>
   </div>
  );
}

export default class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      activeControlName: ViewTypes.list
    }
  }

  render(){
    const {data} = this.props;
    const {activeControlName} = this.state
    return (
      <article className={styles.container}>
        <section className={styles.postList}>
          <ControlBar>
             <h4>Latest</h4>
             <div>
               <Control className='fa-align-justify' active={ViewTypes.preview === activeControlName} onClick={() => this.onControlClick(ViewTypes.preview)} />
               <Control className='fa-th' active={ViewTypes.grid === activeControlName} onClick={() => this.onControlClick(ViewTypes.grid)} />
               <Control className='fa-list-ul' active={ViewTypes.list === activeControlName} onClick={() => this.onControlClick(ViewTypes.list)} />
             </div>
          </ControlBar>
          <div style={{marginTop: '1em', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between'}}>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              switch(activeControlName) {
                case ViewTypes.preview: return <Preview post={node} />
                case ViewTypes.grid: return <Grid post={node} />
                case ViewTypes.list: return <List post={node} />
              }
            })}
          </div>
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
            hero
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
