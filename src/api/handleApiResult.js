export const handleError = e => {
    alert('서버 장애');
    console.error(e);
}

export function checkStatusAndSetData(v, setData) {
    if (v.status === 403) {
        alert('접근 권한이 없습니다');
    } else {
        setData(v.data);
    }
}
