import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const DisplayVote = ({count}) => {
    return (
        <p>has {count} votes</p>
    )
}

const indexOfMax = (array) => {
    if(array.length === 0)
    {
        return -1
    }

    let max = array[0]
    let maxIndex = 0

    for (let i = 0; i < array.length; i++) 
    {
        
        if(array[i] > max)
        {
            maxIndex = i
            max = array[i]
        }
    }

    return maxIndex
}

const TopPost = ({anecdotes, votes, topAnecdoteIndex}) =>{
    return (
        <div>
            <h2>Anecdote with the most vote</h2>
            <p>{anecdotes[topAnecdoteIndex]}</p>
            <DisplayVote count={votes[topAnecdoteIndex]} />
        </div>
    )
}

const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0)

    // Create a votes array equal to the lenght of anecdotes array initialized to 0
    const [votes, setVote] = useState(() => {
        const arr = Array(anecdotes.length).fill(0)
        return arr    
    })

    const [topAnecdoteIndex, settopAnecdoteIndex] = useState(0)

    const changeQuote = () => {
        const newQuoteID = Math.trunc((Math.random() * 10) % (anecdotes.length - 1))
        setSelected(newQuoteID)
    }

    const addVote = () => {
        const arr = [...votes]
        arr[selected]++
        setVote(arr)

        settopAnecdoteIndex(indexOfMax(votes))
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <DisplayVote count={votes[selected]} />
            <div>
                <Button onClick={addVote} text="Vote" />
                <Button onClick={changeQuote} text="Next Quote" />
            </div>
            <TopPost anecdotes={anecdotes} votes={votes} topAnecdoteIndex={topAnecdoteIndex} />
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)