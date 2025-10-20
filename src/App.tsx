import './App.css'
import Button from './components/Button.tsx'
import Input from './components/Input.tsx'
import RequestList from './components/RequestList.tsx'
import Pagination from './components/Pagination.tsx'




function App() {
  
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
                />
              </div>
          </div>
        </header>

        <section className='flex flex-col p-6 w-[80%] h-[700px] bg-[#F9FBFA] rounded-2xl mt-[30px] gap-6'>
            <h1 className='text-[20px] lg:text-[24px] text-[#1F2523] font-bold'>Solicitações</h1>
            <div className='flex flex-row w-[100%] gap-2.5'>
              <Input/>
              <Button className='w-[48px] h-[48px]'
                title=''
              />
            </div>
            
            {/*linha transparentezinha */}
            <div className='w-[90%] h-[1px] bg-[#abadacaa] self-center'></div>

            <RequestList />

             {/* Paginação */}
            <Pagination totalItems={15} itemsPerPage={5} />
        </section>
      </div>
    </>
  )
}

export default App
