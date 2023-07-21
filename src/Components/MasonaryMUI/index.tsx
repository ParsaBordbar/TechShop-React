import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Fab, Tooltip } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';



const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  
  return (
    <Box sx={{ width: 1400, minHeight: 829}}>
      <Masonry columns={6} spacing={1.2} >
        {itemData.map((item, index) => (
          <Link key={index} to={`${item.url}`}>
                  <img 
                  src={`${item.img}?w=162&auto=format`}
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  loading="lazy"
                  className='itemMasonary'
                  style={{
                      boxShadow: 'black 10 ',
                      display: 'block',
                      width: '100%',
                  }}
                  />
                
                <div style={{ display: 'flex', gap: '.6rem', paddingTop: '.5rem', paddingBottom: '1rem',
                  paddingLeft:'.6rem'}}>
                <Tooltip title="Add to Cart" arrow>
                  <AddShoppingCartIcon className='hoverEffect'/>
                </Tooltip>
                  <h3 className='hoverEffect'>{`${item.subject}`}</h3>
                </div>
          </Link>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/auth',
    subject: 'iPhone 12',
    title: 'iphone12'
  },
  {
    url: '/',
    subject: 'iPhone 1',
    img: 'src/assets/iphone page/1.jpg',
  },
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone-14-front-back.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone page/13.webp',
    url: '/',
    subject: 'iPhone 13',
  },
  {
    img: 'src/assets/iphone page/se.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone-14-front-back.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone page/13.webp',
    url: '/',
    subject: 'iPhone 13',
  },
  {
    img: 'src/assets/iphone page/se.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    url: '/',
    subject: 'iPhone 14',
    img: 'src/assets/iphone page/1.jpg',
  },
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    url: '/',
    subject: 'iPhone 14',
    img: 'src/assets/iphone page/14+.jpg',
  },
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone page/13.webp',
    url: '/',
    subject: 'iPhone 13',
  },
  {
    img: 'src/assets/iphone page/se.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    url: '/',
    subject: 'iPhone 1',
    img: 'src/assets/iphone page/1.jpg',
  },
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/auth',
    subject: 'iPhone 12',
    title: 'iphone12'
  },
  {
    url: '/',
    subject: 'iPhone 1',
    img: 'src/assets/iphone page/1.jpg',
  },
  {
    img: 'src/assets/iphone page/12.jpg',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone-14-front-back.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone page/13.webp',
    url: '/',
    subject: 'iPhone 13',
  },
  {
    img: 'src/assets/iphone page/se.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone-14-front-back.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    img: 'src/assets/iphone page/13.webp',
    url: '/',
    subject: 'iPhone 13',
  },
  {
    img: 'src/assets/iphone page/se.webp',
    url: '/',
    subject: 'iPhone 14',
  },
  {
    url: '/',
    subject: 'iPhone 14',
    img: 'src/assets/iphone page/1.jpg',
  },
  
  
  
];