import React from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import { Link, Paper } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';

export default function Blog({posts}) {
    console.log(posts);
    return (
        <div>
             <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 style={{marginLeft:20}}>Blog page</h1>
            <Grid container spacing={2} style={{padding:20,boxSizing:"border-box"}}>
                {
                    posts.map((post)=>{
                        return(
                            <Grid item xs={12} md={3} key={post.id}>
                                <Link href={`/post/${post.id}`}>
                                    <Paper elevation={2} style={{padding:10,boxSizing:"border-box"}}>
                                        <div style={{ height:300,backgroundImage:"url("+post.jetpack_featured_media_url+")",backgroundSize:"cover",}}>
                                        </div>
                                        <p style={{fontSize:16,fontWeight:700}}>{post.title.rendered}</p>
                                    </Paper>
                                </Link>
                            </Grid>
                        )
                    })
                }
               
              
            </Grid>
        </div>
    )
}

export const getStaticProps = async() =>{
    const res = await fetch(`https://blog.arenakamanahalli.in//wp-json/wp/v2/posts`)
    const posts = await res.json();
    return {
        props:{
            posts
        }
    }
}
