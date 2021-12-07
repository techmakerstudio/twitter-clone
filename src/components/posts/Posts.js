import { posts } from 'aleph-js'
import { useState, useEffect } from 'react'

import Post from './Post'

function Posts(props) {

  const [loadedPosts, setLoadedPosts] = useState([])

  const loadPosts = async () => {
    const response = await posts.get_posts('chat', {'refs': ['hall'] })
    setLoadedPosts(response.posts)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div className='posts'>
      <h1 className='mt-5 mb-4'>👋 Hello!</h1>
      { loadedPosts.map((post) => <Post key={post.item_hash} post={post} truncateAddress={props.truncateAddress} timeSince={props.timeSince} />)}
    </div>    
  );
}

export default Posts;
