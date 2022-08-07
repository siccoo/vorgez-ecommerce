import React, { FC, useState } from 'react';
import { ProductDocument } from '../models/Product';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material"
import { useAppDispatch } from 'src/hooks/redux/hooks';

interface ProductComponentProps {
    product: ProductDocument
}

const ProductComponent: FC<ProductComponentProps> = ({ product }) => {
    const [count, setCount] = useState(0);

    const dispatch = useAppDispatch();

    return (
        <Card sx={{ width: 300, minWidth: 300 }}>
            <CardMedia
            component="img"
            height="140"
            image="https://via.placeholder.com/300.png/09f/fff"
            alt="image"
            />
            <CardContent>
                <Typography gutterBottom variant='h4' component='div'>
                    ${product.price}
                </Typography>
                {product.description && <Typography variant='body2' color='text.secondary'>
                    ${product.description}
                </Typography>}
            </CardContent>
        </Card>
    )
}

export default ProductComponent