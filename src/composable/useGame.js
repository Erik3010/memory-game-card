import shuffle from "@/utils/shuffle";

import { ref, reactive } from "vue";

const newGame = ref(true);
const selectedCard = ref([]);

export default (board) => {
  const gameState = reactive({
    isNewGame: true,
    userSelectedCard: [],
    canFlipCard: true,
  });

  const startGame = () => {
    restartGame();

    gameState.isNewGame = false;
  };

  const restartGame = () => {
    board.value = shuffle(board.value);

    board.value = board.value.map((card, index) => ({
      ...card,
      matched: false,
      selected: false,
      position: index,
    }));
  };

  const flipCard = (payload) => {
    const currentCard = board.value.find(
      (card) => card.position === payload.position
    );
    if (!currentCard) return;

    currentCard.selected = true;
  };

  return { startGame, restartGame, flipCard, gameState };
};
