import Cookies from 'js-cookie';

const getTokenFromCookie = Cookies.get('jwt');

console.log(getTokenFromCookie);
