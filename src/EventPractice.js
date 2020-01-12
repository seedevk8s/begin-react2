import React from 'react';

const EventPractice = () => {
    return (
        <div>
            <h1>이벤트 연습!!</h1>
            {/* input 요소를 렌더링하는 코드,  해당 요소에 onChange 이벤트 설정하는 코드 */}
            <input
                type="text"
                name="username"
                placeholder="유저명"
                onChange={
                    (e) => {
                        console.log(e.target.value);    {/* e : 이벤트 객체, e.target.value : 변할 인풋값 */}
                    }
                }
            />
        </div>
    );
};

export default EventPractice;