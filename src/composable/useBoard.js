import { ref } from "vue";

import cardType from "@/constant/card-type";

export default () => {
  const board = ref([]);

  const init = () => {
    let temp = 0;

    cardType.forEach((type) => {
      for (let variant = 0; variant <= 1; variant++) {
        board.value.push({
          type,
          variant,
          matched: false,
          selected: true,
          position: temp,
        });
        temp++;
      }
    });
  };

  init();

  return { board };
};
