import React from 'react'
import { Categories, CategoryContainer, Description, DescriptionContainer, Image, Title } from './MenuStyles';

const Menu = ({category}) => {
    return (
        <CategoryContainer bgColor={category.color}>
            <Categories>
                <Title color={category.color}>{category.title}</Title> 
                <Image src={category.image} />
            </Categories>
            <DescriptionContainer>
                <Description color={category.color}>{category.description}</Description>
            </DescriptionContainer>
        </CategoryContainer>
    )
}

export default Menu
