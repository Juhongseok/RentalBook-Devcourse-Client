import React from "react";

export function NavBar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">홈</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/login">로그인</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/sign-up">회원가입</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/users">전체 사용자</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/book">나의 책 대여 목록</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/users/book">전체 사용자 책 대여 목록</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/book">책 등록</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
