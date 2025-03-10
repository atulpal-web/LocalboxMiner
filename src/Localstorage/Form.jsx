import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import {v4 as uuidv4} from 'uuid'
import CardUi from "./CardUi";

const Form = () => {

    const [blogs,setblog] = useState([])
    const { register, handleSubmit, reset } = useForm()

    const [blog_id, setblogId]=useState(null)

    function blogInfo(data) {
      if(blog_id===null){
        const newblog = {
            ...data,
            id:uuidv4()
        }
        setblog([...blogs,newblog])
        reset()
    }else {
        // const arr = [12,3,4];
        // arr[1] =5

        // find index based on any key like id 

        const index = blogs.findIndex((blog)=> {
            return blog.id === blog_id
        })
        alert(index)

        /// clone / copy arr
        const newblog = [...
            blogs]
        newblog[index]= data
        console.log('newblog:',newblog);
        setblog(newblog)
    }

    }
    useEffect (() =>
    {
        if(blogs.length > 0){
        localStorage.setItem('blogList',JSON.stringify(blogs))
        }
    },[blogs])


    useEffect(() => {
        const blogList = JSON.parse(localStorage.getItem('blogList'))
         console.log("blogList......",blogList)

        if(blogList){
          setblog(blogList)
        }
    },[])
  
    function trash(id) {
      if (confirm("do youn want to delete this blog")){
        const filterData = blogs.filter((blog)=>{
            // console.log(blog.id!==id)
            return blog.id!==id
           })
           console.log(filterData)
           setblog(filterData)
      }
    }

    function update(id){
        alert(id)
        setblogId(id)

     const singleblog = blogs.find((blog)=>{
        return blog.id===id
     })
     console.log("singleblog")
     reset(singleblog)
    }
   console.log("blog_id.............")
   console.log(blog_id)



    return (
        <>

            <form className="col-lg-6 mx-auto my-5 p-5 bg-light rounded" onSubmit={handleSubmit(blogInfo)}>
                <div className="mt-4">
                    <select className="form-control" {...register('blog_cat')}>
                        <option value="">--- blog category---</option>
                        <option value="Food blogs">Food blogs</option>
                        <option value="Traveling blogs">Traveling blogs</option>
                        <option value="Fashion blogs ">Fashion blogs</option>
                        <option value="Travel blogs ">Travel blogs</option>


                    </select>
                    <div className="mt-4">
                        <input type="text"{...register('blog_name')} className="form-control" placeholder="Enter blog name " />
                    </div>
                    
                     <div className="mt-4">
                        <input type="text"{...register('blog_author')} className="form-control" placeholder="Enter blog Author  " />
                    </div>

                    <div className="mt-4">
                        <input type="text"{...register('blog_description')} className="form-control" placeholder="Enter blog Description " />
                    </div>
                    
                    <div className="mt-4">
                        {
                            blog_id === null ?
                        <button className="btn btn-outline-danger">submit</button>
                        :    
                        <button className="btn btn-outline-warning">update</button>

                        }
                    </div>
                </div>
            </form>

            <div className="container"> 
                <div className="row">
                    {
                        blogs && blogs.map((blog)=>{
                            return(
                                <div className="col-lg-4 mt-4">
                                <CardUi category={blog.blog_cat} name={blog.blog_name} author={blog.blog_author} description={blog.blog_description} trash={()=>trash
                                    (blog.id)} update={()=>update(blog.id)}/>
                               
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}


const arr = [12,3,46,5];
const filterData = arr.filter((ele)=>ele>=5)
console.log(arr)
console.log(filterData)
const exactvalue = arr.filter((ele)=> ele ===46)
console.log(exactvalue)

const onlyOne = arr.filter((ele)=> ele !== 46)
console.log(onlyOne)

export default Form