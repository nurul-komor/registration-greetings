import React from 'react'
import classNames from 'classnames';
export default function Registration(props) {
    let icon, passTextType;
    if (props.passStatus === false) {
        icon = 'fa-eye';
        passTextType = "password";
    } else {
        icon = 'fa-eye-slash';
        passTextType = "text";
    }
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
                    <label style={{ position: "relative", width: "100%" }} htmlFor="password">Password:
                        <input placeholder='password here...' type={passTextType} className="form-control" name='password' id='password' required />
                        <p onClick={props.click} style={{
                            position: "absolute", right: "17px",
                            top: "55%"
                        }}><i className={classNames('fas', icon)}></i></p>
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}
