import { createSlice } from '@reduxjs/toolkit';
import { NO_PASSWORD, } from '../Consts/consts';
import { RootState } from './redux-store';

const initialState = {
   password :'',
   securityLevel:NO_PASSWORD
};

const userSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updatePassword: (state, action) => {
      const {password,securityLevel} = action.payload;
      state.password = password;
      state.securityLevel = securityLevel;
    }
  },
});

export const { updatePassword } = userSlice.actions;
export const selectPassword = (state:RootState) => state.formSettings.password;
export const selectsecurityLevel = (state:RootState) => state.formSettings.securityLevel;

export default userSlice.reducer;
