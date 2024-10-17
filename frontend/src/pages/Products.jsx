const reviewsData = [
    { id: 1, image: 'src/assets/perfume1.png', name: 'POSSESS', title: 'About Product', content: 'Possess Perce with Possess Perfume....' },
    { id: 2, image: 'src/assets/perfume2.png', name: 'Acqua di Gioia', title: 'About Product', content: 'Acqunce and freshness.' },
    { id: 3, image: 'src/assets/perfume6.png', name: 'Givenchy Gentleman', title: 'About Product', content: 'ny occasion or evening out....' },
    { id: 4, image: 'src/assets/perfume4.png', name: 'Poison Dior', title: 'About Product', content: 'Poison ing aura.' },
    { id: 5, image: 'src/assets/perfume.png',  name: 'GUCCI Flora',title: 'About Product', content: 'Gucci Fl.' },

];
import { ReviewForm } from "../components/ReviewForm";
import { useState } from 'react';
import ProductPage from "../components/ShareBtns";


const ReviewCard = ({ Key, name, image, title, content }) => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    const submitComment = async (reviewData) => {
        try {
        
            const response = await fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            })

            if (response.ok) {
                alert('Review Submitted successfully!!')
                setShowForm(false) // hide the form after submission
            } else {
                const errorResponse = await response.json();
                console.error('Error:', errorResponse.message);
                alert('Error: ', errorResponse.message)
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Error submitting review:', error)
        }
    };

    return (
        <div className="flex md:flex-row flex-col md:justify-between justify-center text-white min-h-screen lg:max-w-[1250px] max-w-[960px] w-full m-auto mb-10 rounded shadow-xl overflow-hidden px-12 lg:px-0">
            <div className="flex-1">
                <img src={image} alt="perfume image" className="md:max-w-full max-w-[60%] lg:h-[80%] md:h-[60%] h-[20%] object-cover m-auto" />
            </div>
            <div className="flex-1 flex flex-col gap-8 pb-72 pt-6 justify-around items-start">
                <h1 className="font-['Allura',cursive] lg:text-[3rem] text-[2.5rem]">{title}</h1>
                <p className="lg:text-[1.6rem] text-[1.3rem]">{content}</p>

                <div className="flex justify-between gap-6">
                    <button onClick={toggleForm} className="p-3 text-[1.1rem] rounded bg-[#6A0DAD] hover:bg-[#9A4DFF]">
                        Write Review
                    </button>
                    <ProductPage product={{name, Key}} />
                </div>

                {showForm && <ReviewForm submitComment={submitComment} />}
            </div>
        </div>
    );
};

export const Products = () => {
    return (
        <div className="min-h-screen max-w-screen py-20 bg-[#0f0f0f] flex flex-col">
            {reviewsData.map(review => (
                <ReviewCard key={review.id} image={review.image} name={review.name} title={review.title} content={review.content} />
            ))}
        </div>
    );
};
