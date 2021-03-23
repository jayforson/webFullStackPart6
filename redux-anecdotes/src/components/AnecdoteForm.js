import React from 'react'
import { connect } from 'react-redux'
import { createAnecdotes } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value =''
        props.createAnecdotes(anecdote)
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { createAnecdotes }
)(AnecdoteForm)