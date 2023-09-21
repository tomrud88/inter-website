import { React, useEffect,useState } from 'react';
import { Route, useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { ClipLoader } from "react-spinners";

const useStyles = makeStyles((theme)=>({
    mainCard:{
        maxWidth:'1000px'
    },
    mainContainer:{
        marginTop:'80px',
        justifyContent:'center',
        display:'flex',
        [theme.breakpoints.down('sm')]:{
          marginTop:'70px'
      }
    },
    image:{
        objectFit:'cover',
        objectPosition:'top'
    },
    spinner: {
        justifyContent: 'center',
        alignItems:'center'
    }
}))
   
export default function SingleNews() {
        const {id} = useParams()
    const classes = useStyles()
    
    const [singleNews, setSingleNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNewsById = async (id) => {
            setLoading(true);
            const response = await fetch(
              `https://inter-website-default-rtdb.firebaseio.com/items/${id}.json`
            );
            const responseData = await response.json();

            if (responseData) {
                const loadedNews = {
                  id: id,
                  title: responseData.title,
                  picture: responseData.picture,
                  date: responseData.date,
                  alt: responseData.alt,
                  text1: responseData.text1,
                  text2: responseData.text2,
                  text3: responseData.text3,
                };
                setSingleNews(loadedNews);
            } else {
                console.error('Item with ID ${id} not found');
                setSingleNews(null)
            }
            setLoading(false);
        }

        const itemId = id;
        fetchNewsById(itemId)
    }, [])
    console.log(singleNews)
    return (
      <div>
        {loading ? (
          <Container className={classes.mainContainer}>
            <ClipLoader size={150} color={"#001ea0"} loading={loading} />
          </Container>
        ) : (
          <Container className={classes.mainContainer}>
            <Card className={classes.mainCard}>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{ marginTop: "10px", fontWeight: "bold" }}
              >
                {singleNews.title}
              </Typography>
              <CardMedia
                className={classes.image}
                component="img"
                height="640"
                image={singleNews.picture}
                alt={singleNews.alt}
              />
              <CardContent>
                <Typography variant="body1" style={{ marginBottom: "20px" }}>
                  {singleNews.text1}
                </Typography>
                <Typography style={{ marginBottom: "20px" }}>
                  {" "}
                  {singleNews.text2}
                </Typography>
                <Typography style={{ marginBottom: "10px" }}>
                  {" "}
                  {singleNews.text3}
                </Typography>
              </CardContent>
            </Card>
          </Container>
        )}
      </div>
    );
}
