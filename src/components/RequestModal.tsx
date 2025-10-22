import Button from "./Button"
import { RiFilePaperLine } from 'react-icons/ri';

type Props = {
    name: string;
    category: string;
    amount: number;
    receipt: File | null;
    onClose: () => void;
    onDelete?: () => void;
}

const RequestModal = ({name, category, amount, receipt, onClose, onDelete}: Props) => {

  const handleOpenReceipt = () => {
    if (!receipt) {
      alert("Nenhum comprovante disponível!");
      return;
    }
    const fileURL = URL.createObjectURL(receipt);
    window.open(fileURL, "_blank");
  };
  
  return (
    <div className="fixed inset-0 bg-[#7877777b] backdrop-blur-xs z-40" onClick={onClose}>
      <div  onClick={(e) => e.stopPropagation()} className="w-100 h-110 md:w-130 md:h-128 lg:w-130 lg:h-128 bg-[#F9FBFA] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
        <header className="w-[80%] rounded-2xl bg-white flex gap-1.5 flex-col">
          <h1 className="text-[18px] md:text-[20px] font-bold text-[#1F2523] mt-6">Solicitação de reembolso</h1>
          <p className="text-[14px] md:text-[14px] text-[#4D5C57]">Dados da despesa para solicitar reembolso. </p>
        </header>

      <div className="w-[80%] mt-9 flex flex-col gap-1.5">
        <label htmlFor="" className="text-[10px] text-[#4D5C57]">NOME DA SOLICITAÇÃO</label>
        <div className="h-12 w-[100%] rounded-[8px] md:w-[410px] lg:w-[414px] px-3 border border-gray-300 flex items-center text-center">{name}</div>
      </div>

      {/*input Categoria */}
      <div className="w-[80%] mt-4 flex flex-row gap-3">

        <div className="w-[200px] md:w-[262px] flex flex-col gap-1.5" >
          <label htmlFor="" className="text-[10px] text-[#4D5C57]">CATEGORIA</label>
         <div className="w-[200px] md:w-[262px] h-[48px] rounded-md border border-gray-300 px-3 flex  items-center text-center">{category}</div>
        </div> 

          <div className="flex flex-col gap-1.5 w-[108px] md:w-[128px]">
            <label className="text-[10px] text-[#4D5C57]" htmlFor="">VALOR</label>
            <div className="w-[108px] md:w-[138px] h-[48px] rounded-[8px] lg:w-[140px] border border-gray-300 px-3 flex  items-center text-center">{amount}</div>
          </div>
      </div>

        <div className="w-[80%] mt-8 lg:mt-[50px] flex flex-col">
            <Button
              onForms={handleOpenReceipt}
              icon={<RiFilePaperLine size={20} />}
              title="Abrir Comprovante" className="flex justify-center items-center gap-1.5 hover:text-[#5cb58e] hover:bg-white w-[100%] bg-white text-[#1F8459] font-bold"/>
            <Button
              className="w-[100%]"
              title="Excluir"
              onForms={onDelete}
            />
        </div>
      </div>
    </div>
  )
}

export default RequestModal
