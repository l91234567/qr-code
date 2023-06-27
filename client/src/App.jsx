import { useRef, useState } from 'react'
import parse from 'html-react-parser';
import './App.css'
import axios from 'axios'

function App() {

  const inputRef = useRef(null);
  const [imgSrc, setImgSrc] = useState('')

  const generateOnClick = ()=> {
    if (inputRef !== undefined) {

      const body = {text:inputRef.current.value}
      axios.post(`${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/qrcode`, body)
      .then(result => {

        const htmlString = result.data;
        const reactElement = parse(htmlString);
        setImgSrc(reactElement)
        inputRef.current.value = '';
      })
      .catch(err =>{console.log(err)})

    }
  }

  return (
    <>
    {imgSrc}
    <div className="flex space-x-4">

    <input type="text" placeholder="Enter text and Share!" className="input input-bordered w-full max-w-xs" ref={inputRef}/>
    <button className="btn" onClick={generateOnClick}>Generate</button>


    </div>

    </>
  )
}

export default App
