import  React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
    const expenses = props.expenses;
    const[filteredYear,setFilteredYear] = useState('2022');
    const getYear=(Y)=>{
        setFilteredYear(Y);
    }
    
    const filteredArr = expenses.filter(expense => 
        expense.date.getFullYear().toString() === filteredYear);

        
    return (
        <Card className="expenses">
            <ExpensesFilter seleted={filteredYear} filter= {getYear}/>
            <ExpensesChart expenses = {filteredArr}/>
            <ExpensesList item ={filteredArr}/>
        </Card>
    );
}

export default Expenses;