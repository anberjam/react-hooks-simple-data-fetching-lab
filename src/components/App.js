// create your App component here
import React, {useState, useEffect} from "react"

function App () {
    const [message , setMessage] = useState("")
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(dogPic =>  {
            setMessage (dogPic.message)
            setLoad(true)
        })
    },[])

    if (load == false) { return <p>Loading...</p>}

    return (
        <img src={message} alt= "A Random Dog" />
    )
}

export default App

