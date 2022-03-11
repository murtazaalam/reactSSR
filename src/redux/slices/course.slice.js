import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import singleCourseApi from "../../apis/api/SingleCourse";

const initialState = {
    course: [],
    isLoading: false
};
export const getCourse = createAsyncThunk(
    "getCourse", async ({id, setCourseData}, {rejectWithValue}) => {
        try {
            let data  = await singleCourseApi(id, setCourseData)
            console.log("show data", data)
            return {data}
        } catch (e) {
            
            return rejectWithValue(e?.message)
        }
    });
export const courseSlice = createSlice({
    name: "course",
    initialState,
    extraReducers: {
        [getCourse.pending]:(state)=>{
            state.isLoading = true
        },
        [getCourse.rejected]:(state)=>{
            state.isLoading = false
            // state
        },
        [getCourse.fulfilled]:(state,action)=>{
            // console.log()
            state.course=action?.payload?.data || []
            state.isLoading = false
        }
    }

});

export default courseSlice.reducer;
