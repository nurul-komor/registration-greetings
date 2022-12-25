import React from 'react'
import GreetingsStyle from './Greetings.module.css';
import classNames from 'classnames'
export default function Greetings(props) {
    return (
        <div className={classNames(GreetingsStyle.greetingsContainer, "shadow-container", "card")}>
            <div className={GreetingsStyle.greetings}>
                <h2>Welcome {props.name}</h2>
                <h5 className=''>verification  email sent to {props.email}</h5>
            </div>
        </div>
    )
}
