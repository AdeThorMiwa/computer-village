import React, { Fragment, useEffect } from 'react'
import { CategoryTopBar, CategoryTopBarSkeleton } from '../components/TopBar/CategoryTopBar/CategoryTopBar'
import { CategoryItem, CategoryItemSkeleton } from '../components/ItemCards/category-item/CategoryItem';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectAllCategory, selectCurrentCategory } from '../redux/category/category.selector';
import { fetchCategoryByNameStartAsync, clearCategories } from '../redux/category/category.actions';
import { ZeroFound } from '../components/Helpers/Helpers';

const Categories = ({ match, allCategories, currentCategory, fetchCurrentCategory, clearCurrentCategory }) => {
    let history = useHistory();
    useEffect(() => {
        fetchCurrentCategory(match.params.category);

        return () => {
            clearCurrentCategory()
        }
    }, [fetchCurrentCategory, match.params.category, clearCurrentCategory])
    
    const itemClickHandler = (i) => {
        if(i === undefined) { history.push('/category/all') }
        else { history.push(`/category/${allCategories[i].name}`)}
    }

    return (
        <Fragment> 
            { currentCategory ? <CategoryTopBar data={allCategories} title={currentCategory.name} defaultValue={currentCategory.name} onItemClick={itemClickHandler} /> : <CategoryTopBarSkeleton title={match.params.category} /> }
            <section className="row px-3">
                { currentCategory ? <> { currentCategory.brand.length ? <Fragment> 
                    { currentCategory.brand.map((brand, i) => <div key={i} className="col-6 col-sm-4 col-md-3 p-0 col-lg-auto">
                    <Link to={`/category/${currentCategory.name === "all" ? brand.category : currentCategory.name}/${brand.name.toLowerCase()}`} style={{ textDecoration: 'none'}}><CategoryItem {...brand} /></Link>
                </div>)}
                </Fragment> : <ZeroFound text="No Brand Found For This Category!" /> } </> : [1,2,3,4,5].map(i => <div key={i} className={`col-6 col-sm-4 col-md-3 p-0 col-lg-auto ${i === 4 && 'd-none d-sm-block'}`}>
                    <CategoryItemSkeleton />
                </div>)}
            </section>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    allCategories: selectAllCategory,
    currentCategory: selectCurrentCategory
})

const mapDispatchToProps = dispatch => ({
    fetchCurrentCategory: (name) => dispatch(fetchCategoryByNameStartAsync(name)),
    clearCurrentCategory: () => dispatch(clearCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
