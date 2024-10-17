import { Card } from "../components/Cards"
import { Hero } from "../components/Hero"
import { Sale } from "../components/Sale"

export const Home = () => {
    return (
      <div>
        <div className="max-w-screen bg-black md:max-h-screen max-h-[80vh]">
          <Hero/>
        </div>
  
        <div id="cards-section" className='py-12 px-6 min-h-screen bg-black max-w-screen m-auto'>
          <Card/>
        </div>
  
        <div className='py-12 px-6 bg-black overflow-hidden max-w-screen'>
          <Sale />
        </div>
      </div>
    )
  }