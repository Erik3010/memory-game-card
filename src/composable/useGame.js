import shuffle from "@/utils/shuffle";

import { reactive, computed, toRef } from "vue";

import cardType from "@/constant/card-type";

export default (board) => {
  const gameState = reactive({
    isNewGame: true,
    selectedCards: [],
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

  const isWin = computed(() => {
    return (
      board.value.filter((card) => card.matched).length / 2 === cardType.length
    );
  });

  const updateCard = (cards, property, value) => {
    cards.forEach((card) => {
      const currentCard = board.value.find((b) => b.position === card.position);
      currentCard[property] = value;
    });
  };

  const flipCard = (payload) => {
    if (gameState.isNewGame) return;

    const currentCard = board.value.find(
      (card) => card.position === payload.position
    );

    if (
      !currentCard ||
      !gameState.canFlipCard ||
      currentCard.selected ||
      gameState.selectedCards.length >= 2
    )
      return;

    currentCard.selected = true;

    gameState.selectedCards.push(payload);

    if (gameState.selectedCards.length === 2) {
      const [first, second] = gameState.selectedCards;

      if (first.type === second.type) {
        updateCard(gameState.selectedCards, "matched", true);

        gameState.canFlipCard = true;
      } else {
        gameState.canFlipCard = false;
        const selectedCards = [...gameState.selectedCards];
        setTimeout(() => {
          gameState.canFlipCard = true;

          updateCard(selectedCards, "selected", false);
        }, 1000);
      }
      gameState.selectedCards = [];
    }
  };

  return {
    startGame,
    restartGame,
    flipCard,
    gameState,
    isWin,
  };
};
