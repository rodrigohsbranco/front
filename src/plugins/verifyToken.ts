import store from "@/store";

const TokenValid = (): boolean => {
  const date = String(Math.floor(Date.now() / 1000));
  const expire = store.state.expire ? store.state.expire : 0;
  const isExpired = date >= expire;
  return !isExpired;
};

export default TokenValid;
