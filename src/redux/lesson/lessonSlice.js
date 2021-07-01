import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lessons: [],
    category: [],
};

const lessonsSlice = createSlice({
    name: "lessonSlice",
    initialState,
    reducers: {
        createLessonAction(state, action) {
            console.log(action);
            state.lessons.push(action.payload)
            if (!Object.values(state.category).includes(action.payload.category)){
                state.category.push(action.payload.category)
            }
        },
        setLessonsAction(state, action) {
            console.log(action);
            state.lessons = action.payload
            for (var i = 0; i < action.payload.length; i++){
                if (!Object.values(state.category).includes(action.payload[i].category)){
            state.category.push(action.payload[i].category)
            }
        }
    },
        deleteCategoryAction(state, action) {
            state.category.splice(state.category.indexOf(action.payload), 1);
            state.lessons = state.lessons.filter((lesson) => 
                lesson.category !== action.payload
            )
            console.log(state.lessons)
    }
}
});

export default lessonsSlice;