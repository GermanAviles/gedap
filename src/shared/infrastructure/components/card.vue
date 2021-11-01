<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  }
})
export default class Card extends Vue { }
</script>

<style lang="scss" scoped>

.card {
  max-width: 400PX;
  position: relative;
  word-wrap: break-word;
  border-radius: calc(30 * 1px);
  overflow: hidden;
  text-decoration: none;
  box-shadow: 2px 2px 3px rgba(black, 0.12), 2px 2px 6px rgba(black, 0.05);
}

</style>
