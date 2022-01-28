import PostModel from '../../models/PostModel'
import { useState, useEffect } from 'react'
import pfp from '../../images/pleb.jpg'

import { useParams } from 'react-router-dom'

function ShowPost(props) {

  const { item_hash } = useParams()

  const [address, setAddress] = useState('')
  const [content, setContent] = useState('')
  const [timePosted, setTimePosted] = useState('')

  const loadPost = async () => {
    const post = await PostModel.find(item_hash)

    setAddress(props.truncateAddress(post.address))
    setContent(post.content.body)

    setTimePosted(props.timeSince(new Date(post.time * 1000)))
  }

  useEffect(() => {
    loadPost()
  }, [])

  return (
    <div>
      <div className='post card my-3'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-2'>
              <img src={pfp} className='pfp' />
            </div>
            <div className='col-10'>
              <p className='user mb-0'>
                <b>{address}</b><span className='time'> · {timePosted}</span>
              </p>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPost;
