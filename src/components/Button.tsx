import { twMerge } from "tailwind-merge"

type Props = {
  title: string
  className?: string
}

const Button = ({ title, className }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-[#1F8459] font-bold text-white w-[155px] h-[48px] rounded-[8px] hover:bg-[#2ac884d1]",
        className
      )}
    >
      {title}
    </button>
  )
}

export default Button
