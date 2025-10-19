import { CircleDollarSign, CarFront, BedDouble, Wrench, Utensils } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  Alimentação: Utensils,
  Transporte: CarFront,
  Hospedagem: BedDouble,
  Serviços: Wrench,
  Outros: CircleDollarSign,
};

interface RequestItemProps {
  nome: string;
  categoria: string;
  valor: number;
}

export default function RequestItem({ nome, categoria, valor }: RequestItemProps) {
  const Icon = icons[categoria] || CircleDollarSign;

  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none w-[100%]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#E7F5EE] rounded-full flex items-center justify-center text-[#1F8459]">
          <Icon size={20} />
        </div>
        <div>
          <p className="font-semibold text-[#1F2523]">{nome}</p>
          <p className="text-sm text-gray-500">{categoria}</p>
        </div>
      </div>
      <span className="font-medium text-[#1F2523]">
        R$ {valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </span>
    </div>
  );
}
