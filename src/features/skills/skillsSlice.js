import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  const response = await axios.get('/api/skills');
  return response.data;
});

export const addSkill = createAsyncThunk('skills/addSkill', async (skills) => {
  const response = await axios.post('/api/skills', skills);
  return response.data;
});

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.skills;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default skillsSlice.reducer;
