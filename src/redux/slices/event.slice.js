import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import singleCourseApi from "../../apis/api/SingleCourse";
import myOrdersApi from "../../apis/api/MyOders";

const initialState = {
    events: [],
    isBaughtEvent: false
};
export const getEvents = createAsyncThunk(
    "getEvents", async ({id, setEventData, setCourse, setLoading, setError, isLogin}, {rejectWithValue}) => {
        try {
            let isBaught = false;
            let data  = await singleEventApi(id, setEventData)
            if(isLogin){
                let baughtData = await myOrdersApi(setCourse, setLoading, setError);
                if(baughtData) {
                    baughtData.forEach((item) => {
                        if (item.data.course_id === data._id) {
                            isBaught = true
                        }
                    });
                }
            } 
            return {data, isBaught}
        } catch (e) {
            return rejectWithValue(e?.message)
        }
    });
export const courseSlice = createSlice({
    name: "event",
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
            state.events=action?.payload?.data || []
            state.isLoading = false
            state.isBaughtEvent = action?.payload?.isBaught
        }
    }

});

export default courseSlice.reducer;
