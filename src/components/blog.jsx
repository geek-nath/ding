import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    { title: "How to be a software dev.", postDetail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui incidunt suscipit ratione offi", releaseDate: ["June", 29] },
    { title: "The role of a software engineer", postDetail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui incidunt suscipit ratione ", releaseDate: ["Sep", 6] },
    { title: "Becoming a self-thought dev.", postDetail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui incidunt suscipit ratione offic", releaseDate: ["Feb", 19] }
  ]
  return (
    <>
      <section className="blog">
        <div className="container">
          <h1 className="text-center text-gray-900 font-bold text-4xl">
            From Our Blog
          </h1>

          <div className="mt-8">
            <div className="blog_posts_wrap">
              {blogPosts.map((data, index) => {
                const { title, postDetail, releaseDate } = data;
                return (
                  <Link className='no-underline' key={index} to={'/'}>
                    <div className="blog_post">
                      <div className="flex gap-5">
                        <div className="date_wrapper">
                          <div className="date_wrap text-center">
                            <h4 className='text-white text-md mt-1'>{releaseDate[0]}</h4>
                            <h1 className='text-white text-2xl leading-0'>{releaseDate[1]}</h1>
                          </div>
                        </div>
                        <div className="post_wrap">
                          <div className="post_title">
                            <h1 className='text-gray-900 font-bold text-xl'>
                              {title}
                            </h1>
                          </div>
                          <p className="mt-3 text-gray-500 text-sm">
                            {postDetail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog