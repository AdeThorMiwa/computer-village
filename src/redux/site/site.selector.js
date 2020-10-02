import { createSelector } from 'reselect';

const selectSite = state => state.site;

export const selectHighlightTodaysDeal = createSelector(
    [selectSite],
    site => site.todaysDealHightlight
)

export const selectHighlightNewOffer = createSelector(
    [selectSite],
    site => site.newOfferHighlight
)