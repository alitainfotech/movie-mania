import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        LoginLoading: false,
        LoginSuccess: '',
        LoginError: '',

        LogOutLoading: false,
        LogOutSuccess: '',
        LogOutError: '',
    }
    , reducers: {
        LoginRequest: (state) => {
            state.LoginLoading = true;
            state.LoginSuccess = ''
            state.LoginError = ''
        },
        LoginSuccess: (state, action) => {
            state.LoginLoading = false;
            state.LoginSuccess = action.payload;
        },
        LoginError: (state, action) => {
            state.LoginLoading = false;
            state.LoginError = action.payload;
        },

        LogOutRequest: (state) => {
            state.LogOutLoading = true;
            state.LogOutSuccess = ''
            state.LogOutError = ''
        },
        LogOutSuccess: (state, action) => {
            state.LogOutLoading = false;
            state.LogOutSuccess = action.payload;
        },
        LogOutError: (state, action) => {
            state.LogOutLoading = false;
            state.LogOutError = action.payload;
        },

        resetAllMessages: (state) => {
            state.LogOutError = '';
            state.LogOutSuccess = '';
            state.LoginError = '';
            state.LoginSuccess = '';
        }
    }
})

export const { LoginRequest, LoginSuccess, LoginError,
    LogOutRequest, LogOutSuccess, LogOutError,
    resetAllMessages
} = authSlice.actions
export default authSlice.reducer