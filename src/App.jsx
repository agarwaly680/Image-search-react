import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import BreadCrumb from "./components/BreadCrumb"
import Images from "./components/Images"
import { useState } from "react"
import { getImages } from "./services/api"


function App() {
  const [data, setData] = useState([])
  const [text,setText]=useState('')
  const [count, setCount] = useState(3)

  useEffect(()=>{
    
    if(count < 3 || count > 200) return;

    const getData = async ()=>{
     const res = await getImages(text,count)
     setData(res.data.hits)
    }
    getData()
  },[text,count])

 return (
  <div>
    <Navbar />
    <BreadCrumb setText={setText} setCount={setCount}/>
    <Images imgdata={data}/>
  </div>
 )
}

export default App
