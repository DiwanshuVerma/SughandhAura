import { useState } from 'react';

export const ReviewForm = ({ submitComment }) => {
    const [comment, setComment] = useState('')
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(0)

    const handleSubmit = (e) => {
      e.preventDefault();
      if(rating>5){
        alert('Rate between 1 to 5')
      }else
      submitComment({ userName, comment, rating });
    }
  
    return (
      <form onSubmit={handleSubmit} className="mt-4 text-black">
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="block mb-4 p-2 bg-[#f9eaff] rounded"
          required
        />
        <input
          type="number"
          placeholder="Rate it 1 to 5"
          // value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="block mb-4 p-2 bg-[#f9eaff] rounded"
          required
        />
        <textarea
          placeholder="Write your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block mb-4 p-2 w-full bg-[#f9eaff] rounded text-lg"
          required
        />
        <button type="submit" className="p-2 bg-[#6A0DAD] text-white rounded">
          Submit review
        </button>
      </form>
    );
  };
  