import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import MarcarConsultaPopup from './MarcarConsultaPopup'
import popup from './CalendarPopup.js'
// import {utentes} from './data/utentes.js'
import Autocomplete from '@mui/material/Autocomplete';

import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

import CalendarPopup from '../components/CalendarPopup';
var calendarApi = null
export default class DemoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {popupopen: false,
                  popupstate: { title: "",
                                paciente: "",
                              }
                  } ;
  }

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
            //!breaks everything eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
      </div>
      { this.state.popupopen && <MarcarConsultaPopup close={this.handlePopupClose.bind(this)} submit={this.handlePopupSubmit.bind(this)} />} 
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

  handlePopupClose = () => {
    this.setState({popupopen: false});
  }
  
  handlePopupSubmit = (title, paciente) => {
    const result = { title: title, paciente: paciente };
    this.setState(
      {popupstate: result}
    );
    console.log(result);
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
    //<CalendarPopup />
  }

  handleDateSelect = (selectInfo) => {
    calendarApi = selectInfo.view.calendar
    if (calendarApi.view.type === 'dayGridMonth') {
      calendarApi.changeView('timeGridDay');
      calendarApi.gotoDate(selectInfo.start)
      calendarApi.unselect()
    }
     // clear date selection
    else{
      this.setState({popupopen: true}, () => {
        // while(this.state.popupopen){
        //   console.log("waiting"); //! wait for popup to close
        // }
        let title= this.state.popupstate.paciente; //!mudar para titulo
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
            //random readable color
            //backgroundColor: '#'+((1<<24)*Math.random()|0).toString(16)
            
            // extendedProps: {
            //   nota: prompt('Escolha uma nota para o evento')
            // }
          })
        }
      }
         );
      //let title = prompt('Escolha um tÃ­tulo para o evento')
      
      //calendarApi.unselect()
    
     
      
      
     

      calendarApi.unselect()
    }
  }

  handleEventClick = (clickInfo) => {
    
    if (window.confirm(`Tem a certeza que quer apagar o evento: '${clickInfo.event.title}'`)) {

      clickInfo.event.remove()
    }
    
  }

  // handleEvents = (events) => { //! breaks everything
  //   this.setState({
  //     currentEvents: events
  //   })
  // }

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
