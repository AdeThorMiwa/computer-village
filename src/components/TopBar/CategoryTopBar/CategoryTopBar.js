import React from 'react'
import { TopBarContainer } from './style'
import { firstToUpper } from '../../../utils';
import { FilterDropDown } from '../../Helpers/Helpers';

const CategoryTopBar = ({ data, noValue = "all", label, title, onItemClick, defaultValue }) => {
    return (
        <TopBarContainer>
            <div className="category">
                <h2>{ firstToUpper(title)}</h2>
                <FilterDropDown data={data} noValue={noValue} label={label} onItemClick={onItemClick} defaultValue={defaultValue} />
            </div>
        </TopBarContainer>
    )
}

const CategoryTopBarSkeleton = ({ title }) => {
    return (
        <TopBarContainer>
            <div className="category">
                <h2>{ firstToUpper(title)}</h2>
            </div>
        </TopBarContainer>
    )
}

export { CategoryTopBar, CategoryTopBarSkeleton }
