<template>
  <div class="game-header">
    <h1 class="game-header-title">
      Memory Game Card
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header",
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
</style>
