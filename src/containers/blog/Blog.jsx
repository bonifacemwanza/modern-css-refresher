import React from 'react'
import { Article } from '../../components'
import {blog01, blog02, blog03,blog04,blog05} from "./imports"
import "./blog.css"

const FeaturedBlog =    {
    id:1,
    image:blog01,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
};
const ArticlesData = [
 
    {
        id:1,
        image:blog02,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        id:2,
        image:blog04,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        id:3,
        image:blog03,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        id:4,
        image:blog05,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
]
const Blog = () => {
    
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog_heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
               <div className="gpt3__blog-container_groupA">
                 <Article imageUrl={FeaturedBlog.image} date={FeaturedBlog.date} text={FeaturedBlog.text} />
               </div>
               <div className="gpt3__blog-container_groupB">
                  {
                      ArticlesData.map(({id,image,date,text}) => (
                        <Article imageUrl={image} date={date} text={text} key={id}/>
                      ))
                  }
               </div>
            </div>
        </div>
    )
}

export default Blog
