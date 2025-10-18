import './App.css'
import Button from './components/Button.tsx'


function App() {
  
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center' >
        <header className='w-[90%] h-[48px] flex justify-between items-center rounded-[8px]'>
          <div className='gap-2 flex items-center'>
            <span className="material-symbols-outlined">
              redo
            </span>
            <span>
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
