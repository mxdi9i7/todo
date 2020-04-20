import React from 'react';

export default function List({ todos, handleDelete, handleComplete }) {
	return (
		<div>
			{todos.map((todo, index) => (
				<div className='todo'>
					<input
						onChange={() => handleComplete(index)}
						checked={todo.isComplete}
						type='checkbox'
					/>
					{todo.isComplete ? (
						<strike>{todo.text}</strike>
					) : (
						<span>{todo.text}</span>
					)}
					<button onClick={() => handleDelete(index)}>x</button>
				</div>
			))}
		</div>
	);
}
