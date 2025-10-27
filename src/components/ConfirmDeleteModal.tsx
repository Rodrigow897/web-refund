import Button from "./Button";

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ConfirmDeleteModal({ onCancel, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 bg-[#7877777b] backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-semibold text-[#1F2523]">Excluir solicitação</h2>
        <p className="text-gray-600 mt-2">
          Tem certeza que deseja excluir essa solicitação? Essa ação é irreversível.
        </p>

        <div className="flex justify-end mt-6">
          <Button
            title="Cancelar"
            onForms={onCancel}
            className="bg-[white] text-[#1F8459] font-semibold hover:underline hover:bg-white hover:text-[#5cb58e]"
          />
          
          <Button
            onForms={onConfirm}
            title="Confirmar"
            className="hover:bg-[#2ac884d1] transition-colors
 font-semibold px-5 py-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
