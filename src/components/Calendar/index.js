import React from 'react';
import PropTypes from 'prop-types';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './index.css';

function Calendar(events) {
    return(
        <div className="calendar__container">
<FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  aspectRatio="2"
  weekends={false}
  events={events}
/>
</div>
    )
}

Calendar.defaultProps ={
    events: '',
};
Calendar.propTypes ={
    events: PropTypes.array,
}

export default Calendar;