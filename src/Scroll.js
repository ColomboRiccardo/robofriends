import React from 'react';
//! react has props, has state, but also has children

const Scroll = (props) => {
	return <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>{props.children}</div>;
};
//! if i return props.children, nothing changes! the chilren of this component can be passed down through props.children. On the other hand if you wrap a component in a component and you return something like an h1 the children disappear. Any component in react has props.children, even if you don't pass any props
export default Scroll;
