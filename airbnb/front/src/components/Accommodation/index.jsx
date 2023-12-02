export default function Accommodation(props) {
    return(
    <a href={`/${props.url}/accommodation`}>
        <img className='w-full max-w-[300px] rounded-[15px] max-h-[170px] mb-[1rem]' src={`${props.img}`} />
        <p className='text-[#000000a4] text-[.8rem] '> Feedback(s): { props.feedback } </p>
        <p className='font-[500] text-[#000000e5]'> {props.name} </p>
    </a>
    )
}'  '