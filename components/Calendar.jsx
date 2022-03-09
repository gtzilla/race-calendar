import React from 'react';
import moment from 'moment';
import _ from 'underscore';
import Link from 'next/link';

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
    this.state = {
      calendarActiveDate:null
    }
  }

  onClickBack(evt) {
    evt.preventDefault();
    console.log("onClickBack", evt);
    let baseDate = !this.state.calendarActiveDate ? this.props.startDate : this.state.calendarActiveDate
    const _date = moment(baseDate, ['YYYY-MM-DD']);
    const updated = _date.subtract(1, 'month');
    this.setState({
      calendarActiveDate:updated.format('YYYY-MM-DD')
    });      
  }

  onClickNext(evt) {
    evt.preventDefault();
    console.log("onClickNext", evt, this.state.calendarActiveDate);
    let baseDate = !this.state.calendarActiveDate ? this.props.startDate : this.state.calendarActiveDate
    const _date = moment(baseDate, ['YYYY-MM-DD']);
    const updated = _date.add(1, 'month');
    this.setState({
      calendarActiveDate:updated.format('YYYY-MM-DD')
    });    
  }

  render() {
    const eventsAndUrls = this.props.events;
    const datesHashMap = _.object(_.pluck(eventsAndUrls, 'eventDate'), eventsAndUrls);
    // console.log("datesHashMap",datesHashMap)    
    console.log(
      "this.props.startDate", 
      this.props.startDate,
      "this.props.today", 
      this.props.today,
      "events",
      this.props.events);

    const today = moment();
    const displayActive = moment(this.state.calendarActiveDate || this.props.startDate, ['YYYY-MM-DD']) 
    const monthStart = moment(displayActive).startOf('month').startOf('day')
    const weekStart = moment(monthStart).startOf('month').startOf('week');
    const monthEnd = moment(displayActive).endOf('month').endOf('day');
    const endMonthWeek = moment(monthEnd).endOf('month').endOf('week');
    const active = moment(weekStart);
    const diff = monthEnd.diff(monthStart, 'days')
    const days = [];
    while(active.isBefore(endMonthWeek)) {
      days.push(moment(active))
      active.add(1, 'day');
    }
    const titleHeader = today.isSame(monthStart, 'year') 
      ? monthStart.format('MMMM')
      : monthStart.format('MMMM, YYYY');
    return (
      <>
      <div className="calendar-headline-box">
        <h3>{titleHeader}</h3>
        <ul className='calendar-back-next-controls-box'>
          <li onClick={this.onClickBack.bind(this)}>Back</li>
          <li onClick={this.onClickNext.bind(this)}>Next</li>
        </ul>
      </div>
      <div className='calendar-container-box'>
        <ul className='calendar-container-header'>
          {dayNames.map(name=>{
            return <li key={name}>{name.substring(0,3)}</li>
          })}
        </ul>
        <ul className='calendar-container-body'>
        {days.map(day=>{
          const dayClass = day.isSame(monthStart, 'month') ? 'current-month' : ''
          const formatted =day.format('YYYY-MM-DD')
          const hasEvent = _.has(datesHashMap, formatted)
          if(!hasEvent) {
            return (
              <li key={formatted}>
                <span className={dayClass}>{day.format('DD')}</span>
              </li>
              )            
          } else {
            return (
              <li key={formatted} 
                  className='active-event-on-date'>
                <Link href={datesHashMap[formatted].path}>
                  <span className={dayClass}>{day.format('DD')}</span>
                </Link>
              </li>
              )            
          }

        })}
        </ul>
      </div>
      </>
      )
  }
}