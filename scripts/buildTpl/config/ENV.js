/**
 * 配置文件
 * @type {{apiDomain}}
 */
var ENV = (function () {
    var apiDomain = "${apiDomain}";

    var ssoLoginUrl = "${ssoLoginUrl}";

    var rootPath = "${rootPath}";
    return {
        rootPath: rootPath,                                 // 根路由前缀
        ssoLoginUrl: ssoLoginUrl,
        apiDomain: apiDomain,
        login:{
            isStartLoginCheck: false,
            defaultRedirectUrl: rootPath + "reception",     // 登录成功后默认跳转页面
        }
    }
})();
