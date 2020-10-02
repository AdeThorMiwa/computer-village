import { siteActionTypes } from './site.types';
import Dimensions from '../../resource/dimens';

const INITIAL_STATE = {
    siteWidth: Dimensions.siteWidth,
    todaysDealHightlight: false,
    newOfferHighlight: false
}

const siteReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch (type) {
        case siteActionTypes.CHANGE_WIDTH:
            return {
                ...state,
                siteWidth: Number(state.siteWidth) + 10
            }
        case siteActionTypes.HIGHLIGHT_TODAYS_DEAL:
            return {
                ...state,
                todaysDealHightlight: true
            }
        case siteActionTypes.FADE_IN_TODAYS_DEAL:
            return {
                ...state,
                todaysDealHightlight: false
            }
        case siteActionTypes.HIGHLIGHT_NEW_OFFER:
            return {
                ...state,
                newOfferHighlight: true
            }
        case siteActionTypes.FADE_IN_NEW_OFFER:
            return {
                ...state,
                newOfferHighlight: false
            }
        default:
            return state;
    }

}

export default siteReducer;