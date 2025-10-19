import './App.css'
import Button from './components/Button.tsx'
import Input from './components/Input.tsx'


function App() {
  
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center' >
        <header className='flex-col lg:flex-row'>
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

        <section className='gap-6'>
            <h1 className='text-[20px] lg:text-[24px] text-[#1F2523] font-bold'>Solicitações</h1>
            <Input/>
        </section>
      </div>
    </>
  )
}

export default App
