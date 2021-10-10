import React from "react"
const BlogPost = (props) => {
    const { title, description, author, aurhorImg, date } = props.blog;
    return (
        <div className="col-md-4"> 
            <div className='card shadow-sm'>
                <div className='card-header d-flex align-items-center'>
                    <img src={aurhorImg} alt="pic" width='60px' className='img-fluid mx-3 rounded' />
                    <div>
                        <h6 className='text-primary'>{author}</h6>
                        <p className='m-0'>{date}</p>
                    </div>
                </div>
                <div className='card-body'>
                    <h5>{title}</h5>
                    <p className="card-text text-secondary mt-4">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default BlogPost;