import React, {useEffect, useState} from "react";
import {assignRentalBooks} from "../api/BookApi";
import {useNavigate} from "react-router-dom";

export function UsersBook() {
    const [userBooks, setUserBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        assignRentalBooks(setUserBooks, navigate)
    }, [])

    return (
        <React.Fragment>
            {userBooks.map(v => {
                return (
                    <div className='container'>
                        <div>
                            <h2>{v.username}</h2>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">TYPE</th>
                                </tr>
                                </thead>
                                <tbody>
                                {v.rentalList.map(v => {
                                    return (
                                        <tr key={v.rentalId}>
                                            <td>{v.bookId}</td>
                                            <td>{v.bookName}</td>
                                            <td>{v.bookType}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                )
            })}
        </React.Fragment>
    );
}
