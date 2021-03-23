const initialState = {
    message: '',
    timerId: null,
}

const notificationReducer = (state = initialState, action) => {
switch (action.type) {
    case 'VOTE_NOTIFICATION':
        if (state.timerId) {
            clearTimeout(state.timerId)
        }
        return({ message: action.message, timerId: action.timerId })
    case 'CLEAR_NOTIFICATION':
        if (state.timerId) {
            clearTimeout(state.timerId)
        }
        return({ message: '', timerId: null })
    default:
        return state
    }
}

export default notificationReducer

export const sendNotification = (message, time) => {
    return async dispatch => {
        const timerID = setTimeout(() => {
            dispatch(clearNotification())
        },time * 1000)
        dispatch({ 
            type: 'VOTE_NOTIFICATION',
            message: message,
            timerId: timerID
        })
    }
}

export const clearNotification = () => {
    return { type: 'CLEAR_NOTIFICATION' }
}