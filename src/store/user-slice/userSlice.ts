import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/api";


export const registerUser = createAsyncThunk("registerUser", async (userData: any, { rejectWithValue }) => {
    try {
        console.log(userData);
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axiosInstance.post("/cauth/signup", userData, config);
        console.log(data);
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})


//----------------------------------- Reducer ------------------------//

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: true,
    },
    reducers: {},

    extraReducers: () => {

    }

});

export default userSlice.reducer;