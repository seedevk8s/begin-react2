import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        message: '',
        username: ''
    });
    const { message, username } = form;

    const onChange = e => {
        const nextForm = {
            ...form,  // 기존의 form 내용을 이 자리에 복사 한 뒤
            [e.target.name]: e.target.value  // 원하는 값을 덮어씌우기
        };
        setForm(nextForm);      //state에 텍스트를 잘 담음.
    };

    const onClick = () => {
        alert(message + ': ' + username);     //클릭이벤트 발생하면 => 현재 comment값을 메시지 박스로 띄움.
        setForm({
            message: '',
            username: ''
        });     // comment값을 공백으로 설정.
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습!!</h1>
            {/* input 요소를 렌더링하는 코드,  해당 요소에 onChange 이벤트 설정하는 코드 */}
            <input
                type="text"
                name="message"
                placeholder="메시지"
                value={message}
                onChange={onChange}
            />
            <input
                type="text"
                name="username"
                placeholder="유저명"
                value={username}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;















