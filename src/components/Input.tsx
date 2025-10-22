import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
  placeholder?: string
  disabled?: boolean
  type?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({className, placeholder, type, value, onChange, disabled}: Props) => {
  return (
    <input value={value} onChange={onChange} type={type} disabled={disabled} placeholder={placeholder} className={twMerge('border-[1px] p-2.5 border-gray-300 w-[300px] lg:w-[95%] md:w-[90%] h-12 placeholder-gray-400 rounded-2xl outline-none', className)} >
        
    </input>
  )
}

export default Input
