import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

// import CalendarPopup from './components/CalendarPopup.js'
// import {utentes} from './data/utentes.js'
import Autocomplete from '@mui/material/Autocomplete';

import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'


export default class DemoApp extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }



  render() {
    return (
      <>
      <div className="demo-app">
          <FullCalendar
            locale={'pt'}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            ref= {this.calendarRef}
      
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
      </div>
      
      </>
    )
  }

  // renderSidebar() {
  //   return (
  //     <div className='demo-app-sidebar'>
  //       <div className='demo-app-sidebar-section'>
  //         <h2>Instructions</h2>
  //         <ul>
  //           <li>Select dates and you will be prompted to create a new event</li>
  //           <li>Drag, drop, and resize events</li>
  //           <li>Click an event to delete it</li>
  //         </ul>
  //       </div>
  //       <div className='demo-app-sidebar-section'>
  //         <label>
  //           <input
  //             type='checkbox'
  //             checked={this.state.weekendsVisible}
  //             onChange={this.handleWeekendsToggle}
  //           ></input>
  //           toggle weekends
  //         </label>
  //       </div>
  //       <div className='demo-app-sidebar-section'>
  //         <h2>All Events ({this.state.currentEvents.length})</h2>
  //         <ul>
  //           {this.state.currentEvents.map(renderSidebarEvent)}
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
    //<CalendarPopup />
  }

  handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar
    if (calendarApi.view.type === 'dayGridMonth') {
      calendarApi.changeView('timeGridDay');
      calendarApi.gotoDate(selectInfo.start)
      calendarApi.unselect()
    }
     // clear date selection
    else{
      
      let title = prompt('Escolha um tÃ­tulo para o evento')
      
      calendarApi.unselect()
      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          //random readable color
          //backgroundColor: '#'+((1<<24)*Math.random()|0).toString(16)
          
          extendedProps: {
            nota: prompt('Escolha uma nota para o evento')
          }
        })
      }
    }
  }

  handleEventClick = (clickInfo) => {
    
    if (window.confirm(`Tem a certeza que quer apagar o evento: '${clickInfo.event.title}'`)) {

      clickInfo.event.remove()
    }
    
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', day: 'numeric', month: 'short'})}</b>
      <i>{event.title}</i>
    </li>
  )
}
