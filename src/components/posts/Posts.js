import { posts } from 'aleph-js'
import { useState, useEffect } from 'react'

import Post from './Post'

function Posts(props) {

  const [loadedPosts, setLoadedPosts] = useState([])
  const [socketConnected, setSocketConnected] = useState(false)

  const loadPosts = async () => {
    const response = await posts.get_posts('chat', {'refs': ['hall'] })
    setLoadedPosts(response.posts)  
  }

  useEffect(() => {
    loadPosts()
  }, [])

  useEffect(() => {
    if (loadedPosts.length > 0 && !socketConnected) {
      const url = 'wss://api2.aleph.im/api/ws0/messages?contentTypes=chat'
  
      const connection = new WebSocket(url) 
  
      connection.onmessage = (e) => { 
        let post = JSON.parse(e.data)
        if (post.item_content && post.content.type == 'chat') {
          
          const hash = post.item_hash

          const alreadyLoaded = loadedPosts.some((element) => {
            return element.item_hash == hash
          })

          if (!alreadyLoaded) {
            setLoadedPosts(previousPosts => [post, ...previousPosts])
          }
        }
      }

      setSocketConnected(true)
    }
  }, [loadedPosts])

  return (
    <div className='posts'>
      <h1 className='mt-5 mb-4'>👋 Hello!</h1>
      { loadedPosts.map((post) => <Post key={post.item_hash} post={post} truncateAddress={props.truncateAddress} timeSince={props.timeSince} />)}
    </div>    
  );
}

export default Posts;
