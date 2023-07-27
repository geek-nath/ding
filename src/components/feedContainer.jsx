import React from 'react'
import PostArea from './postArea'
import Navbar from '../pages/home/components/navbar'

const FeedContainers = () => {
  return (
    <main className='feeds_box'>
      <Navbar />
      <div className="feed_wrapper p-4">
        <PostArea />
      </div>
    </main>
  )
}

export default FeedContainers