import React from 'react';

const Card = (props) => {
	return(
		<div className='bg-light-blue dib br3 pa3 ma2 grow shadow-5 bw2' > 
			<img alt='robot 'src={`https://robohash.org/hot${props.id}?200x200`} width='250' height='250' />
		<div>
			<h2> {props.name} </h2> 
			<p> {props.username} </p>
		</div>
		</div>
	);
}

export default Card;