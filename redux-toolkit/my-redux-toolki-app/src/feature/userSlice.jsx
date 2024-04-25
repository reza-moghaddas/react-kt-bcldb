import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => data);
})


const initialState = {
    loading: 0,
    users: [],
    error:''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;            
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;
export { fetchUsers };