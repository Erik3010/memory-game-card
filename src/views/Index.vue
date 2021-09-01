<template>
  <div class="container">
    <Header
      :new-game="gameState.isNewGame"
      @start-game="startGame"
      :is-win="isWin"
    />
    <div class="game-board">
      <transition-group name="game-card-animation">
        <Card
          v-for="card in board"
          :key="`${card.type}-${card.variant}`"
          :card="card"
          @flip-card="flipCard"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Header from "@/components/Header";

import useBoard from "@/composable/useBoard";
import useGame from "@/composable/useGame";

export default {
  name: "Home",
  components: {
    Card,
    Header,
  },
  setup() {
    const { board } = useBoard();
    const { startGame, flipCard, gameState, isWin } = useGame(board);

    return {
      board,
      flipCard,
      startGame,
      gameState,
      isWin,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.game-board {
  margin-top: 3.25rem;
  display: grid;
  grid-template: repeat(4, 150px) / repeat(4, 110px);
  justify-content: center;
  gap: 18px;
}

.game-card-animation-move {
  transition: all 1s;
}
</style>
