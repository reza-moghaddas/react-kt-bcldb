import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error:''
}

const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    const x =  fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res)
    //.then(data => data)
    console.log(x);
})

const UserSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.loading, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;                
        })
    }
})

export default UserSlice.reducer;
export { fetchUsers };