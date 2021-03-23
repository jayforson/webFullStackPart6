import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ANECDOTE':
      return(state.concat(action.data))
    case 'VOTE_ANECDOTE':
      const returnedAnecdote = action.data
      return(state.map(a => a.id !== returnedAnecdote.id? a : returnedAnecdote))
    case 'INIT_ANECDOTE':
      return(action.data)
    default:
      return state
  }
}

export const createAnecdotes = (anecdote) => {
  return async dispatch => {
    const createdAnecdote = await anecdoteService.addAnecdote(anecdote)
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: createdAnecdote,
    })
  }
}
export const voteForAnecdotes = (anecdote) => {
  return async dispatch => {
    const newAnecdotes = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const returnedAnecdote = await anecdoteService.voteAnecdote(anecdote.id, newAnecdotes)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: returnedAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer