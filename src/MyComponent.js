import React from "react";
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
           // 비구조화 할당

    return <div>나의 새롭고 멋진 컴포넌트, 제 이름은 {name} 입니다.<br/>
                자식컴포넌트에서 읽은 부모컴포넌트 태그 사이에 있는 내용값은 {children} 입니다.
            </div>;
};

MyComponent.defaultProps = {
    name: '디폴트 props 이름'
}

MyComponent.protoTypes = {
    name: PropTypes.string.isRequired
}

export default MyComponent;
