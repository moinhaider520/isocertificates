import React from "react";
import { Calendar, momentLocalizer,Views } from 'react-big-calendar';
import moment from 'moment';
// import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import '../../../assets/vendor/fullcalendar/fullcalendar.min.css';
import FullCalendar from "@fullcalendar/react";
// import {events} from "../../Data/AppData";

let allViews = Object.keys(Views).map(k =>{
    if(k !== "WORK_WEEK"){
    return  Views[k]
  }
  return null
    }
   )
const localizer =momentLocalizer(moment)
class CalendarCard extends React.Component {
  render() {
    return (
        <div className="col-lg-8">
                    <div className="card">
                        <div className="body">
                        <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                            }}
                            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin ]}
                            events={events}

                     />
                        </div>
                    </div>
        </div>
    );
  }
}
export default CalendarCard

const events= [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2019, 3, 0),
    end: new Date(2019, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2019, 3, 7),
    end: new Date(2019, 3, 10),
  },
  
  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },
  
  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },
  
  {
    id: 4,
    title: 'Some Event',
    start: new Date(2019, 3, 9, 0, 0, 0),
    end: new Date(2019, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2019, 3, 11),
    end: new Date(2019, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2019, 3, 12, 10, 30, 0, 0),
    end: new Date(2019, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2019, 3, 12, 12, 0, 0, 0),
    end: new Date(2019, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2019, 3, 12, 14, 0, 0, 0),
    end: new Date(2019, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2019, 3, 12, 17, 0, 0, 0),
    end: new Date(2019, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2019, 3, 12, 20, 0, 0, 0),
    end: new Date(2019, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2019, 3, 13, 7, 0, 0),
    end: new Date(2019, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2019, 3, 17, 19, 30, 0),
    end: new Date(2019, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2019, 3, 17, 19, 30, 0),
    end: new Date(2019, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2019, 3, 20, 19, 30, 0),
    end: new Date(2019, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2019, 3, 14, 15, 30, 0),
    end: new Date(2019, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2019, 3, 14, 16, 30, 0),
    end: new Date(2019, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2019, 3, 14, 16, 30, 0),
    end: new Date(2019, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2019, 3, 14, 17, 30, 0),
    end: new Date(2019, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2019, 3, 14, 17, 0, 0),
    end: new Date(2019, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2019, 3, 14, 17, 0, 0),
    end: new Date(2019, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2019, 3, 14, 17, 30, 0),
    end: new Date(2019, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2019, 3, 14, 18, 30, 0),
    end: new Date(2019, 3, 14, 20, 0, 0),
  },
  ]