export const SHOW_MOBILE_NAVIGATION_MENU = "SHOW_MOBILE_NAVIGATION_MENU";
export const HIDE_MOBILE_NAVIGATION_MENU = "HIDE_MOBILE_NAVIGATION_MENU";

let initialState = {
  visibleMobileMenu: false,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MOBILE_NAVIGATION_MENU:
      return { ...state, visibleMobileMenu: true };
    case HIDE_MOBILE_NAVIGATION_MENU:
      return { ...state, visibleMobileMenu: false };
    default:
      return state;
  }
};

export function showMobileNavigationMenu() {
  return {
    type: SHOW_MOBILE_NAVIGATION_MENU,
  };
}
export function hideMobileNavigationMenu() {
  return {
    type: HIDE_MOBILE_NAVIGATION_MENU,
  };
}

export default burgerReducer;
