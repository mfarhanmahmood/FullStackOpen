import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

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

const App = (props) => {
    const [selected, setSelected] = useState(0)

    // Create a votes array equal to the lenght of anecdotes array initialized to 0
    const [votes, setVote] = useState(() => {
        const arr = Array(anecdotes.length).fill(0)
        return arr    
    })

    const changeQuote = () => {
        const newQuoteID = Math.trunc((Math.random() * 10) % (anecdotes.length - 1))
        setSelected(newQuoteID)
    }

    const addVote = () => {
        const arr = {...votes}
        arr[selected]++
        setVote(arr)
    }

    return (
        <div>
            <p>{props.anecdotes[selected]}</p>
            <DisplayVote count={votes[selected]} />
            <div>
                <Button onClick={addVote} text="Vote" />
                <Button onClick={changeQuote} text="Next Quote" />
            </div>

        </div>
    )
}

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)