import './style/style.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Accommodation from './components/Accommodation/index'

function App() {

    const [ accommodation, setAccommodation ] = useState([])


    useEffect(() => {
        axios('http://localhost:3333/').then((response => {
            setAccommodation(response.data.accommodation)
            console.log(response.data)
        }))
    }, [])


  return(
    <div>
        <header className='px-[4rem] pt-5'>
             <h1 className=' text-[#EB5757] text-[1.2rem] font-black'>Airbnb</h1>
        </header>

        <main className="mx-w-[1000px] mt-[4rem]  mx-[1rem] sm:mx-[2rem]">
            <div className='flex justify-between items-center mb-[1.5rem]'>
                <h1 className='font-bold text-[#000000b6] text-2xl'> Pousadas </h1>
                <p className='text-[1rem] text-[#171717be]'> disponiveis: { accommodation.length } </p>
            </div>
            <div className='mx-auto mx-w-[1000px] flex flex-wrap grid-cols-1 sm:grid sm:justify-center gap-[1rem] sm:grid-cols-4 sm:gap-2 place-content-center'>

          
                { accommodation.map(accommodations => {
                    return(
                        <Accommodation 
                        key={accommodations.id}
                        url={accommodations.id}
                        feedback={accommodations._count.feedbacks}
                        name={accommodations.name}
                        img={accommodations.img}
                        />
                    )
                })}
       
                
            </div>
        </main>
    </div>
        
  )
}
 
export default App
