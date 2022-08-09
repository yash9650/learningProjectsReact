import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// import react, { useState } from 'react';

    // const date = new Date(2022,1,31);
    // // console.log(date);
    // const data = {
    //     title: "Car Insurence",
    //     date: `${date}`,
    //     price: 1222.00
    // }
    // instead of accessing the data from here concept of props is used to pass
    //  the data from one componente to another.

function ExpenseItem(props){
    // const [title, setTitle] = useState(props.title)
    // function clickHandler (){
    //     setTitle('NewTitle');
    //     console.log("Clicked");
    // }


    return (
        <li>
        <Card  className="expense-item">
        <ExpenseDate date= {props.date}/>
        <div className="expense-item__description">
            <h2> {props.title} </h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick= {clickHandler}>Change title</button> */}
        </Card>
        </li>
    );
}

export default ExpenseItem;