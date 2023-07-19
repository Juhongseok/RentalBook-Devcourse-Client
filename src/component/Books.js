import React from "react";
import {rentBook} from "../api/BookApi";
import {useNavigate} from "react-router-dom";

export function Books({books = []}) {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">BUTTON</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map(v => {
                        return (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.type}</td>
                                <td>
                                    <button
                                        disabled={v.rental==='RENT'}
                                        onClick={() => rentBook(v.id, navigate)}>
                                        {v.rental==='RENT' ? '대여 불가' : '대여 가능'}
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
