import { useNavigate } from "react-router-dom";

export const Sale = () => {
    const navigate = useNavigate()

    const handleShopNow = () => {
        navigate('/')
        setTimeout(() => {
            const section = document.getElementById('cards-section')
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    };

    return (
        <div className='max-w-[1200px] m-auto text-white flex justify-center flex-col sm:flex-row gap-12 relative isolate'>
            <div className="absolute top-[60px] left-[50px] bg-red-800 h-52 w-52 rounded-full blur-[100px] -z-10" ></div>
            <div className="absolute bottom-0 right-[90px] bg-blue-900 h-52 w-52 rounded-full blur-[100px] -z-10"></div>

            <div className="flex-[1.2]">
                <img src="/assets/sale perfume.png" alt=""  className=""/>
            </div>
            <div className="flex flex-col items-start justify-evenly py-5 flex-1 ">
                <h2 className="text-[#e2f280] font-medium text-xl">DEAL OF THE DAY!</h2>
                <h1 className="md:text-4xl text-2xl font-medium">Save 20% Off On All Items Collection</h1>
                <button onClick={handleShopNow} className="md:p-3 p-2 text-[1.1rem] rounded bg-[#6A0DAD] hover:bg-[#9A4DFF]">
                    Shop Now
                </button>
            </div>
        </div>
    )
}