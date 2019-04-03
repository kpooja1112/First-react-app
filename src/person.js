import React from 'react';
import './App.css';

const person = (props)=>{
	
		return (
			<div>
			<p className="active" onClick={props.click}>Hello, i am {props.name} and age is {props.age} sdf!!!.
			<input type="text" onChange={props.change} />
			<span>{props.children}</span>
			</p>

			</div>
		)

	
}

export default person;