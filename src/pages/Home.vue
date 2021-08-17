<template>
  <Home />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from '@/home/infrastructure/home.page.vue';

@Options({
  components: {
    Home
  }
})
export default class HomePage extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
