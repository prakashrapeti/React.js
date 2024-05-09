// import { useState , useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const {data : blogs , isPending , error} = useFetch('http://localhost:8000/posts')
   
    //   ([{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id:3} 
    // ]);
    // const [name,setName] = useState('mario');
    
    // const handleDelete = (id) => {
    //     const newBlogs =  blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);

    
   
    //using statehook 
    // const [name, setName] = useState('prakash');
    // const [subscribe, setsubscribe] = useState('subscribe')
    // const handleClick =() => {
    //     setName('johnwick');
        // setsubscribe('subscribed');
        // console.log("hello, ninjas",e);
    
    // const handleClickAgain = (name,e) =>{
    //     console.log('hello ' +  name , e.target);
    // }
    return ( 
        <div className="home" >
            { error && <div>{ error }</div> }
            { isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs = {blogs} title = "ALL BLOGS"/* handleDelete = {handleDelete}*//>}
            {/* <button  onClick={() => setName('prakash') } >change Name</button>
            <p>{ name}</p> */}
            {/* {/* <BlogList blogs = { blogs.filter((blog) => blog.author === 'mario' ) } title = "Mario Blogs"  handleDelete={handleDelete} /> */}
          
          
            {/* <h2>Homepage</h2> */}
            {/* <p>{ name } is {subscribe}</p>
            <button onClick={handleClick}>click me</button> */}
            {/* <button onClick={(e)=> handleClickAgain('marioo',e)}>Click me again</button> */}
           
        </div>

        );
        
   }      
export default Home;