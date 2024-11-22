import  { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtopastes, updatepastes } from "../Features/Pastes/PasteSlice";
import { useSearchParams } from "react-router-dom";


function Home() {

  const [title,settitle]=useState('') 
 const [value, setvalue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams(); // Destructure useSearchParams

 const PasteId = searchParams.get("pasteId"); // Get pasteId from the search params
 const allpaste=useSelector((state)=> state.paste.pastes)
 
 const dispatch=useDispatch()

  const createpaste=()=>{
    const paste={
      title:title,
      content:value,
      _id:PasteId|| Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),

    }
      if(PasteId){
        dispatch(updatepastes(paste))
      }else{
        dispatch(addtopastes(paste))
      }
     
      settitle("")
      setvalue("")

  }


// useEffect(() => {
  
//  if (PasteId){
//   const paste= allpaste.find((p)=>{
//        p._id===PasteId;
//        settitle(paste.title)
//        setvalue(paste.content)
//   })
//  }  

  
  
// }, [PasteId])



useEffect(() => {
  if (PasteId) {
    const paste = allpaste.find((p) => p._id === PasteId); // Ensure find returns a match
    if (paste) {
      settitle(paste.title);
      setvalue(paste.content);
    }
    
  }
}, [PasteId, allpaste]); // Add allpaste as a dependency





  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <input
          type="text"
          placeholder="title"
          className="p-1 m-4 w-[80%] rounded-2xl pl-4 bg-[#0f0f0f] text-white"
          value={title}
          onChange={(e)=>{settitle(e.target.value)}}
        />
        <button onClick={createpaste} className="p-1 m-4 w-[20%] rounded-2xl pl-4 bg-[#C2FFC7]">
          {
            PasteId ?"update my paste  ":" create my paste"
          }

        </button>
      </div>
      <div className="flex m-5 ">
        <textarea 
        rows={15}
        placeholder="Write Your Content Here...."
         cols={50} 
         className="w-[80%] rounded-2xl p-3  focus-visible:ring-0 bg-[#0f0f0f] text-white" 
         value={value}
         onChange={(e)=>{setvalue(e.target.value)}}
         style={{
          caretColor: "#000",
        }}
         />
          

        
      </div>
    </div>
  );
}

export default Home;
