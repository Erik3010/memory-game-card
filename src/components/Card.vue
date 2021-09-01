<template>
  <div :class="cardClass" @click="flipCard">
    <div class="game-card-face front">
      <img :src="image" alt="icon" />
    </div>
    <div class="game-card-face back"></div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Card",
  props: ["card"],
  emits: ["flip-card"],
  setup(props, { emit }) {
    const image = computed(() =>
      require(`@/assets/images/type/${props.card.type}.png`)
    );

    const cardClass = computed(() => {
      return ["game-card", { "is-flipped": props.card.selected }];
    });

    const flipCard = () => {
      emit("flip-card", { ...props.card });
    };

    return {
      image,
      cardClass,
      flipCard,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.game-card {
  position: relative;
  transition: 0.3s all;
  cursor: pointer;
  transform-style: preserve-3d;
  user-select: none;
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
