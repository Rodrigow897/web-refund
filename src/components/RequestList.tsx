import RequestItem from "./RequestItem";


export default function RequestList() {
  const solicitacoes = [
    { nome: "Rodrigo", categoria: "Alimentação", valor: 34.78 },
    { nome: "Tamires", categoria: "Hospedagem", valor: 1200.00 },
    { nome: "Lara", categoria: "Alimentação", valor: 12.35 },
    { nome: "Elias", categoria: "Transporte", valor: 47.65 },
    { nome: "Thiago", categoria: "Serviços", valor: 99.90 },
    { nome: "Vinicius", categoria: "Outros", valor: 25.89 },
  ];

  return (
    <div className="flex justify-center items-center mt-5">
    <div className="rounded-xl w-[100%] mx-1.5">
      <div className="flex flex-col divide-y divide-gray-100">
        {solicitacoes.map((item, i) => (
          <RequestItem key={i} {...item} />
        ))}
      </div>
    </div>
    </div>
  );
}
