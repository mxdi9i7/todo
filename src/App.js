import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import initialTodos from './constants/todos';

function App() {
	const [todos, setTodos] = useState(initialTodos);
	const [input, setInput] = useState('');

	const handleDelete = (i) => {
		const nextTodos = [...todos];
		nextTodos.splice(i, 1);
		setTodos(nextTodos);
	};

	const handleComplete = (i) => {
		const nextTodos = [...todos];
		nextTodos[i].isComplete = !nextTodos[i].isComplete;
		setTodos(nextTodos);
	};

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleAddTodo = () => {
		const newTodos = [...todos];
		newTodos.push({ text: input, isComplete: false });
		setTodos(newTodos);
		setInput('');
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<List
					handleComplete={handleComplete}
					handleDelete={handleDelete}
					todos={todos}
				/>
				<Form
					input={input}
					handleAddTodo={handleAddTodo}
					handleInputChange={handleInputChange}
				/>
			</header>
		</div>
	);
}

export default App;
