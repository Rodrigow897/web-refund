
import RequestItem from "./RequestItem";

type Solicitacao = {
  id: string;
  nome: string;
  categoria: string;
  valor: number;
  receipt: File | null;
};

type Props = {
  data: Solicitacao[];
  onClick?: (request: Solicitacao) => void;
};

export default function RequestList({ data, onClick }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-xl w-[100%] mx-1.5">
        <div className="flex flex-col divide-y divide-gray-100">
         {data.map((item) => (
            <div key={item.id} onClick={() => onClick?.(item)}>
              <RequestItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
