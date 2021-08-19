<template>
  <nav class="nav nav-bar">
    <div class="menu">
      <div class="menu__avatar">
        <div class="avatar">
          <span class="label">GA</span>
        </div>
      </div>
      <div class="menu__list-items">
        <ul class="items">
          <li class="item">
            <a href="#">Quien soy</a>
          </li>
          <li class="item">
            <a href="#">Experiencia</a>
          </li>
          <li class="item">
            <a href="#">Github</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  }
})
export default class NavBar extends Vue {

}
</script>

<style lang="scss" scoped>

nav.nav.nav-bar {
  padding: 0 40px;
  height: var(--navbar-height);
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgb(4,10,36);
  background: linear-gradient(90deg, rgba(4,10,36,1) 0%, rgba(4,13,42,1) 41%, rgba(8,34,61,1) 100%);

  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu__avatar {
      .avatar {
        width: 50px;
        height: 50px;
        display: flex;
        border-radius: 50%;
        letter-spacing: 4px;
        align-items: center;
        justify-content: center;
        // background-color: #d1e7ff1a;
        span {
          font-size: 1.3rem;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }

    .menu__list-items {
      .items {
        list-style: none;
        padding: 0;
        .item {
          display: inline-block;
          margin: 0 30px;
          a {
            text-decoration: none;
            color: var(--white);
          }
        }
      }
    }
  }
}

</style>
