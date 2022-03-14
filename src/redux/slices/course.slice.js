import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import singleCourseApi from "../../apis/api/SingleCourse";
import myOrdersApi from "../../apis/api/MyOders";

const initialState = {
    course: [],
    isLoading: false,
    isBaughtCourse: false,
    discountTime: 0,
    futureDate: null
};
export const getCourse = createAsyncThunk(
    "getCourse", async ({id, setCourseData, setCourse, setLoading, setError, isLogin}, {rejectWithValue}) => {
        try {
            let isBaught = false;
            const now = new Date();
            let futureDate;
            let diffHour;
            let data  = await singleCourseApi(id, setCourseData)
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
            if (data.discount_limit_date) {
                futureDate = new Date(data.discount_limit_date);
                diffHour = Math.floor((futureDate - now) / 3600000);
                if(diffHour > 0) {
                  diffHour = diffHour;
                } else{
                  diffHour = 0
                }
              } else {
                diffHour = 0;
              }
            console.log("slice hr=",diffHour)
            return {data, isBaught, diffHour, futureDate:data.discount_limit_date}
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
            state.isBaughtCourse = action?.payload?.isBaught
            state.discountTime = action?.payload?.diffHour
            state.futureDate = action?.payload?.futureDate
        }
    }

});

export default courseSlice.reducer;
