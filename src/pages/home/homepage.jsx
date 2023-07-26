import React from 'react'
import SidebarNav from '../../components/sidebarNav'
import WidgetSidebar from '../../components/widgetBar'
import PostArea from '../../components/postArea'
import FeedContainers from '../../components/feedContainer'

const Homepage = () => {
  return (
    <section className='bg-gray-100 h-screen w-screen'>
      {/* sidebar navigation */}
      <SidebarNav />
      {/* widgets sidebar */}
      <WidgetSidebar />
      {/* feeds container */}
      <FeedContainers />
    </section>
  )
}

export default Homepage