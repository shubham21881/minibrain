import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { removefrompastes} from "../Features/Pastes/PasteSlice"
import toast from 'react-hot-toast';
import { FormatDate } from '../utlis/formardate';


function Paste() {
   const paste =useSelector((state)=>state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const dispatch= useDispatch()
   
  const filterdata=paste.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()))
   
  //  console.log(paste);

  const handleDelete =(id)=>{
     dispatch(removefrompastes(id))
  }

  const sharePaste = (paste) => {
    if (navigator.share) {
      navigator
        .share({
          title: paste.title || "Untitled Paste",
          text: paste.content || "Check out this paste!",
          url: `${window.location.origin}/pastes/?pasteId=${paste._id}`,
        })
        .then(() => console.log("Paste shared successfully"))
        .catch((err) => console.error("Error sharing paste:", err));
    } else {
      alert("Sharing is not supported on your browser. Please copy the link manually.");
    }
  };
  

   
  return (
    <div className='text-white overflow-auto'>
      <div><h1>ALL pastes</h1></div>
      <input 
      className=' bg-[#0f0f0f] border-white border-1 w-[80%] p-2 rounded-2xl m-2' 
      type="text" 
      placeholder='Search paste here...'
      value={searchTerm}  // Bind the input to searchTerm state
      onChange={(e)=>setSearchTerm(e.target.value)}// Update searchTerm on input change
      />
      <div  className='p-16 border-2 border-black'>
        { filterdata.length >=0 ?(
          filterdata.map((paste)=>(
            <ul key={paste._id}>
            {
              <li className='border-2 border-white p-7 over text-white flex flex-row justify-between' >
                <div className='flex flex-col p-4  gap-3'>
                <h1 >{paste.title}</h1> 
                <p>{paste.content}</p>
                </div>
                <div >
                  <ul className='flex flex-row p-4 gap-4'>
                    <button>
                       <a href={`/?pasteId=${paste?._id}`}><li><FaRegEdit /></li></a>
                      
                      </button>
                   <button onClick={()=>handleDelete(paste._id)}  > <li><MdDelete /></li></button>
                    <button onClick={()=>sharePaste(paste)}><li><IoMdDownload /></li> </button>
                   <button>  
                    
                     <a href={`/pastes/${paste?._id}`}><li><FaEye /></li></a>
                    </button>
                    <button onClick={()=>{
                      navigator.clipboard.writeText(paste.content)
                       toast.success("copy to clipboard")
                      }}> <li><IoCopy /></li></button>
                    
                  </ul>
                  <p>{ FormatDate(paste.createdAt)}</p>
                </div>
              
              </li>
              
            }
            </ul>
          ))):( 
            
              <div className='text-2xl text-center w-full text-chileanFire-500'>
                No data found
              </div>
          )

        }

      </div>

 

      
    </div>
  )
}

export default Paste