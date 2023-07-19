import {config, get, post, setId} from "./ApiConst";
import {handleError} from "./handleApiResult";

//회원가입
export const handleUserSignUp = (user, navigate) => {
    post('/users', user).then(
        v => {
            alert('회원가입에 성공했습니다')
            navigate('/user/login')
        },
        handleError
    );
}

//로그인
export const handleLogin = (user, navigate) => {
    post('/users/login', user).then(
        v => {
            if (v.data.statusCode === 400) {
                console.error(v.data.message);
                alert('아이디와 이메일을 확인해주세요');
                return;
            }
            setId(v.data.id);
            alert('로그인에 성공했습니다');
            navigate('/')
        },
        handleError
    )
}

//모든 유저 정보 가져오기
export const allUsers = (setUsers, navigate) => {
    get('/users', config)
        .then(
            v => {
                if (v.data.statusCode === 403) {
                    alert('접근 권한이 없습니다');
                    navigate('/');
                    return;
                }
                setUsers(v.data);
            },
            handleError
        );
}
