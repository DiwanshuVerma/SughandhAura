
import { useEffect, useState } from 'react';

const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const day = String(date.getDate()).padStart(2, '0')
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12;
    hours = hours ? String(hours) : '12'

    return `${day}-${month}-${year} - ${hours}:${minutes} ${ampm}`;
};

export const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:5000/reviews');
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="max-w-screen min-h-screen bg-gray-900 px-20 py-20">
            <h1 className="text-white text-4xl font-bold my-12 text-center">Users Review</h1>
            <ul className="flex flex-col-reverse gap-6">
                {reviews.map(review => (
                    
                    <li key={review._id} className="bg-gray-800 p-4 rounded shadow-md flex flex-col gap-3"> 
                        <h3 className='text-white text-2xl text-center'>{formatDate(review.date)}</h3>
                        <h3 className="text-3xl font-semibold text-[#e2f280]">User: {review.userName}</h3>
                        <p className="text-gray-300 text-2xl">Review: {review.comment}</p>
                        <p className="text-yellow-500 font-bold text-lg">Rating: {review.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};
