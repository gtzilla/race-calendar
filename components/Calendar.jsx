import React from 'react';
import moment from 'moment';
import _ from 'underscore'

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'];


export default class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const today = moment();
    const monthStart = moment(today).startOf('month').startOf('day')
    const weekStart = moment(monthStart).startOf('month').startOf('week');
    const monthEnd = moment(today).endOf('month').endOf('day');
    const endMonthWeek = moment(monthEnd).endOf('month').endOf('week');
    const active = moment(weekStart);
    
    const diff = monthEnd.diff(monthStart, 'days')
    // const days = _.range(diff+1)
    const days = []
    while(active.isBefore(endMonthWeek)) {
      console.log('ripping')
      days.push(moment(active))
      active.add(1, 'day');
      
    }
    return (
      <div className='calendar-container-box'>
        <ul className='calendar-container-header'>
          {dayNames.map(name=>{
            return <li>{name}</li>
          })}
        </ul>
        <ul className='calendar-container-body'>
        {days.map(day=>{
          return (
            <li>
              <span>{day.format('DD')}</span>
            </li>
            )
        })}
        </ul>
      </div>
      )
  }
}