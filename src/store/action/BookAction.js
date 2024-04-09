import { DAT_GHE,HUY_GHE } from "../type/BookType";

export const datGheAct = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const huyGheAct = (soGhe) => {
    return {
      type: HUY_GHE,
      soGhe,
    };
  };
