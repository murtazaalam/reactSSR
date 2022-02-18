import { atom } from "recoil";
export const courseList = atom({
  key: "courseList",
  default: [],
});
export const cartItemList = atom({
  key: "cartItemList",
  default: [],
});
