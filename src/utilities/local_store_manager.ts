export const localStoreManager = {
    setExpiredTime(value: string) {
        localStorage.setItem('timeSessionExpired', value);
    },
    getExpiredTime() {
        return localStorage.getItem('timeSessionExpired') || '0'
    },
    clear() {
        localStorage.clear();
    },
}