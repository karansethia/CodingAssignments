import { configureStore, createSlice } from "@reduxjs/toolkit"; 

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    age: null,
    appliedFor: null,
    experience: null,
    lastCtc: null,
    expectedCtc: null,
    location: "",
    resume: null,
  },
  reducers: {
    submitFirst(state,action){
      const { name, age, appliedFor } = action.payload;
      if(!name || !age || !appliedFor){
        return;
      }
      state.name = name;
      state.age = age;
      state.appliedFor = appliedFor;
    },
    submitSecond(state, action){
      const { experience, lastCtc, expectedCtc } = action.payload;
      if( !experience || !lastCtc || !expectedCtc){
        return;
      }
      state.experience = experience;
      state.lastCtc = lastCtc;
      state.expectedCtc = expectedCtc;
    },
    submitThird(state, action){
      const { location, resume } = action.payload;
      if(!location || !resume ){
        return;
      }
      state.location = location;
      state.resume = resume;
    }
  }
});

const store = configureStore({
  reducer: userSlice.reducer
});

export default store

export const userAction = userSlice.actions;