import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import exportFromJSON from "export-from-json";

import Button from '@material-ui/core/Button';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { getLessons } from '../../redux/lesson/lessonThunk';
import { AuthContext } from "../../Context/auth";
import './index.css';

function Calendar(events) {

    const myJson = useSelector((state) => state.lessonReducer.lessons);
    const newJson = [];
    for (let x of myJson.keys()) {
        let d = myJson[x].date;
        let newD = d.split("T");
        let newObject = {
            
                "Дата занятия": newD[0],
                "Время занятия": newD[1],
                "Название": myJson[x].category,
                "Описание":  myJson[x].description
            
        }
      newJson.push(newObject);
    }
    const data = newJson;
    const fileName = "mySchedule";
    const exportType = 'xls';

    function exportToExcel () {
      exportFromJSON({data, fileName, exportType});
    }

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
                    aspectRatio="2"
                    weekends={true}
                    events={events}
                    dragScroll={true}
                />
            </div>
            <Button variant="outlined" size="large" onClick={exportToExcel} color="primary" style={{ "margin": "10px 0px 10px 92%" }}>Экспорт</Button>
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