import { Link } from "react-router-dom";
interface BlogCardprops{
    authorName: string;
    title: string;
    content: string;
    publishDate: string;
    id: number;
}
export const Blogcard = ({
    id,
    authorName,
    title,
    content,
    publishDate
}: BlogCardprops) => {
    return <Link to={`/blog/${id}`}>
    <div className = "p-4 border-b border-slate-100 pb-5 w-screen max-w-screen-md cursor-pointer">
       
        <div className="flex">
            <div className ="flex">
                <Avatar name={authorName} />
            </div>
            <div className="flex justify-center flex-col text-sm font-extralight pl-2">
                {authorName}
            </div>
            <div className ="flex justify-center flex-col text-sm flex justify-center flex-col pl-2" >
                <Circle/>
                
            </div>
            <div className="flex justify-center flex-col text-sm pl-2 font-thin text-slate-500 ">
                {publishDate}
            </div>
        </div>
        <div className ="pt-2 text-xl font-bold">
            {title}
        </div>
        <div className="text-md font-thin pt-1">
            {content.length >100? content.slice(0,100) + "..." : content }
            
        </div>
        <div className ="text-slate-500 text-sm font thin pt-4">
            {`${Math.ceil(content.length)/100}minute(s) read`}
        </div>


    </div>
    </Link> 
}

export function Avatar({name,size= "small"}: {name:string , size?:"small" | "big"}){
    return  <div className={`relative inline-flex items-center justify-center ${size == "small"? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-600 rounded-full`}>
                <span className={` ${size == "small"? "text-xs" : "text-lg"}  font-extralight text-gray-300`}>{name[0]}</span>
            </div>
}

export function Circle(){
    return <div className = "h-1 w-1  bg-slate-400 "></div>

}

