import blogCommon from '../data/blogCommon.json'

function BlogCommon() {
    return (
        <div>
            <div className="conainer">
                <div className="row">
                    {
                        blogCommon?.map((blog, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-12" key={index}>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogCommon
