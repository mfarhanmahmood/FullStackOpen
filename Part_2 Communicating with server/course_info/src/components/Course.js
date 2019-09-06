import React from 'react'

const Header = (props) => {
    return (
        <>
            <h2>{props.courseName}</h2>
        </>
    )
}

const Part = (props) => {
    return (
        <p><strong>Name:</strong> {props.name}, <strong>Exercises:</strong> {props.exercises}</p>
    )
}

const Content = ({ parts }) => {

    const total = parts.reduce((sum, curr) => sum + curr.exercises, 0)

    return (
        <>
            {parts.map(
                (part) => (
                    <Part key={part.id} name={part.name} exercises={part.exercises} />
                )
            )}
            <p>Total of {total} exercises.</p>
        </>
    )
}


const Course = ({ course }) => {
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course