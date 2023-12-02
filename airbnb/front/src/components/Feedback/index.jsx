import { User } from 'phosphor-react'

export default function Feedback(props) {
    return(
        <div className='bg-[#ffffff69] pt-7 px-10 pb-5 rounded-md'>
        <div className='flex gap-2 items-center'>
          <span> <User size={32} /> </span>
          <p className='font-[500]'> Anonimo </p>
       </div>
       <div>
        <h3 className='mt-5 mb-2 font-[500]'> { props.title } </h3>
        <p> { props.about } </p>
       </div>
      </div>
    )
}