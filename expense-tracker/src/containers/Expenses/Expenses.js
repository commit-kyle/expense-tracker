import React, { useState } from 'react';

import './Expenses.css';
import ExpensesList from '../../components/ExpensesList/ExpensesList';
import Card from '../Card/Card';
import ExpenseFilter from '../../components/ExpenseFilter/ExpenseFilter';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpenseFilter
				selectedYear={filteredYear}
				onFilterChange={filterChangeHandler}
			/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
