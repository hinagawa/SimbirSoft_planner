import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lessons: [],
    title: [],
};

const lessonsSlice = createSlice({
    name: "lessonSlice",
    initialState,
    reducers: {
        createLessonAction(state, action) {
            console.log(action);
            state.lessons.push(action.payload)
            if (!Object.values(state.title).includes(action.payload.title)){
                state.title.push(action.payload.title)
            }
        },
        setLessonsAction(state, action) {
            console.log(action);
            state.lessons = action.payload
            for (var i = 0; i < action.payload.length; i++){
                if (!Object.values(state.title).includes(action.payload[i].title)){
            state.title.push(action.payload[i].title)
            }
        }
    },
        deletetitleAction(state, action) {
            state.title.splice(state.title.indexOf(action.payload), 1);
            state.lessons = state.lessons.filter((lesson) => 
                lesson.title !== action.payload
            )
            console.log(state.lessons)
    }
}
});

export default lessonsSlice;