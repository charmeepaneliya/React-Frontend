import React, { useContext } from 'react'
import { ExpenceContext } from '../context/ExpenceContext'
import { Card } from 'react-bootstrap';

const ExpenceData = () => {

    const {Credit,Debit,Balance} = useContext(ExpenceContext);
  return (
    <>
    <Card className="mt-5 mb-5 border p-3 rounded-4" style={{ width: "50%", margin: "auto" }}>
        <Card.Body className='text-center'>
        <h1 className='mb-3'>Expence Status</h1>
      <h2 style={{fontSize:"20px"}}>Credit: ₹{Credit}</h2>
      <h2 style={{fontSize:"20px"}}>Debit: ₹{Debit}</h2>
      <h2 style={{fontSize:"20px"}}>Balance: ₹{Balance}</h2>
    </Card.Body>
    </Card>
    
      
    </>
  )
}

export default ExpenceData
