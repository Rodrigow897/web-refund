import { useEffect, useState } from "react";
import RequestItem from "./RequestItem";
import axios from "axios";

// Tipo baseado no que a API retorna
type SolicitacaoAPI = {
  id: number;
  name: string;
  categories_id: number;
  value: string;
  receipt_path: string;
  status_id: number;
  created_at: string;
};

// Tipo que o componente RequestItem espera
type Solicitacao = {
  id: number;
  name: string;
  categoria: string;
  valor: number;
};

// Mapeamento de IDs de categoria para nomes
const categoriaMap: Record<number, string> = {
  1: "Alimentação",
  2: "Transporte",
  3: "Hospedagem",
  4: "Serviços",
  5: "Outros",
};

type Props = {
  data?: Solicitacao[];
  onClick?: (request: Solicitacao) => void;
};

export default function RequestList({ data, onClick }: Props) {
  const [requests, setRequests] = useState<Solicitacao[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sempre busca da API
    axios
      .get<SolicitacaoAPI[]>("http://localhost:3000/requests")
      .then((response) => {
        console.log(response.data);

        // Converter dados da API para o formato esperado
        const formattedRequests: Solicitacao[] = response.data.map((item) => ({
          id: item.id,
          name: item.name,
          categoria: categoriaMap[item.categories_id] || "Outros",
          valor: parseFloat(item.value),
        }));

        setRequests(formattedRequests);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar solicitações:", error);
        setIsLoading(false);
      });
  }, []);

  // Usar prop data se fornecida E não estiver vazia, senão usar dados da API
  const displayData = data !== undefined && data.length > 0 ? data : requests;

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (displayData.length === 0) {
    return <div>Nenhuma solicitação encontrada</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="rounded-xl w-[100%] mx-1.5">
        <div className="flex flex-col divide-y divide-gray-100">
          {displayData.map((item) => (
            <div key={item.id} onClick={() => onClick?.(item)}>
              <RequestItem
                name={item.name}
                categoria={item.categoria}
                valor={item.valor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
