import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}
	//* state is something that can change in our app and describes the state the app is in

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
		console.log(event.target.value);
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	render() {
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		console.log(filteredRobots);
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>;
		}
		else {
			return (
				<div className='tc'>
					<h1>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}
//! you pass the function here, because state needs to be in the parent component, then you put it in the input in the component!
export default App;
