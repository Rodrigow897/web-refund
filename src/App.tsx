import './App.css'
import Button from './components/Button.tsx'
import Input from './components/Input.tsx'
import RequestList from './components/RequestList.tsx'
import Pagination from './components/Pagination.tsx'
import { useState } from 'react'
import Forms from './components/forms.tsx'
import RequestModal from './components/RequestModal.tsx'




function App() {
  const [newRequest, setNewRequest] = useState(false)
  const [openModal, setOpenModal] = useState(false)



  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center' >
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

         {/* Se "novaSolicitacao" for true, mostra o form,  Senão, mostra o section */}
        {newRequest ? (
          <Forms />
        ) : (
          <section className='flex flex-col p-6 w-[80%] h-[700px] bg-[#F9FBFA] rounded-2xl mt-[30px] gap-6'>
            <h1 className='text-[20px] lg:text-[24px] text-[#1F2523] font-bold'>Solicitações</h1>
            <div className='flex flex-row w-[100%] gap-2.5'>
              <Input
                placeholder='Pesquisar pelo nome'
              />
              <Button className='w-[48px] h-[48px]' title='' />
            </div>

            {/* linha transparente */}
            <div className='w-[90%] h-[1px] bg-[#abadac3c] self-center'></div>

            <RequestList
              onClick={() => setOpenModal(true)}
              data={[
                { id: "1", nome: "Rodrigo", categoria: "Alimentação", valor: 34.78, receipt: null },
                { id: "2", nome: "Tamires", categoria: "Hospedagem", valor: 1200.00, receipt: null },
                { id: "3",nome: "Lara", categoria: "Alimentação", valor: 12.35, receipt: null },
                { id: "4",nome: "Elias", categoria: "Transporte", valor: 47.65, receipt: null },
                { id: "5",nome: "Thiago", categoria: "Serviços", valor: 99.90, receipt: null },
                { id: "6",nome: "Vinicius", categoria: "Outros", valor: 25.89, receipt: null },
              ]}
            />
            <Pagination totalItems={15} itemsPerPage={5} />
          </section>  
        )}

        {openModal && (
          <RequestModal
            name="Rodrigo"
            category="Alimentação"
            amount={34.78}
            receipt={null}
            onClose={() => setOpenModal(false)}
          />
        )}
      </div>
    </>
  )
}

export default App
