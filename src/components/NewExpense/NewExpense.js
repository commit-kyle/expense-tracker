import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpDataHandler = expData => {
		const expenseData = {
			...expData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const newExpenseHandler = () => {
		setIsEditing(true);
	};

	const cancelExpenseHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={newExpenseHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onCancel={cancelExpenseHandler}
					onSaveExpData={saveExpDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
