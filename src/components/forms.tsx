import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { PiCloudArrowUp } from "react-icons/pi";

type FormsProps = {
  onSubmit?: () => void;
  onAddRequest: (request: {
    nome: string;
    categoria: string;
    valor: number;
    receipt: File | null;
  }) => void;
};

const Forms = ({ onSubmit, onAddRequest }: FormsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    if (!nome || !categoria || !valor || !file) {
      alert("Preencha todos os campos!");
      return;
    }

    onAddRequest({
      nome,
      categoria,
      valor: parseFloat(valor),
      receipt: file,
    });

    // limpa os campos
    setNome("");
    setCategoria("");
    setValor("");
    setFile(null);
    setFileName("");

    if (onSubmit) onSubmit();
  };

  return (
    <div className="w-100 h-110 md:w-130 md:h-128 lg:w-130 lg:h-128 bg-[#F9FBFA] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
      <header className="w-[80%] rounded-2xl bg-white flex gap-1.5 flex-col">
        <h1 className="text-[18px] md:text-[20px] font-bold text-[#1F2523] mt-6">
          Nova solicitação de reembolso
        </h1>
        <p className="text-[14px] md:text-[14px] text-[#4D5C57]">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <div className="w-[80%] mt-9 flex flex-col gap-1.5">
        <label className="text-[10px] text-[#4D5C57]">NOME DA SOLICITAÇÃO</label>
        <Input
          placeholder="Ex: Elias"
          value={nome}
          onChange={(e: any) => setNome(e.target.value)}
          className="w-[100%] rounded-[8px] md:w-[410px] lg:w-[414px]"
        />
      </div>

      <div className="w-[80%] mt-4 flex flex-row gap-3">
        <div className="w-[200px] md:w-[262px] flex flex-col gap-1.5">
          <label className="text-[10px] text-[#4D5C57]">CATEGORIA</label>
          <select
            className="w-[200px] md:w-[262px] h-[48px] rounded-md border border-gray-300 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8459] appearance-none"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="Alimentação">Alimentação</option>
            <option value="Transporte">Transporte</option>
            <option value="Hospedagem">Hospedagem</option>
            <option value="Serviços">Serviços</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5 w-[108px] md:w-[128px]">
          <label className="text-[10px] text-[#4D5C57]">VALOR</label>
            <Input
              placeholder="0,00"
              value={valor}
              type="text"
              onChange={(e: any) => {
                let input = e.target.value

                // Remove tudo que não for número
                input = input.replace(/\D/g, "")

                // Se tiver algo digitado, formata como centavos
                if (input.length > 0) {
                  input = (Number(input) / 100).toFixed(2)
                  input = input.replace(".", ",") // troca o ponto pela vírgula
                }

                setValor(input)
              }}
              className="w-[108px] md:w-[138px] h-[48px] rounded-[8px] lg:w-[140px]"
            />
        </div>
      </div>

      <div className="w-[80%] mt-4 flex flex-col gap-1.5">
        <label className="text-[10px] text-[#4D5C57]">COMPROVANTE</label>
        <div className="flex flex-row relative">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <Input
            type="text"
            value={fileName || ""}
            placeholder="Adicionar arquivo.pdf"
            disabled
            className="w-[88%] md:w-[375px] h-[48px] rounded-l-[8px] rounded-r-[0px]"
          />
          <Button
            onForms={handleUploadClick}
            className="w-[48px] h-[48px] absolute right-0 flex justify-center items-center"
            icon={<PiCloudArrowUp size={26} />}
          />
        </div>
      </div>

      <Button
        className="w-[80%] mt-4"
        title="Enviar"
        onForms={handleSubmit}
      />

    </div>
  );
};

export default Forms;
