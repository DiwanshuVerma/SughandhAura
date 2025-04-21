const reviewsData = [
    { id: 1, image: '/assets/perfume1.png', name: 'POSSESS', title: 'About Product', content: 'POSSESS perfume embodies an alluring blend of elegance and mystery. Its captivating notes of rich amber and floral hints create an intoxicating aura, evoking confidence and charm. Ideal for both day and night, this fragrance leaves a lasting impression, making every moment unforgettable. Embrace your essenPossess Perce with Possess Perfume....' },
    { id: 2, image: '/assets/perfume2.png', name: 'Acqua di Gioia', title: 'About Product', content: 'Acqua di Gioia is a refreshing celebration of natures beauty. With its invigorating notes of mint, lemon, and jasmine, this fragrance captures the essence of a serene ocean breeze. Perfect for daily wear, it evokes feelings of joy and tranquility, making it a timeless choice for those who seek elega Acqunce and freshness.' },
    { id: 3, image: '/assets/perfume6.png', name: 'Givenchy Gentleman', title: 'About Product', content: 'Givenchy Gentlemen is a sophisticated fragrance that embodies elegance and confidence. With rich notes of bergamot, leather, and patchouli, it creates a distinctive aroma that captivates the senses. Perfect for the modern man, this scent exudes charm and strength, making it an ideal choice for any occasion or evening out....' },
    { id: 4, image: '/assets/perfume4.png', name: 'Poison Dior', title: 'About Product', content: 'Dior is a bold and captivating fragrance that embodies allure and mystery. With its intoxicating blend of sweet fruit, rich flowers, and warm spices, it evokes a sense of daring elegance. Perfect for evening wear, this perfume leaves a lasting impression, enticing those who encounter its enchant Poison ing aura.' },
    { id: 5, image: '/assets/perfume.png',  name: 'GUCCI Flora',title: 'About Product', content: 'Gucci Flora is a vibrant and enchanting fragrance that captures the essence of a blooming garden. With notes of peony, citrus, and patchouli, it radiates femininity and grace. Perfect for day or night, this scent embodies a modern, sophisticated spirit, making every moment feel like a floral celebration' },

];
import { ReviewForm } from "../components/ReviewForm";
import { useState } from 'react';
import ProductPage from "../components/ShareBtns";


const ReviewCard = ({ Key, name, image, title, content }) => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    const submitComment = async (reviewData) => {
        try {
        
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reviews`, {
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

                <div className="flex justify-between gap-6 flex-col sm:flex-row ">
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
