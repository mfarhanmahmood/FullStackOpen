import React from 'react'

const Notification = ({ notification, setNotification }) => {

    if (notification.content === null || notification.content === '') {
        return null
    }

    let text = ''

    switch (notification.type.toLocaleLowerCase()) {
        case 'success':
            text = 'Success: '
            break;
        case 'info':
            text = 'Info: '
            break;
        case 'warning':
            text = 'Warning: '
            break;
        case 'danger':
            text = 'Danger: '
            break;
        default:
            setNotification({ content: null, type: 'info' })

    }

    const startTimout = sec => {
        setTimeout(() => {
            setNotification({ content: null, type: 'info' })
        }, 1000 * sec)
    }

    return (
        <>
            <div className={"alert " + notification.type}>
                <span>{text}</span>{notification.content}
            </div>
            {startTimout(5)}
        </>

    )
}

export default Notification