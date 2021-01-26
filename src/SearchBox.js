import React from 'react';

const SearchBox = (props) => {
	const {searchChange} = props
	return (
			<div className='mv3' >
			<input 
				className='br4 pa3 ba b--green bg-washed-green' 
				type='text'
				placeholder='Search Robots'
				onChange={searchChange}
			 />
		</div>
	)
}

export default SearchBox