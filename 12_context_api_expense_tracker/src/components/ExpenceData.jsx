import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";


const ExpenseData =() =>{
    const {balance, credit, debit} = useContext(ExpenseContext);

    return (
        <>
            <h1>Expence Tracker</h1>

            <h2>Credit : ₹{credit}</h2>
            <h2>Debit: ₹{debit}</h2>
            <h2>Balance: ₹{balance} </h2>
        </>
    )
}

export default ExpenseData;