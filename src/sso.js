import EnumEnv from '@/constants/EnumEnv';
import queryString from 'querystring';
import { loginSSOByTicket } from '@/services/auth';


// 通过ticket登录sso
const loginByTicket = (ticket) => {
    window.location.href = EnumEnv.login.defaultRedirectUrl;
};

const runApp = () => {
    const { ticket } = queryString.parse(window.location.search.replace(/^\?/, ""));
    loginByTicket(ticket);
}

runApp();
