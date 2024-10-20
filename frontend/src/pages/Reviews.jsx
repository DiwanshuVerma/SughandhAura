import loader from '/loading.gif'

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
                const response = await fetch('https://sughandhaura.onrender.com/reviews');
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

    if (loading) return <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl'><img src={loader} alt="Loading..." className='w-20'/></p>;
    if (error) return <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl'>Error: {error}</p>;

    return (
        <div className="max-w-screen min-h-screen bg-gray-900 px-5 sm:px-10 md:px-20 py-20">
            <h1 className="text-white text-4xl font-bold my-12 text-center">Users Review</h1>
            <ul className="flex flex-col-reverse sm:gap-6 gap-12">
                {reviews.map(review => (
                    
                    <li key={review._id} className="bg-gray-800 p-4 rounded shadow-md flex flex-col sm:gap-3 gap-8" > 
                        <h3 className='text-white sm:text-2xl text-lg text-center'>{formatDate(review.date)}</h3>
                        <h3 className="sm:text-3xl text-2xl font-semibold text-[#e2f280]">User: {review.userName}</h3>
                        <p className="text-gray-300 text-2xl">Review: {review.comment}</p>
                        <p className="text-yellow-500 font-bold text-lg">Rating: {review.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};
