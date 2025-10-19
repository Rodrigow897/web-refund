import './App.css'
import Button from './components/Button.tsx'
import Input from './components/Input.tsx'


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
                <Button/>
              </div>
          </div>
        </header>

        <section className='flex flex-col p-6 w-[95%] h-[584px] bg-[#F9FBFA] rounded-2xl mt-[30px] gap-6'>
            <h1 className='text-[20px] lg:text-[24px] text-[#1F2523] font-bold'>Solicitações</h1>
            <Input/>
        </section>
      </div>
    </>
  )
}

export default App
