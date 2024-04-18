declare module 'js-cookie' {
    interface CookiesStatic {
        get(key: string): string | undefined;
        set(key: string, value: any, options?: Cookies.CookieAttributes): void;
        remove(key: string, options?: Cookies.CookieAttributes): void;
    }

    const Cookies: CookiesStatic;
    export = Cookies;
}
