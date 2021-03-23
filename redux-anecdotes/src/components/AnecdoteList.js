import React from 'react'
import { connect } from 'react-redux'
import { voteForAnecdotes } from '../reducers/anecdoteReducer'
import { sendNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes
    const soter = (a, b) => {
        if (a.votes < b.votes) return 1
        if (a.votes > b.votes) return -1
        return 0
    }

    const vote = (anecdote) => {
        props.voteForAnecdotes(anecdote)
        props.sendNotification(`you voted ${anecdote.content}`, 5)
    }

    return (
        <div>
            {anecdotes.sort(soter).map(anecdote =>
            <div key={anecdote.id}>
                <div>
                {anecdote.content}
                </div>
                <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>)}
        </div>    
    )
}

const mapStateToProps = (state) => {
    if (state.filter !== '') {
        return {anecdotes: state.anecdotes.filter(anecdote => 
            anecdote.content.toUpperCase().includes(state.filter.toUpperCase())
        )}
    }
    return {anecdotes: state.anecdotes}
}

const mapDispatchToProps = {
    voteForAnecdotes,
    sendNotification,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(AnecdoteList)