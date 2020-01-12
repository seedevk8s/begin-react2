import React from "react";

const MyComponent = props => {
    return <div>나의 새롭고 멋진 컴포넌트, 제 이름은 {props.name} 입니다.</div>;
};

MyComponent.defaultProps = {
    name: '디폴트 props 이름'
}

export default MyComponent;
