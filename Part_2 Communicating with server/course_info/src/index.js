import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h1>{props.courseName}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <p><strong>Name:</strong> {props.name}, <strong>Exercises:</strong> {props.exercises}</p>
    )
}

const Content = (props) => {
    return (
        <>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        </>
    )
}


const Course = ({course}) => {
    return (
        <div>
            <Header courseName = {course.name} />
            <Content parts={course.parts} />
        </div>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

