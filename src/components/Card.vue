<template>
  <div class="game-card is-flipped">
    <div class="game-card-face front">
      <img src="@/assets/images/type/award.png" alt="icon" />
    </div>
    <div class="game-card-face back"></div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.game-card {
  position: relative;
  transition: 0.3s all;
  cursor: pointer;
  transform-style: preserve-3d;
  @at-root {
    .is-flipped {
      transform: rotateY(180deg);
    }
  }
  &-face {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .front {
    transform: rotateY(180deg);
    background-image: url("../assets/images/front.png");
    img {
      width: 70px;
      height: 70px;
      background: transparent;
    }
  }
  .back {
    background-image: url("../assets/images/back.png");
  }
}
</style>
