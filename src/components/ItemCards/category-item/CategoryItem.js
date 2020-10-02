import React from 'react'
import { ItemContainer } from './style';
import { DivSkeleton, H4Skeleton, SpanSkeleton } from '../../skeleton/style';
import { firstToUpper } from '../../../utils';
    
const CategoryItem = ({ name, numOfGoods }) => {
    
    return ( 
        <ItemContainer>
            <figure className="wrapper">
                <div className="background">
                    <h3 style={{color: `rgb(${Math.floor(Math.random() * 225)},${Math.floor(Math.random() * 225)},${Math.floor(Math.random() * 225)})`}}>{name.slice(0,1)}</h3>
                </div>
                <figcaption>
                    <h4>{firstToUpper(name)}</h4>
                    <span>{numOfGoods} Items</span>
                </figcaption>
            </figure>
        </ItemContainer>
    )
}

const CategoryItemSkeleton = () => {
    return (
        <ItemContainer>
            <figure className="wrapper">
                <DivSkeleton style={{ width: '100%', height: '200px', marginBottom: '6px'}} />
                <figcaption>
                    <H4Skeleton style={{ width: '100%', marginBottom: '5px'}} />
                    <SpanSkeleton />
                </figcaption>
            </figure>
        </ItemContainer>
    )
}

export { CategoryItem, CategoryItemSkeleton }
    