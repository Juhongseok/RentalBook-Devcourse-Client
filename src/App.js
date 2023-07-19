import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./component/Login";
import {Books} from "./component/Books";
import {NavBar} from "./component/NavBar";
import {SignUp} from "./component/SignUp";
import {Users} from "./component/Users";
import {MyBook} from "./component/MyBook";
import {UsersBook} from "./component/UsersBook";
import {AssignBook} from "./component/AssignBook";
import {assignBooks, handleAssignBook} from "./api/BookApi";
import {handleLogin, handleUserSignUp} from "./api/UserApi";

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        assignBooks(setBooks)
    }, []);

    return (
        <div className="App">
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Books books={books}/>}/>
                    <Route path={"/user/login"} element={<Login onSubmit={handleLogin}/>}/>
                    <Route path={"/user/sign-up"} element={<SignUp onSubmit={handleUserSignUp}/>}/>
                    <Route path={"/users"} element={<Users/>}/>
                    <Route path={"/user/book"} element={<MyBook/>}/>
                    <Route path={"/users/book"} element={<UsersBook/>}/>
                    <Route path={"/book"} element={<AssignBook onSubmit={handleAssignBook}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
