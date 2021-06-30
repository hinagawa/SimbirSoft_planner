import React from 'react';
import PropTypes from 'prop-types';
import ReactToPdf from 'react-to-pdf';

import Button from '@material-ui/core/Button';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './index.css';

function Calendar(events) {
    const ref = React.createRef();
    return (
        <div className="calendar__container">
            <div  ref={ref}>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    aspectRatio="3"
                    weekends={false}
                    events={events}
                />
            </div>
            <ReactToPdf targetRef={ref} filename="calendar.pdf">
                {({ toPdf }) => (
                    <Button variant="outlined" onClick={toPdf} size="large" color="primary" style={{ "margin": "10px 0px 10px 92%" }}>Экспорт</Button>
                )}
            </ReactToPdf>

        </div >
    )
}

Calendar.defaultProps = {
    events: '',
};
Calendar.propTypes = {
    events: PropTypes.array,
}

export default Calendar;