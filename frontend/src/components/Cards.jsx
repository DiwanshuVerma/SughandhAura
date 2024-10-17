import { useNavigate } from "react-router-dom"

export const Card = () => {
    const navigate = useNavigate()
    const cards = [
        {
            imgSrc: "src/assets/perfume.png",
            name: "GUCCI Flora",
            price: "$20.9",
        },
        {
            imgSrc: "src/assets/perfume1.png",
            name: "POSSESS",
            price: "$19.3",
        },
        {
            imgSrc: "src/assets/perfume2.png",
            name: "ACQUA di GIOIA",
            price: "$32.9",
        },
        {
            imgSrc: "src/assets/perfume6.png",
            name: "Givenchy Gentleman",
            price: "$28.9",
        },
        {
            imgSrc: "src/assets/perfume4.png",
            name: "Poision Dior",
            price: "$43.9",
        },
        {
            imgSrc: "src/assets/perfume5.png",
            name: "PERFUME",
            price: "soon...",
        },
    ]

    return (
        <div className='max-w-[1300px] m-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {cards.map(card => (
                <div
                    key={card.price}
                    className="rounded text-white flex bg-[#0f0f0f] flex-col items-center justify-between py-5 border-2 border-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-[1.03] hover:border-[#6A0DAD] hover:shadow-lg"
                >
                    <div className="w-[60%] cursor-pointer" onClick={() => {
                        navigate('/products')
                    }}>
                        <img src={card.imgSrc} alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    </div>

                    <div className="flex flex-col text-2xl items-center w-full gap-2">
                        <p>{card.name}</p>
                        <b>{card.price}</b>
                        <button className="p-2 text-[1.2rem] bg-[#6A0DAD] hover:bg-[#9A4DFF] w-full">
                            Add to Cart
                        </button>
                    </div>
                </div>

            ))}


        </div>
    )
}