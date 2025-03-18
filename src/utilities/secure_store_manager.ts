import SecureLS from "secure-ls";

const secureLS = new SecureLS({ encodingType: "aes" , isCompression: false, encryptionSecret: "if-marketing" });
export const secureStore = {
  getItem(key: string) {
    return secureLS.get(key);
  },
  removeItem(key: string) {
    secureLS.remove(key);
  },
  clear() {
    secureLS.clear();
  },

  setToken(token: string) {
    secureLS.set("token", token);
  },
  getToken() {
    return secureStore.getItem('token') || null;
  },
};
