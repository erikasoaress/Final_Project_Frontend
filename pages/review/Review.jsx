import React from 'react'
import { useState } from 'react';

function Review() {

 const handleSubmit = (e) => {
    e.preventDefault();}

    const [reviews, setReviews] = useState("")

    const onChange = e =>{
        setReviews(e.target.value)
    }


  return (
    <div>
       <form>
      <label>Do you enjoy this station? <br></br>
        Leave a review:
        <input type="text" value={reviews} onChange={onChange}/>
      </label>
      <button type='submit' onClick={handleSubmit}>Send review</button>
    </form>
    </div>
  );
}

export default Review