import { useState } from 'react'
import pfp from '../../images/pleb.jpg'

import { Link } from 'react-router-dom'

function Post(props) {

  const [itemContent, _setItemContent] = useState(JSON.parse(props.post.item_content))
  const [address, _setAddress] = useState(props.truncateAddress(itemContent.address))
  const [timePosted, _setTimePosted] = useState(() => {
    return props.timeSince(new Date(itemContent.time * 1000))
  })
  const [content, _setContent] = useState(itemContent.content.body)

  // console.log(props.post)
  const shouldDisplay = (content) => {
    return content != '' && content != undefined
  }

  return (
    <div>
      { 
        shouldDisplay(content) ?
        <Link to={`/posts/${props.post.item_hash}`}>
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
        </Link>
        :
        ''
      }
      
    </div>
  );
}

export default Post;
