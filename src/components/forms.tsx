import Button from "./Button"
import Input from "./Input"

const forms = () => {
  return (
    <div className="w-100 h-98 md:w-130 md:h-128 lg:w-130 lg:h-128 bg-[#F9FBFA] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
      <header className="w-[80%] rounded-2xl bg-white flex gap-1.5 flex-col">
        <h1 className="text-[18px] md:text-[20px] font-bold text-[#1F2523] mt-6">Nova solicitação de reembolso</h1>
        <p className="text-[14px] md:text-[14px] text-[#4D5C57]">Dados da despesa para solicitar reembolso. </p>
      </header>

      <div className="w-[80%] mt-9 flex flex-col gap-1.5">
        <label htmlFor="" className="text-[10px] text-[#4D5C57]">NOME DA SOLICITAÇÃO</label>
        <Input placeholder="Pesquisar pelo nome" className="w-[100%] rounded-[8px]" />
      </div>

      {/*input Categoria */}
      <div className="w-[80%] mt-4 flex flex-row gap-3">

        <div className="w-[200px] md:w-[262px] flex flex-col gap-1.5">
          <label htmlFor="" className="text-[10px] text-[#4D5C57]">CATEGORIA</label>
          <select className="w-[200px] md:w-[262px] h-[48px] rounded-md border border-gray-300 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8459] appearance-none">
            <option disabled selected value="">Selecione</option>
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="hospedagem">Hospedagem</option>
            <option value="servicos">Serviços</option>
            <option value="outros">Outros</option>
          </select>
        </div> 

          <div className="flex flex-col gap-1.5 w-[108px] md:w-[128px]">
            <label className="text-[10px] text-[#4D5C57]" htmlFor="">VALOR</label>
            <Input placeholder="0,00" className="w-[108px] h-[48px] rounded-[8px]" />
          </div>
      </div>

        <div className="w-[80%] mt-4 flex flex-col gap-1.5">
          <label htmlFor="" className="text-[10px] text-[#4D5C57]">COMPROVANTE</label>
          <div className="flex flex-row">
            <Input placeholder="Adicionar arquivo.pdf" className="w-[88%] md:w-[432px] h-[48px] rounded-l-[8px] rounded-r-[0px]" />
            <Button title="" className="w-[48px] h-[48px] absolute right-10" />
          </div>
        </div>
    </div>
  )
}

export default forms
