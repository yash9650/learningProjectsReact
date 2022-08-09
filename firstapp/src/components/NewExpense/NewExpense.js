import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){
    const saveData = (data)=> {
        const savedData = {
            ...data,
            id: Math.random()
        }
        props.onRecievedData(savedData);
    }
    return(
        <div className='new-expense'>
        <ExpenseForm onSaveData = {saveData}/>
        </div>
    );
}

export default NewExpense;