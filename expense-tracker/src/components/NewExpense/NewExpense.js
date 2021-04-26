import React from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const saveExpDataHandler = expData => {
    const expenseData = {
      ...expData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpData={saveExpDataHandler} />
    </div>
  )
}

export default NewExpense
