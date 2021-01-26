import React from 'react';
import Card from './Card';

const CardList = (props) => {
	const {robots} = props
	/* Destructuri*/ 
	const CardArray = robots.map((user,ind) => {
		/*return <Card key={robots[ind].id} name={robots[ind].name} id={robots[ind].id} username={robots[ind].username} email={robots[ind].email}/>
	}
*/
		return <Card key={user.id} name={user.name} id={user.id} username={user.username} email={user.email}/>
	}
	)
	return (
		<div> 
			{CardArray}
	 	</div>
	 )
}

export default CardList;