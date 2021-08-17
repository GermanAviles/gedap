<template>
  <!-- ======= Navbar ======== -->
  <NavBar/>
  <!-- ======================= -->
  <!-- ======= Main content =======-->
  <router-view/>
  <!-- ======================= -->
  <!-- ======= Footer ======== -->
  <!-- ======================= -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/shared/infrastructure/components/nav-bar.vue';

@Options({
  components: {
    NavBar
  }
})
export default class AppVue extends Vue {

}
</script>


<style lang="scss">
@import './assets/variables.css';
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700&display=swap');

html {
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  background: var(--white);
  background-repeat: no-repeat;
  font-family: 'Tajawal', sans-serif;
}

#app {
  font-family: 'Tajawal', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white);
  width: 100%;
}

h1,h2,h3,h4,h5,h6 {
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
