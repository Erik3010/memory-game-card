<template>
  <div class="game-header">
    <div class="game-header-wrapper">
      <h1 class="game-header-title">
        Memory Game Card
      </h1>
    </div>
    <button class="game-button" @click="startGame">
      {{ newGame ? "Start" : "Restart" }} Game
    </button>
    <div v-if="isWin" class="game-header-win">You Win!</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["newGame", "isWin"],
  emits: ["start-game"],
  setup(_, { emit }) {
    const startGame = () => {
      emit("start-game");
    };

    return { startGame };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.game-header {
  margin-top: 3rem;
  text-align: center;
  &-title {
    display: inline;
    color: $primary;
    background-image: linear-gradient(
      120deg,
      rgba(49, 52, 131, 0.2),
      rgba(37, 38, 116, 0.5) 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 0.5rem;
    background-position: 0% 100%;
  }
  .game-button {
    margin-top: 2rem;
    background: $primary;
    color: white;
    padding: 0.875rem 1.5rem;
    border: 2px solid $primary;
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.875rem;
    transition: 0.3s;
    &:hover {
      background: $secondary;
      border-color: $secondary;
    }
  }
  &-win {
    margin-top: 1.85rem;
    text-align: center;
  }
}
</style>
