import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robot';


class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	this.onSearchChange = this.onSearchChange.bind(this)

	}

	onSearchChange(event) {
		this.setState({
			searchfield: event.target.value
		})
		
		//console.log(filteredArray)
	}

	render(){
		const filteredArray = this.state.robots.filter((num)=> {
			return num.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className='tc'>
			<h1 className='f1'> RoboFriends </h1>
			<SearchBox searchChange={this.onSearchChange}/>
		 	<CardList robots={filteredArray}/>
		 </div>
		 )
	}
}

export default App;