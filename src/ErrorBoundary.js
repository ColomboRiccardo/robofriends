import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}
	//if the component had a problem mounting, this lifecycle method is going to fire

	render() {
		if (this.state.hasError) {
			return <h1>That's not good</h1>;
		}
		else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
