import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import config from "../../config/config";
import Cookies from 'js-cookie'

export const fetchUser = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  try {
    const response = await axios.get('api/me')
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue({error: error.message})
  }
})

export const login = createAsyncThunk(
    'signin',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post(config.apiGateway.URL + 'signin', credentials)
        Cookies.set('token', response.data.token)
        console.warn('ddddd', Cookies.get('token'))
        return {accessToken: response.data.token, me: response.data.user}
      } catch (error) {
        return thunkAPI.rejectWithValue({error})
      }
    }
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.delete('api/logout')
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue({error: error.message})
  }
})

const internalInitialState = {
  accessToken: '',
  loading: 'idle',
  me: null,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: internalInitialState,
  reducers: {
    updateAccessToken(state, action) {
      state.accessToken = action.payload.token
    },
    reset: () => internalInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken
      state.me = action.payload.me
      state.loading = 'idle'
    })
    builder.addCase(login.rejected, (state, action) => {
      Object.assign(state, {...internalInitialState, error: action.error.message})
      console.error(action.payload)
      // throw new Error(action.payload)
    })
    builder.addCase(logout.pending, (state) => {
      state.loading = 'loading'
    })
    builder.addCase(logout.fulfilled, (_state) => internalInitialState)
    builder.addCase(login.pending, (state) => {
      state.loading = 'loading'
    })
  builder.addCase(fetchUser.rejected, (state, action) => {
      state = {...internalInitialState, error: action.payload.error}
    console.error(action.payload.error)

    // throw new Error(action.error.message)
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.me = action.payload
    })
  },
})


export const {updateAccessToken, reset} = authSlice.actions
export default authSlice.reducer
