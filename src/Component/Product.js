import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Product = ({ product }) => {


    const { title, price, image, category, id } = product;

    return (
        <div className='mt-2 text-center'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia className='h-36'
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>

                    <h6>{title}</h6>
                    <p>{price}</p>
                    <Button variant="contained" color="success">Buy Now</Button>


                </CardContent>

            </Card>
        </div>
    );
};

export default Product;