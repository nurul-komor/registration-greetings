import React from 'react'

export default function Registration(props) {
    return (
        <div className='shadow-container card p-3'>
            <h4>Registration form</h4>
            <form onSubmit={props.submit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input placeholder='type your name here...' type="text" className="form-control" name='name' id='name' required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder='type your email here...' type="email" className="form-control" name='email' id='email' required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder='password here...' type="password" className="form-control" name='password' id='password' required />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}
