import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTimeline = createAsyncThunk('timeline/fetchTimeline', async () => {
  const response = await axios.get('/api/educations');
  return response.data;
});

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: {
    timeline: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeline.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTimeline.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.timeline = action.payload.timeline;
      })
      .addCase(fetchTimeline.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default timelineSlice.reducer;
