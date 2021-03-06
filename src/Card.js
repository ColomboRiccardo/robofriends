import React from 'react';

const Card = ({ name, email, id }) => {
	//*const { name, email } = props; this is destructuring, but you can also do it in parameters
	return (
		<div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='photo' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
