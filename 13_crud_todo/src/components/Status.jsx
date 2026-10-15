import React from 'react'

const Status = ({totalTask, completedTask, pendingTask}) => {
  return (
    <>
        <h1>TotalTask:{totalTask}</h1>
        <h1>CompletedTask:{completedTask}</h1>
        <h1>PendingTask:{pendingTask}</h1>
    </>
  )
}

export default Status
