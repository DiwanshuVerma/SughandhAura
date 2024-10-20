import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'

const ShareButtons = ({ productUrl, productName }) => {
    const encodedUrl = encodeURIComponent(productUrl)
    const encodedText = encodeURIComponent(`Check out this amazing product: ${productName}`);

    return (
        <div className="flex gap-4">


            {/* Twitter */}
            <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-600"
            >
                <FaTwitter size={24} />
            </a>

            {/* WhatsApp */}
            <a
                href={`https://api.whatsapp.com/send?text=${encodedText} ${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-700"
            >
                <FaWhatsapp size={24} />
            </a>

            {/* LinkedIn */}
            <a
                href={`https://www.linkedin.com/shareArticle?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-900"
            >
                <FaLinkedinIn size={24} />
            </a>
            {/* Instagram */}
            <a
                href={`https://www.instagram.com/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-800"
            >
                <FaInstagram size={24} />
            </a>
        </div>
    );
};

const ProductPage = ({ product }) => {
    return (
        <div className="flex flex-col items-center text-white">

            {/* Share Icons */}
            <ShareButtons
                productUrl={`https://sughandh-aura-fe.netlify.app/`}
                productName={`${product.name}`}
            />
        </div>
    );
};

export default ProductPage;
