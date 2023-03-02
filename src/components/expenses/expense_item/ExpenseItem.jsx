import React from "react";
import ExpenseDate from "../expense_date/ExpenseDate";
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    let {
        title = '',
        amount = 0,
        date = new Date()
    } = props;

    // const[title,setTitle]=useState(props.title);
    // const buttonClick =()=>{
    //     setTitle('Updated');
    //     console.log(title);

    // };

    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* <button onClick={buttonClick}>Change Title</button> */}
        </div>
    )
};

export default ExpenseItem;