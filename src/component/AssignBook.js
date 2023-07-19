import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export function AssignBook({onSubmit}) {
    const[book, setBook] = useState({
        bookName: "", bookType:""
    })

    const navigate = useNavigate();
    const changeBookName = e => setBook({...book, bookName: e.target.value})
    const changeBookType = e => setBook({...book, bookType: e.target.value})

    const handleAddButtonClick = e => {
        console.log(book)
        onSubmit(book, navigate);
    }

    return (
        <React.Fragment>
            <div className="mb-3 container">
                <div>
                    <label htmlFor="bookName" className="form-label">책 이름</label>
                    <input type="email" className="form-control" id="bookName" onChange={changeBookName}/>
                </div>
                <div>
                    <label htmlFor="bookType" className="form-label">책 타입</label>
                    <select className="form-select" id="bookType" aria-label="Default select example" onChange={changeBookType}>
                        <option selected>Open this select menu</option>
                        <option value="DEVELOP">DEVELOP</option>
                        <option value="LANGUAGE">LANGUAGE</option>
                        <option value="ETC">ETC</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleAddButtonClick} className="btn btn-small btn-outline-dark">책 등록</button>
                </div>
            </div>
        </React.Fragment>
    );
}
