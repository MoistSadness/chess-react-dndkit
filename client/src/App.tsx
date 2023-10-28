import Navbar from './components/navbar/Navbar'
import Chess from './components/chess/Chess'

export default function App() {
  return (
    <body className='bg-dark text-white w-screen h-screen'>
      <div className='flex flex-col'>
        <Navbar />
        <div className='flex justify-center items-center'>
          <Chess />
        </div>
      </div>
    </body>
  )
}