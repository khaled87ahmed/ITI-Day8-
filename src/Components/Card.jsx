import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteArray, favoritesReducer, setDetailsString } from '../Redux/Slices/FavoriteSlice';
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export default function RecipeReviewCard(props) {

    const [expanded, setExpanded] = React.useState(false);
    const [favoriteColor, setFavoriteColor] = React.useState('default');
    let favoriteArray = [...useSelector((state) => state.favoriteItems.FavoritesArray)];

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(()=>{

        favoriteArray.forEach((e,i)=>{
            if(e.id == props.id)
                setFavoriteColor('red')
        })


    },[])

    function handleFavoriteClick() {
        if (favoriteColor == 'default') {
            favoriteArray.push(props.item);
            dispatch(addToFavoriteArray([...favoriteArray]));
            setFavoriteColor('red');
        }
        else{
            favoriteArray = favoriteArray.filter(e=>e!=props.item);
            dispatch(addToFavoriteArray([...favoriteArray]));
            setFavoriteColor('default');
        }

    }

    return (
        <Card >

            <Typography className='cursorPointer'
                onClick={()=>{ dispatch(setDetailsString(props.id)) ;navigate('/details')}}
                variant="h6"
                paragraph
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}
                variantMapping={{ body2: 'div' }}
            >
                {props.title}
            </Typography>

            <CardMedia
            className='cursorPointer'
             onClick={()=>{ dispatch(setDetailsString(props.id)) ;navigate('/details')}}
                component="img"
                height="194"
                image={props.img}
                alt={props.title}
            />

            <CardContent>

                <Typography
                    variant="body2"
                    paragraph
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                    variantMapping={{ body2: 'div' }}
                >
                    {props.more}
                </Typography>


            </CardContent>


            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon onClick={() => handleFavoriteClick()} sx={{ color: favoriteColor }} />
                </IconButton>
                
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>


            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography paragraph>
                        {props.more}
                    </Typography>


                </CardContent>
            </Collapse>


        </Card >
    );
}