import React from "react";
import Link from 'gatsby-link';
import moment from 'moment';
import {showNameLong, type} from '../utils/presenters';
import Presenter from '../components/ShowIndex/';
import momentify from '../utils/momentify';

const upcomingShows = (shows = []) => {
  const now = moment.utc()
  return shows
    .filter((show) => momentify(show.date) > now)
    .sort((a, b) => {
      return momentify(a.date) - momentify(b.date)
    })
}

const pastShows = (shows = []) => {
  const now = moment.utc()
  return shows
    .filter((show) => momentify(show.date) < now)
    .sort((a, b) => {
      return momentify(b.date) - momentify(a.date)
    })
}

const parseShows = (props) => {
  const locations = props.data.locations.edges.map((e) => e.node);
  const shows =  props.data.shows.edges.map((e) => {
    const show = e.node;
    const location = locations.find((l) => l.fields.basename === show.fields.notdate)
    return {
      ...show,
      location,
      locationString: `${location.address.locality}, ${location.address.region}`,
      typeString: type(show.frontmatter.type),
      date: show.fields.date,
      dateString: momentify(show.fields.date).format("MM/DD/YY"),
      moment: momentify(show.fields.date),
      venueString: location.name,
    }
  });
  console.log(shows)
  return shows;
}

export default class ShowIndex extends React.Component {
  render(){
    const loadedShows = parseShows(this.props);
    return <Presenter
      locations={this.props.locations}
      upcomingShows={upcomingShows(loadedShows)}
      pastShows={pastShows(loadedShows)}
    />
  }
}

export const query = graphql`
  query ShowIndex {
    shows: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "shows"}  }}
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            type
            hero
            composed_at(formatString: "YYYY-MM-DD")
            artists
          }
          fields {
            url
            date
            notdate
          }
          excerpt
        }
      }
    }

    locations: allLocationsYaml {
    edges {
      node {
        fields {
          basename
        }
        name
        address {
          country
          locality
          region
        }
      }
    }
  }
}
`
