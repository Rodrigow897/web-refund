import { twMerge } from "tailwind-merge"


type Props = {
  title?: string
  className?: string
  onForms?: () => void
  icon?: React.ReactNode
}

const Button = ({ title, className, icon, onForms }: Props) => {
  return (
    <button
      onClick={onForms}
      className={twMerge(
        "bg-[#1F8459] font-bold text-white w-[155px] h-[48px] rounded-[8px] hover:bg-[#2ac884d1]",
        className
      )}
    >
      {icon}
      {title}
    </button>
  )
}

export default Button
