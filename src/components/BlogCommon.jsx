import { motion } from "framer-motion";
import blogCommon from '../data/blogCommon.json'

function BlogCommon() {
    return (
        <div className='blog-common-part'>
            <div className="container">
                <div className="row">
                    {
                        blogCommon?.map((blog, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: -200 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 6,
                                }}
                                whileInView={{ opacity: 1, y: 0 }} className="col-lg-4 col-md-4 col-sm-12" key={index}>
                                <div className="blog-content-box">
                                    <img src={`${window.location.origin}/images/blog/${blog.blogImage}`} alt="blog-image" />
                                    <div className="blog-content-details p-4 flex flex-col gap-3">
                                        <div className="blog-detail flex items-center justify-between">
                                            <div className="author flex items-center gap-2">
                                                <i className="fa-solid fa-user text-lg" />
                                                <h6 className='text-lg capitalize font-medium'>author</h6>
                                            </div>
                                            <div className="blog-date flex items-center gap-2">
                                                <i className="fa-solid fa-calendar-days text-lg" />
                                                <h6 className='text-lg capitalize font-medium'> {blog.date} </h6>
                                            </div>
                                        </div>
                                        <h1 className='text-xl font-semibold'> {blog.blogTitle} </h1>
                                        <p className='text-base font-medium text-black opacity-70'> {blog.blogDescription} </p>
                                        <a href="#" className='continue-read-btn capitalize text-white px-4 py-2.5 rounded-full text-sm font-medium w-fit'>Continue reading</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogCommon
