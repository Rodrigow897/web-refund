import { FiCheckCircle } from 'react-icons/fi';
import Button from './Button';

type Props = {
  onClose?: () => void
}

const done = ({onClose}: Props) => {
  return (
    <div className="fixed inset-0 bg-[#7877777b] backdrop-blur-xs z-40" onClick={onClose}>
        <div  onClick={(e) => e.stopPropagation()} className="w-100 h-100 md:w-130 md:h-128 lg:w-130 lg:h-115 bg-[#F9FBFA] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
            <div className="flex flex-col items-center mt-10 gap-10">
                <h1 className="text-[20px] md:text-[24px] font-bold text-[#1F8459]">Solicitação enviada!</h1>
                <FiCheckCircle size={91} color="#1F8459" />
                <p className="text-[14px] md:text-[17px] flex items-center justify-center text-center text-[#4D5C57] w-[80%]">Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em contato com você.</p>
            </div>
            <div className="w-[80%] mt-8 lg:mt-[50px] flex flex-col">
                <Button
                onForms={onClose}
                title="Nova Solicitação"
                className="bg-[#1F8459] font-bold text-white w-[100%] h-[48px] rounded-[8px] hover:bg-[#2ac884d1]"
                />
            </div>
        </div>
    </div>
  )
}

export default done
