import React from 'react';
import {useRouter} from 'next/router';


function index({post}) {
    // const router = useRouter()
    // const {id} = router.query
    // var parse = require('html-react-parser')
    return (
        <div>
            <div>
                <h1 style={{padding:20}}>{post.title.rendered}</h1>
                <div style={{ height:300,backgroundImage:"url("+post.jetpack_featured_media_url+")",backgroundSize:"cover",}}>
                </div>
                <div  style={{maxWidth:1000,margin:"0 auto"}} dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                    
                </div>
            </div>
        </div>
    )
}

// generate static paths

export const getStaticProps = async (context) => {
    const res = await fetch(`http://blog.arenakamanahalli.in//wp-json/wp/v2/posts/${context.params.id}`)
    const post = await res.json()
    return {
        props:{
            post
        }
    }
}

// fetch from api end point

export async function getStaticPaths() {
    const res = await fetch('http://blog.arenakamanahalli.in//wp-json/wp/v2/posts')
    const posts = await res.json()
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
export default index
