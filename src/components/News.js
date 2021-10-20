import { Container, Grid, makeStyles } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'


const useStyles = makeStyles((theme)=>({
   mainCon:{
       marginTop:'20px',
       justifyContent:'center',
       alignItems:'center',
       minWidth:'100vw'
   },
   mainGrid:{
        
   }
}));

export default function News(props){

    const classes = useStyles()

    const[news,setNews] = useState([])

    useEffect(()=>{
        const fetchNews = async ()=>{
            const response = await fetch('https://inter-website-default-rtdb.firebaseio.com/items.json')
            const responseData = await response.json();

            let loadedNews = [];

            for (const key in responseData){
                loadedNews.push({
                    id:key,
                    title:responseData[key].title,
                    picture: responseData[key].picture,
                    date:responseData[key].date
                })
            }
            setNews(loadedNews)
        }
        fetchNews()
        
    },[])
    return (
        <Grid id={props.id} container justify='center' className={classes.mainCon}>
            <Grid container lg={8} sm={11} xs={11}
            spacing={2}
            justify='center' className='mainGrid'>
            {news.map(item =>(
               <Grid item key={item.id}xs={12} sm={12} md={6} lg={6}>
                   <NewsItem item={item}/>
                </Grid>
            ))}
            </Grid>
        </Grid>
    )
}



