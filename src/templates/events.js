import React from "react";
import style from './style.css';
import styleMod from './style.module.css';
import moment from "moment";
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import {MMDDYYYY, cityCommaState} from '../utils/presenters';

export default ({ data }) => {
  const event = data.markdownRemark;
  return (
    <Content>
      <div className='post'>
        <div className='post-heading'>
          <Breadcrumbs>
            <Breadcrumb href='/events'>Events</Breadcrumb>
            <Breadcrumb>{event.frontmatter.title}</Breadcrumb>
          </Breadcrumbs>
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
    </Content>
  );
};

export const query = graphql`
  query EventQuery($url: String!) {
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
