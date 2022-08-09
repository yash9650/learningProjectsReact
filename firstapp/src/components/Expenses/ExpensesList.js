import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList (props){
    if(props.item.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses in this Year</h2>
    }
    else{
    return <ul className='expenses-list'> {
        props.item.map(x => 
        <ExpenseItem 
        key = {x.id} 
        title = {x.title} 
        amount = {x.amount} 
        date = {x.date}/>
    )}
    </ul>
    }
}

export default ExpensesList;