import './App.css'
import FAQComponent from './FAQComponent';
import { questionAns } from "./utils/json-object";

function App() {

  return (
    <div className='min-h-screen bg-gray-50 px-4'>
      <h2 className='text-center mt-8 text-3xl font-semibold'>FAQ Asked Questions</h2>
      <div className='flex flex-col max-w-2xl w-full mx-auto gap-3 mt-6'>
        {
          questionAns.map((ele, index) => <FAQComponent item={ele} key={index} index={index} />)
        }
      </div>
    </div>
  )
}

export default App
