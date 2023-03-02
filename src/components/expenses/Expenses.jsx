import React from "react";
import ExpenseItem from './expense_item/ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
    const {expenses}=props;
    return (
        <div className="expenses">
            {
                expenses.map((each_expense,id)=>{
                    return(
                        <ExpenseItem
                            key={each_expense.id}
                            title={each_expense.title}
                            amount={each_expense.amount}
                            date={each_expense.date}
                        />
                    )
                })
            }

        </div>
    )
}

export default Expenses;