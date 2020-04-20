import React from 'react';

export default function Form({ input, handleInputChange, handleAddTodo }) {
	return (
		<div>
			<input value={input} onChange={handleInputChange} type='text' />
			<button onClick={handleAddTodo}>Submit</button>
		</div>
	);
}
