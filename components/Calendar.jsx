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

function collectByDate(arr) {
  const output = {}
  arr.forEach(item=>{
    const date = item.eventDate;
    if(!_.has(output, date)) {
      output[date] = [];
    }
    output[date].push(item);
  });
  return output;  
}

function CalendarHeader(props) {
  return (<ul className='calendar-container-header'>
          {dayNames.map(name=>{
            return <li key={name}>{name.substring(0,3)}</li>
          })}
        </ul>)
}

/*
  When only one event of the day,
  show "full bleed"
*/
function FullBleedActive({item, dayClass, day}) {
  const formatted =day.format('YYYY-MM-DD')
  return (<Link 
    className="calendar-full-date-click-link"
    href={item.path} passHref>              
    <li key={formatted}
      style={{
        backgroundImage:'url('+item.thumbnailUrl+')',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      }}               
      className='active-event-on-date'>
        <span className={dayClass}>{day.format('DD')}</span>
    </li>
  </Link>)
}

function SharedBleedActive({day, dayClass, datesHashMap, hashKey}) {
  return (
    <li key={hashKey} 
        className='active-event-on-date'>
      <span className={dayClass}>{day.format('DD')}</span>
      {datesHashMap[hashKey].map(item=>{
        const imgWidth = Math.floor(100 / datesHashMap[hashKey].length) + "%";
        return <Link 
          key={item.path}
          href={item.path} passHref>
          <div
            className="event-with-flyer"
            style={{
              width:imgWidth,
              float:'left',
              cursor:'pointer',
              backgroundImage:'url('+item.thumbnailUrl+')',
              backgroundSize:'cover',
              backgroundRepeat:'no-repeat'
            }}                  
          ></div>
        </Link>                  
      })}

    </li>
    )  
}


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
    const datesHashMap = collectByDate(this.props.events);
    const displayActive = moment(this.state.calendarActiveDate || this.props.startDate, ['YYYY-MM-DD']) 
    const monthStart = moment(displayActive).startOf('month').startOf('day')
    const monthEnd = moment(displayActive).endOf('month').endOf('day');
    const endMonthWeek = moment(monthEnd).endOf('month').endOf('week');
    const weekStart = moment(monthStart).startOf('month').startOf('week');
    const active = moment(weekStart);
    const days = [];
    while(active.isBefore(endMonthWeek)) {
      days.push(moment(active))
      active.add(1, 'day');
    }
    const titleHeader = moment().isSame(monthStart, 'year') 
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
        <CalendarHeader />
        <ul className='calendar-container-body'>
        {days.map(day=>{
          const dayClass = day.isSame(monthStart, 'month') ? 'current-month date-display-number' : 'date-display-number'
          const formatted =day.format('YYYY-MM-DD')
          const hasEvent = _.has(datesHashMap, formatted)
          if(!hasEvent) {
            return (
              <li key={formatted}>
                <span className={dayClass}>{day.format('DD')}</span>
              </li>
              )            
          } else if(datesHashMap[formatted].length === 1) {
            const item = _.first(datesHashMap[formatted])
            return <FullBleedActive 
                      day={day} 
                      item={item} 
                      dayClass={dayClass} />          
          } else {
            // more than one for this date!
            return <SharedBleedActive 
                      day={day} 
                      dayClass={dayClass}
                      hashKey={formatted}
                      datesHashMap={datesHashMap} />           
          }
        })}
        </ul>
      </div>
      </>
      )
  }
}