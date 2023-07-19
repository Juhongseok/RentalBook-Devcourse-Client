import React, {useEffect, useState} from "react";
import {allUsers} from "../api/UserApi";
import {useNavigate} from "react-router-dom";

export function Users() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        allUsers(setUsers, navigate)
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">ROLE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(v => {
                        return (
                            <tr key={v.userId}>
                                <td>{v.userId}</td>
                                <td>{v.username}</td>
                                <td>{v.email}</td>
                                <td>{v.role}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
