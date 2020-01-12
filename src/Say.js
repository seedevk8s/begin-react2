import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');         //컴포넌트에서 동적인 값을 상태(state)라고 부름.
    //이 함수를 호출해주면 배열이 반환되는데요, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다.
    //Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해줍니다.
    const onClickEnter = () => setMessage('안녕하세요!!');
    const onClickLeave = () => setMessage('안녕히 가세요!!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>

            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{ color: 'blue'}} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    );
};

export default Say;



































