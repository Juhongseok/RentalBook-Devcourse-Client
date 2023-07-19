import React, {useEffect, useState} from "react";
import {assignOwnRentalBooks, handleReturnButton} from "../api/BookApi";
import {useNavigate} from "react-router-dom";

export function MyBook() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        assignOwnRentalBooks(setBooks, navigate)
    }, []);


    return (
        <React.Fragment>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">RETURN</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map(v => {
                        return (
                            <tr key={v.rentalId}>
                                <td>{v.bookId}</td>
                                <td>{v.bookName}</td>
                                <td>{v.bookType}</td>
                                <td>
                                    <button onClick={() => handleReturnButton(v.bookId, v.rentalId, navigate)}
                                            className="btn btn-small btn-outline-dark">
                                        반납
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
