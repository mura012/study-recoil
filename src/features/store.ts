import { atom, selector } from "recoil";
// keyは一意
// ジェネリクスはdefaultの型を指定
export const numberState = atom<number>({
  key: "numberState",
  default: 0,
});
// atomやselectorを利用することができる
export const numberCastString = selector<string>({
  key: "numberCastString",
  get: ({ get }) => {
    const result = get(numberState);
    return String(result) + "dayo";
  },
});
