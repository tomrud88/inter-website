import { Container, Grid, Link, makeStyles } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem';
import { ClipLoader } from 'react-spinners';


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

    const[news,setNews] = useState([]);
    const[loading,setLoading] = useState(false)

    useEffect(()=>{
        const fetchNews = async ()=>{
            setLoading(true)
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
            setLoading(false)
        }
        fetchNews()
        
    },[])
    return (
        <div>
            {loading ? 
            <ClipLoader
            size={150}
            color={'#001ea0'}
            loading={loading}
            />: 
        <Grid id={props.id} container justify='center' className={classes.mainCon}>
            <Grid container lg={8} sm={10} xs={11}
            spacing={2}
            justify='center' className='mainGrid'>
            {news.map(item =>(
               
               <Grid item key={item.id}xs={12} sm={10} md={6} lg={6}>
                   <NewsItem item={item}/>
                </Grid>
                
            ))}
            </Grid>
        </Grid>
        }
        </div>
    )
}



