import React from 'react';
import Table from '../Table/';
import {sortASC, sortDESC} from '../Table/dateSort';

export default (props) => {
  return <div>
    <h2>Upcoming Shows</h2>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
         sortASC,
         sortDESC,
       }, {
         title: 'Start',
         key: 'startTime',
       }, {
         title: 'Venue',
         key: 'venueString',
       }, {
         title: 'Type',
         key: 'typeString',
       }, {
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.upcomingShows}
       sortDefaultKey='dateString'
    />
    <h2>Past Shows</h2>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
         sortASC,
         sortDESC,
       }, {
         title: 'Venue',
         key: 'venueString',
       }, {
       }, {
         title: 'Type',
         key: 'typeString',
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.pastShows}
       sortDefaultKey='dateString'
       sortDefaultDirection='DESC'
    />
  </div>
}
