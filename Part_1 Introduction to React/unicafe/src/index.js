import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
    return <button onClick={onClick}>{text}</button>
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
                <div>
                    Good: {good}<br />
                    Neutral: {neutral}<br />
                    Bad: {bad}<br />
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
