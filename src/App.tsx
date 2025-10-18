import './App.css'
import Button from './components/Button.tsx'


function App() {
  
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center' >
        <header>
          <div className='gap-2 flex items-center'>
            <span className="material-symbols-outlined text-[#1F8459]">
              redo
            </span>
            <span className='text-[#1F8459] text-2xl font-semibold'>
              refund
            </span>
          </div>
          
          <div className='gap-10 flex items-center'> 
            <span className='text-[#1F8459] font-semibold'>
              Solicitações de reembolso
            </span>
              <div>
                <Button/>
              </div>
          </div>
        </header>
        </div>
    </>
  )
}

export default App
