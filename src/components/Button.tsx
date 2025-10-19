type Props = {
  title: string
}

const Button = ({ title }: Props) => {
  return (
    <button className='bg-[#1F8459] font-bold text-white w-[155px] h-[48px] rounded-[8px] hover:bg-[#2ac884d1]'>
      {title}
    </button>
  )
}

export default Button