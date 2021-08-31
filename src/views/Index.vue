<template>
  <div class="container">
    <div class="game-header">
      <h1 class="game-header-title">
        Memory Game Card
      </h1>
    </div>
    <div class="game-board">
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
      <div class="game-card"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
}

.game-board {
  margin-top: 5.5rem;
  display: grid;
  grid-template: repeat(4, 150px) / repeat(4, 110px);
  justify-content: center;
  gap: 18px;
  .game-card {
    width: 110px;
    height: 150px;
    background-image: url("../assets/images/back.png");
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
