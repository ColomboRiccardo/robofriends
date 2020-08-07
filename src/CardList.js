import React from 'react';

import Card from './Card';
//* if the file doesn't export default, you need to destructure it

const CardList = ({ robots }) => {
	return (
		<div>
			{/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
			<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
            before we hard coded it*/}
			{robots.map((user, i) => {
				return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
			})}
			{
				//* no need to save this in a new array and return that, this is cleaner.
				//*you add a key prop because with that react can keep track of what is being changed
				//! a better key than i should be something unique and fixed. If we shuffle around components then the key and id don't correspond. id should be better
			}
		</div>
	);
};

export default CardList;
