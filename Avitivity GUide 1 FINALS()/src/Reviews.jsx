import React, { useState } from 'react';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState('');

  const handleAddReview = () => {
    const newReview = {
      title,
      date,
      body,
    };
    setReviews([...reviews, newReview]);
    setTitle('');
    setDate('');
    setBody('');
  };

  function handleDaleteReview(index){
    const deletedReview =reviews.filter((reviews,i) => i !== index);
    setReviews(deletedReview)
}
  return (
    <div>
      <h2 className='title'> My Game Reviews</h2>
      <div className='Myreviews'>
        <input type="text" placeholder="Game Title" value={title} onChange={(title) => setTitle(title.target.value)} />
        <br/>
        <input type="date" placeholder="Date" value={date} onChange={(date) => setDate(date.target.value)} />
        <br/>
        <textarea placeholder="Review" value={body} onChange={(body) => setBody(body.target.value)} />
        <br/>
        <button onClick={handleAddReview}>Add Review</button>
      </div>
      <div className='box'>
        <hr></hr>
        {reviews.map((review, index) => (
          <div key={index} className='reviews'>
            
            <h3>{review.title}</h3>
            <p>{review.date}</p>
            <p>{review.body}</p>
            <button onClick={() => handleDaleteReview(index)}>Delete</button>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Reviews;
