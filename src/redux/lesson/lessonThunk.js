import lessonService from "../../services/lessonService";
import lessonActions from "./lessonActions";

export function createLesson(data, id) {
    return async (dispatch) => {
        lessonService.createFetchLessonById(data, id)
        .then(
            (lesson) => {
                dispatch(lessonActions.createLessonAction(lesson))
            }
        )
        .catch(
            (error) => {
                throw error;
            }
        )
    }
}

export function getLessons(id) {
    return async (dispatch) => {
        lessonService.getFetchLessonById(id)
        .then(
            (lessons) => {
                dispatch(lessonActions.setLessonsAction(lessons))
            }
        )
        .catch(
            (error) => {
                throw error
            }
        )
    }
}

