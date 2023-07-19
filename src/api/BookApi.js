import {config, getId, post, get, del} from "./ApiConst";
import {checkStatusAndSetData, handleError} from "./handleApiResult";

//책 등록
export const handleAssignBook = (book, navigate) => {
    post('/books', book, config).then(
        v => {
            if (v.data.statusCode === 403) {
                alert('접근 권한이 없습니다');
                navigate('/');
                return;
            }
            alert('등록 성공')
            console.log(v.data)
            navigate('/');
        },
        handleError
    )
}

//등록 된 모든 책 리스트
export const assignBooks = (setBook) => {
    get('/books')
        .then(
            v => checkStatusAndSetData(v, setBook)
        );
}

//책 대여
export const rentBook = (bookId, navigate) => {
    console.log(config)
    post('/books/' + bookId + '/rentals?userId=' + getId, null, config)
        .then(
            v => {
                if (v.data.statusCode === 403) {
                    alert('접근 권한이 없습니다');
                    return;
                }
                alert('대여가 완료되었습니다')
                navigate('/user/book')
            },
            handleError
        )
}

//책 반납
export const handleReturnButton = (bookId, rentalId, navigate) => {
    const uri = '/books/' + bookId
        + '/rentals/' + rentalId
        + '/users/' + getId;

    del(uri, config)
        .then(
            v => {
                console.log(v.data)
                if (v.data.statusCode === 403) {
                    alert('접근 권한이 없습니다');
                    navigate('/');
                    return;
                }
                alert('반납이 완료되었습니다')
                navigate('/');
            },
            handleError
        )
}

//내가 빌린 책 리스트
export const assignOwnRentalBooks = (setBooks, navigate) => {
    get('/books/rentals/users/' + getId, config)
        .then(
            v => {
                if (v.data.statusCode === 403) {
                    alert('접근 권한이 없습니다');
                    navigate('/');
                    return;
                }
                setBooks(v.data)
            },
            handleError
        )
}

//사용자들이 빌린 책 리스트
export const assignRentalBooks = (setUserBooks, navigate) => {
    get('/books/rentals', config)
        .then(
            v => {
                if (v.data.statusCode === 403) {
                    alert('접근 권한이 없습니다');
                    navigate('/');
                    return;
                }
                setUserBooks(v.data)
            },
            handleError
        );
}
