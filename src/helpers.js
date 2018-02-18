export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString(); // expiration date of the cookie
    const maxAge = 'max-age=' + exdays * 24 * 60 * 60; // nb of seconds after the cookie expires
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/;' + maxAge;
}

function getCookie(cname) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export function checkCookieLang() {
    let lang = getCookie('lang');
    if (lang !== '') {
        return lang;
    } else {
        lang = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
        if (lang !== 'en' && lang !== 'fr') {
            lang = 'en';
        }
        setCookie('lang', lang, 365);
        return lang;
    }
}
