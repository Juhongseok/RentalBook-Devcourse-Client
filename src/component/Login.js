import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export function Login({onSubmit}) {
    const[user, setUser] = useState({
        email: "", password:""
    })

    const changeEmail = e => setUser({...user, email: e.target.value})
    const changePassword = e => setUser({...user, password: e.target.value})

    const navigate = useNavigate();
    const handleAddButtonClick = e => {
        onSubmit(user, navigate);
    }

    return (
        <React.Fragment>
            <div className="mb-3 container">
                <div>
                    <label htmlFor="email" className="form-label">EMAIL</label>
                    <input type="email" className="form-control" id="email" onChange={changeEmail}/>
                </div>
                <div>
                    <label htmlFor="password" className="form-label">PASSWORD</label>
                    <input type="password" className="form-control" id="password" onChange={changePassword}/>
                </div>
                <div>
                    <button onClick={handleAddButtonClick} className="btn btn-small btn-outline-dark">로그인</button>
                </div>
            </div>
        </React.Fragment>
    );
}
