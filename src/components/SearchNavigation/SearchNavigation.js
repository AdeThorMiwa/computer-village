import React from 'react'
import { SearchNavigationContainer } from './style'
import { Pagination, FilterDropDown } from '../Helpers/Helpers'

const SearchNavigation = ({ match, pageAmount }) => {
    const currentPage = match.params.page || 1;
    const sorts = [
        'views',
        'date',
        'price'
    ]

    return (
        <SearchNavigationContainer>
            <div className="row m-0">
                <div className="col-12 col-md-4 p-0">
                    <Pagination pageAmount={pageAmount} current={currentPage}/>
                </div>
                <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4 p-0">
                    <FilterDropDown label="Sort By" defaultValue="views" data={sorts}/>
                </div>
            </div>
        </SearchNavigationContainer>
    )
}

export default SearchNavigation
