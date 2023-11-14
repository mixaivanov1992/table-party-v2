import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    isAuthorized: boolean,
    name: string,
    email: string
}

export const initialState: InitialState = {
    isAuthorized: false,
    name: '',
    email: '',
};

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<InitialState>){
            const {isAuthorized, name, email} = action.payload;
            state.isAuthorized = isAuthorized;
            state.name = name;
            state.email = email;
        }
    },
});

export default userSlice.reducer;