import axios from "axios"
import { useState } from "react"

export default function Blog(){
    const [formdata, setformdata] = useState({
        name:"",
        image : "",
        discription:"",
        Username:""
    })

    function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:4000/api/blogs/add", formdata)
        .then((response)=>{console.log(response.data)})
        .catch(e=>{console.log(e)})
    }


    return(
        <div className="py-25  h-screen ">
            <div className="flex flex-col items-center  py-20 ">
            <div className="md:w-[50vw] sm:w-[40vw] w-[80vw]  rounded-3xl p-5 shadow-gray-400 shadow-2xl">
                <form action="" className="flex flex-col gap-10 " onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" className="border rounded-xl px-4 py-1"  onChange={(e)=>{setformdata({...formdata, name:e.target.value})}}/>
                    <input type="url" placeholder="Uplode your image"  className="border rounded-xl px-4 py-1" onChange={(e)=>{setformdata({...formdata, image:e.target.value})}}/>
                    <textarea className="border  p-2" type="text"  placeholder="Type discription"onChange={(e)=>{setformdata({...formdata, discription:e.target.value})}} />
                    <input type="text" placeholder="Username"  className="border rounded-xl px-4 py-1"  onChange={(e)=>{setformdata({...formdata, Username:e.target.value})}}/>
                    <button type="submit" className="bg-blue-400 w-[10rem] rounded-full" >Add</button>
                </form>
            </div>
        </div>
        </div>
    )
}