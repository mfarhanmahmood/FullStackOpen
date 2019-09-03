import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
    return <button onClick={onClick}>{text}</button>
}

const Statistics = ({good, neutral, bad}) => {
    let totalFeedbacks = good + neutral + bad
    let average = (totalFeedbacks > 0) ? (good + (bad * -1)) / totalFeedbacks : 0
    let positivePercent = (good > 0) ? (good / totalFeedbacks) * 100 : 0

    if(totalFeedbacks === 0)
    {
        return <p>No feedback given.</p>
    }
    return (
        <div>
            Good: {good}<br />
            Neutral: {neutral}<br />
            Bad: {bad}<br />
            Total Feedbacks: {totalFeedbacks}<br />
            Average: {average}<br />
            Positive: {positivePercent}%
        </div>
    )
}


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>
            <div>
                <Button onClick={() => setGood(good + 1)} text="Good" />
                <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
                <Button onClick={() => setBad(bad + 1)} text="Bad" />
            </div>
            <div>
                <h2>Statistics</h2>
                <Statistics good={good} neutral={neutral} bad={bad} />
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));