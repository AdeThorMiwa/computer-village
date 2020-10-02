import { siteActionTypes } from './site.types';

export const changeScreenWidth = () => ({
    type: siteActionTypes.CHANGE_WIDTH
})

export const todaysDealClick = () => dispatch => {
    dispatch({ type: siteActionTypes.HIGHLIGHT_TODAYS_DEAL })

    setTimeout(() => dispatch({ type: siteActionTypes.FADE_IN_TODAYS_DEAL }), 4000);
}

export const newOfferClick = () => dispatch => {
    dispatch({ type: siteActionTypes.HIGHLIGHT_NEW_OFFER })

    setTimeout(() => dispatch({ type: siteActionTypes.FADE_IN_NEW_OFFER }), 4000);
}