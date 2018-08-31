import React from "react";
import style from './style.css';
import styleMod from './style.module.css';
import moment from "moment";

export default ({ data }) => {
  const post = data.markdownRemark;
  const date = new moment(post.fields.date).format('MM/DD/YYYY')
  return (
    <div className={styleMod.wrapper} >
      <div className='post'>
        <div className='post-heading'>
          <h1 className='title'><a href='/blog'>Posts</a> / {post.frontmatter.title}</h1>
          <div style={{fontStyle: 'italic', marginBottom: '1em'}}>Posted {date}</div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${post.frontmatter.hero})`,
          width: '100%',
          height: post.frontmatter.hero ? '280px' : 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid #bebebe',
      }} />
      <div className='blog-post-body' >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($url: String!) {
    markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
      }
      fields {
        date
      }
    }
  }
`;
