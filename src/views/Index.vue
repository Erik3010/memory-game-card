<template>
  <div class="container">
    <Header />
    <div class="game-board">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Card,
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.game-board {
  margin-top: 5.5rem;
  display: grid;
  grid-template: repeat(4, 150px) / repeat(4, 110px);
  justify-content: center;
  gap: 18px;
}
</style>
