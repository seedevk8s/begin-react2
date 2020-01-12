import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        message: ''
    });
    const { message } = form;

    const onChange = e => {
        const nextForm = {
            ...form,  // 기존의 form 내용을 이 자리에 복사 한 뒤
            [e.target.name]: e.target.value  // 원하는 값을 덮어씌우기
        };
        setForm(nextForm);      //state에 텍스트를 잘 담음.
    };

    return (
        <div>
            <h1>이벤트 연습!!</h1>
            {/* input 요소를 렌더링하는 코드,  해당 요소에 onChange 이벤트 설정하는 코드 */}
            <input
                type="text"
                name="username"
                placeholder="유저명"
                onChange={onChange}
            />
        </div>
    );
};

export default EventPractice;