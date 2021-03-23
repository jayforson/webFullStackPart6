/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addAnecdote = async (anecdote) => {
    const response = await axios.post(
        baseUrl, 
        {
            content: anecdote,
            votes: 0
        })
    return response.data
}

const voteAnecdote = async (id, newAnecdote) => {
    const response = await axios.put(`${baseUrl}/${id}`, newAnecdote)
    return response.data
}

export default { getAll, addAnecdote, voteAnecdote}