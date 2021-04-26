import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import ExpenseFilter from '../../components/ExpenseFilter/ExpenseFilter';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpenseFilter
				selectedYear={filteredYear}
				onFilterChange={filterChangeHandler}
			/>
			{props.items.map(expense => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
};

export default Expenses;
