import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config"
import { Appbar } from "./Appbar"
import axios from "axios"

export const Publish = () => {
    const[title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar/>
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
                <input  onChange={(e) => {
                    setTitle(e.target.value);
                }} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />
                <Texteditor onChange={(e) =>{
                    setDescription(e.target.value);
                }} />
                <button onClick={ async ()=>{
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    }, {
                        headers:{
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} 
                type="submit" className=" mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
       
    </div>
}
function Texteditor({onChange} : {onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void }){
    return <form>
   <div className="w-full mb-4 mt-2">
       <div className="flex items-center justify-between border ">
       <div className=" py-2 bg-white rounded-b-lg w-full  ">
           <label  className="sr-only">Publish post</label>
           <textarea onChange= {onChange} id="editor"  rows ={8} className="block w-full  px-0 text-sm text-gray-800 bg-white border-0" placeholder="Write an article..." required ></textarea>
       </div>
   </div>
   
   </div>
</form>

}