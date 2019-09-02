import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <p><strong>Name:</strong> {props.part1}, <strong>Exercises:</strong> {props.exercises1}</p>
            <p><strong>Name:</strong> {props.part2}, <strong>Exercises:</strong> {props.exercises2}</p>
            <p><strong>Name:</strong> {props.part3}, <strong>Exercises:</strong> {props.exercises3}</p>
        </>
    )
}

const Footer = (props) => {
    return (
        <>
            <p>Total number of exercises are&nbsp; 
                {props.exercises1 + props.exercises2 + props.exercises3}.
            </p>
        </>
    )
}



const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    
    return (
        <div>
            <Header course={course} />
            <Content part1={part1} exercises1={exercises1}
                     part2={part2} exercises2={exercises2}
                     part3={part3} exercises3={exercises3}
            />
            <Footer exercises1={exercises1}
                    exercises2={exercises2}
                    exercises3={exercises3}
            />
        </div>
    )
}


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
