import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import MarcarConsultaPopup from './MarcarConsultaPopup'
import popup from './CalendarPopup.js'
// import {utentes} from './data/utentes.js'
import Autocomplete from '@mui/material/Autocomplete';
import DarConsultaPopup from './DarConsultapopup'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

import CalendarPopup from '../components/CalendarPopup';
var calendarApi = null
var select = null
var click = null
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
    currentEvents: [],
    daropen: false, //!importante


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
      { this.state.daropen &&   <DarConsultaPopup    close={this.handlePopupClose.bind(this)} descricao= { click.event.title } paciente={ click.event.extendedProps.paciente} delete={this.handleapagar.bind(this)}/>}
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
  handleapagar = () => {
    click.event.remove()
  }
  handlePopupClose = () => {
    this.setState({popupopen: false});
    this.setState({daropen: false});
  }
  
  handlePopupSubmit = (title, paciente) => {
    const result = { title: title, paciente: paciente };
    this.setState(
      {popupstate: result}
    );
    console.log(result);
          // while(this.state.popupopen){
        //   console.log("waiting"); //! wait for popup to close
        // }
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: select.startStr,
            end: select.endStr,
            allDay: select.allDay,
            //random readable color
            //backgroundColor: '#'+((1<<24)*Math.random()|0).toString(16)
            
            extendedProps: {
              paciente: paciente
            //   nota: prompt('Escolha uma nota para o evento')
            }
          })
        }

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
      this.setState({popupstate: { title: "", paciente: ""}});
      this.setState({popupopen: true});
      select=selectInfo
      //let title = prompt('Escolha um tÃ­tulo para o evento')
      
      //calendarApi.unselect()
    
     
      
      
     

      calendarApi.unselect()
    }
  }

  handleEventClick = (clickInfo) => {
    click = clickInfo
    this.setState({daropen: true});
    
    
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

