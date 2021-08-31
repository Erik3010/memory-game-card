import shuffle from "@/utils/shuffle";

import { reactive, toRefs } from "vue";

export default (board) => {
  const gameState = reactive({
    isNewGame: true,
    selectedCards: [],
    canFlipCard: true,
  });

  const startGame = () => {
    restartGame();
    console.log(board);
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
    if (gameState.isNewGame) return;

    const currentCard = board.value.find(
      (card) => card.position === payload.position
    );
    if (
      !currentCard ||
      currentCard.selected ||
      !gameState.canFlipCard ||
      gameState.selectedCards.length >= 2
    )
      return;

    currentCard.selected = true;

    gameState.selectedCards.push(toRefs(payload));

    if (gameState.selectedCards.length === 2) {
      const [first, second] = gameState.selectedCards;

      if (first.type === second.type) {
        first.matched = true;
        second.matched = true;

        gameState.canFlipCard = true;
      } else {
        gameState.canFlipCard = false;
        setTimeout(() => {
          gameState.canFlipCard = true;

          first.selected = false;
          second.selected = false;
        }, 1000);
      }
      gameState.selectedCards = [];
    }
  };

  return { startGame, restartGame, flipCard, gameState };
};
