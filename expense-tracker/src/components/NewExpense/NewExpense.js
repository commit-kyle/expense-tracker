import React from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const saveExpDataHandler = expData => {
    const expenseData = {
      ...expData,
      id: Math.random().toString(),
    }
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpData={saveExpDataHandler} />
    </div>
  )
}

export default NewExpense
