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
        <Card>

        </Card>
    )
}

export default ProductComponent