import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { getLessons } from '../../redux/lesson/lessonThunk';
import { AuthContext } from "../../Context/auth";
import './index.css';

function Calendar(events) {
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);
    const uid = currentUser ? currentUser.uid : null;

    useEffect(() => {
        dispatch(getLessons(uid))
    }, []);

    const ref = React.createRef();
    return (
        <div className="calendar__container">
            <div ref={ref}>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    aspectRatio="3"
                    weekends={false}
                    events={events}
                />
            </div>
            <Button variant="outlined" size="large" color="primary" style={{ "margin": "10px 0px 10px 92%" }}>Экспорт</Button>

        </div >
    )
}

Calendar.defaultProps = {
    events: '',
};

Calendar.propTypes = {
    events: PropTypes.array,
};

export default Calendar;