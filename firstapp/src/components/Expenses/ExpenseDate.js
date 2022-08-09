import './ExpenseDate.css';

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{props.date.getFullYear()}</div>
            <div className='expense-date__day'> {day} </div>

        </div>
    );
}

export default ExpenseDate;