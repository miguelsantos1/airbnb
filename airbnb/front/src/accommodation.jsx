import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { User } from 'phosphor-react'
import Feedback from './components/Feedback'

function Accommodation() {

  const { id } = useParams()
  const [ accommodation, setAccommodation ] = useState([])

  useEffect(() => {
      axios(`http://localhost:3333/${id}/accommodation`).then((response => {
          setAccommodation(response.data.accommodation)
      }))
  }, [])

  async function handleForm(event) {

    event.preventDefault()

    const notification = document.querySelector(".feedbackNotification")

    const title = document.querySelector('#title').value
    const about = document.querySelector('#about').value

    axios.post(`http://localhost:3333/feedback/${id}`, {
      title: title,
      about: about
    })
    .then((response) => {
      console.log("foii")
      notification.style.display = "block"

      setTimeout(3000, () => {
        notification.style.display = "none"
      })
      

    })
    .catch((error) => {
      console.log(error)
    })

  }

  return(
    <>
      <header className='px-[4rem] pt-5'>
        <a href="/" className=' text-[#d45f5f] text-[1.2rem] font-black'>Airbnb</a>
      </header>

      <main className='max-w-[1000px] mx-[auto] mt-10 p-10'>
        <div className='flex flex-col gap-4'>
          <img src={accommodation.img} className='w-full self-center max-w-[500px] rounded-lg' />
          <p className='font-[500]'> { accommodation.name } </p>
          <p> { accommodation.description } </p>
        </div>

        <div className='white mt-[3rem]'>
            <div>
              <h2 className='text-xl text-[#00000081] font-bold mb-2'> Feedbacks </h2>
            </div>

            <form className='flex bg-[#ffffff69] rounded-md text-[#00000071] px-10 py-4 flex-col my-4 gap-3' method="POST" onSubmit={handleForm}>

              <h2 className='font-bold my-3'> Adicionar novo feedback </h2>

              <input type="text" className="px-2 py-2 rounded-md border-none outline-none" required name="title" id="title" placeholder='Sobre' />
              <textArea  className="px-2 py-2 border-none rounded-md" required name="about" id="about" placeholder='Assunto'/>

              <input className="bg-[#ee6a6a] rounded-md text-white font-bold hover:bg-[#d45f5f] py-3" type="submit" />

            </form>

          
            { Array.isArray(accommodation.feedbacks) &&
              accommodation.feedbacks.map((feedback) => {
                return (
                  <Feedback 
                  key={feedback.id}
                  title={feedback.title}
                  about={feedback.about}
                  />
                )
              }) }

              <div className='feedbackNotification '>
                  <p>Feedback enviado com sucesso!</p>
                 </div>

          

        </div>
      </main>
    </>
  )
}
 
export default Accommodation
