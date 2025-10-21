import Input from "./Input"

const forms = () => {
  return (
    <div className="w-100 h-98 md:w-130 md:h-128 lg:w-130 lg:h-128 bg-[#F9FBFA] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
      <header className="w-[80%] rounded-2xl bg-white flex gap-1.5 flex-col">
        <h1 className="text-[18px] md:text-[20px] font-bold text-[#1F2523] mt-6">Nova Solicitação de reembolso</h1>
        <p className="text-[14px] md:text-[14px] text-[#4D5C57]">Dados da despesa para solicitar reembolso. </p>
      </header>

      <div className="w-[80%] mt-9 flex flex-col gap-1.5">
        <label htmlFor="" className="text-[10px]">NOME DA SOLICITAÇÃO</label>
        <Input />
      </div>
    </div>
  )
}

export default forms
