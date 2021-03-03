import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: { counter: 0 },
    reducers: {
        increment: state => {
            console.log('app.increment is running')
            state.counter += 1
        },
        decrement: state => {
            console.log('app.decrement is running')
            state.counter -= 1
        }
    },
    extraReducers: builder => {
        builder.addCase('incrementBy', (state, action) => {
            console.log('extraReducers.increment is running')
            state.counter += action.payload
        })
    }
})

export const { increment, decrement } = appSlice.actions
export default appSlice.reducer