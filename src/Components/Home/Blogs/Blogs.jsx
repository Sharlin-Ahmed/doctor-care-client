import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import Wilson from '../../../images/person1.png'
import './Blogs.css'
const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eum aliquam sit quo officia voluptas impedit repellat illum consequuntur! Sequi!',
        author: 'Dr. Kim',
        aurhorImg: Wilson,
        date: '23 April 2021',
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eum aliquam sit quo officia voluptas impedit repellat illum consequuntur! Sequi!',
        author: 'Dr. Shinthia',
        aurhorImg: Wilson,
        date: '24 May 2021',
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eum aliquam sit quo officia voluptas impedit repellat illum consequuntur! Sequi!',
        author: 'Dr. Smith',
        aurhorImg: Wilson,
        date: '05 Aug 2021',
    },
]
const Blogs = () => {
    return (
            <section className="blogs my-5" id='blog'>
                <div className="container">
                    <div className="section-header text-center">
                        <h5 className="text-primary text-uppercase">Our Blog</h5>
                        <h1>From Our Blog News</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="d-flex justify-content-center">
                            {
                                blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Blogs;