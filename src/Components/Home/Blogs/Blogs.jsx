import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import client1 from '../../../images/bDr1.png'
import client2 from '../../../images/bDr2.jpg'
import client3 from '../../../images/bDr3.jpg'
import './Blogs.css'
const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'As dentists, we took a professional oath to care for our patients. We entered the profession with the ideological belief that we can and will make a difference in our patients lives. We are hopeful, eager and will go above […]',
        author: 'Dr. J k Hasan',
        aurhorImg: client1,
        date: '23 April 2021',
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'The natural color of our teeth is a shade of white, we should try our best to preserve it. Certain habits can stain our enamel and take away our pearly white teeth. No amount of brushing can help you get that white […]',
        author: 'Dr. Kibria Ahmed',
        aurhorImg: client2,
        date: '24 May 2021',
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Standard whitening trays can be bought from a local medical store. Trays are lined with special type of bleaching gel which helps brighten the color of your teeth. Often these trays are supposed to be worn for an hour every day, […]',
        author: 'Dr. Miran Uddin',
        aurhorImg: client3,
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