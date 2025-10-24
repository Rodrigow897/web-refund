import './App.css'
import Button from './components/Button.tsx'
import Input from './components/Input.tsx'
import RequestList from './components/RequestList.tsx'
import Pagination from './components/Pagination.tsx'
import { useState } from 'react'
import Forms from './components/forms.tsx'
import RequestModal from './components/RequestModal.tsx'
import { BiSearchAlt } from 'react-icons/bi';
import ConfirmDeleteModal from './components/ConfirmDeleteModal.tsx'
import Done from './components/done.tsx'

type Solicitacao = {
  id: string
  nome: string
  categoria: string
  valor: number
  receipt: File | null
}

function App() {
  const [newRequest, setNewRequest] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState<Solicitacao | null>(null)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [done, setDone] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const [requests, setRequests] = useState<Solicitacao[]>([])
  const [searchTerm, setSearchTerm] = useState("") // <-- estado da busca

  //Função de busca
  const filteredRequests = requests.filter((req) =>
    req.nome.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentRequests = filteredRequests.slice(startIndex, endIndex)

  const handleDeleteRequest = (id: string) => {
    setRequests((prevRequests) => prevRequests.filter((request) => request.id !== id))
    setOpenModal(false)
  }

  const handleAddRequest = (newRequestData: {
    nome: string
    categoria: string
    valor: number
    receipt: File | null
  }) => {
    const newRequest = {
      id: crypto.randomUUID(),
      ...newRequestData,
    }

    setRequests((prev) => [...prev, newRequest])
  }

  // Função chamada ao clicar no botão de busca (aqui ela só garante resetar a página)
  const handleSearch = () => {
    setCurrentPage(1)
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center'>
        <header className='flex flex-col lg:flex-row justify-between items-center mt-10 w-[90%]'>
          <div className='gap-2 flex items-center'>
            <span className="material-symbols-outlined text-[#1F8459]">
              redo
            </span>
            <span className='text-[#1F8459] text-2xl font-semibold'>
              refund
            </span>
          </div>

          <div className='gap-5 flex items-center'>
            <span className='text-[#1F8459] font-semibold'>
              Solicitações de reembolso
            </span>
            <div>
              <Button
                title='Nova solicitação'
                onForms={() => setNewRequest(!newRequest)}
              />
            </div>
          </div>
        </header>

        {newRequest ? (
          <Forms
            onSubmit={() => {
              setNewRequest(false)
              setDone(true)
              setTimeout(() => setDone(false), 5000)
            }}
            onAddRequest={handleAddRequest}
          />
        ) : done ? (
          <Done
            onClose={() => setDone(false)}
            onNewRequest={() => setNewRequest(true)}
          />
        ) : (
          <section className='flex flex-col p-6 w-[80%] h-[700px] bg-[#F9FBFA] rounded-2xl mt-[30px] gap-6'>
            <h1 className='text-[20px] lg:text-[24px] text-[#1F2523] font-bold'>Solicitações</h1>
            
            {/*Campo de busca */}
            <div className='flex flex-row w-[100%] gap-2.5'>
              <Input
                placeholder='Pesquisar pelo nome'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                icon={<BiSearchAlt size={26} />}
                className='w-[48px] h-[48px] flex justify-center items-center'
                title=''
                onForms={handleSearch}
              />
            </div>

            <div className='w-[90%] h-[1px] bg-[#abadac3c] self-center'></div>

            <RequestList
              data={currentRequests}
              onClick={(request) => {
                setSelectedRequest(request)
                setOpenModal(true)
              }}
            />

            <Pagination
              totalItems={filteredRequests.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </section>
        )}

        {openModal && selectedRequest && (
          <RequestModal
            name={selectedRequest.nome}
            category={selectedRequest.categoria}
            amount={selectedRequest.valor}
            receipt={selectedRequest.receipt}
            onClose={() => setOpenModal(false)}
            onDelete={() => setOpenDeleteModal(true)}
          />
        )}

        {openDeleteModal && (
          <ConfirmDeleteModal
            onCancel={() => setOpenDeleteModal(false)}
            onConfirm={() => {
              setOpenDeleteModal(false)
              handleDeleteRequest(selectedRequest!.id)
            }}
          />
        )}
      </div>
    </>
  )
}

export default App
