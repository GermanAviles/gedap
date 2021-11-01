<template>
  <swiper
    :modules="[ modules ]"
    :slides-per-view="1"
    :space-between="30"
    :pagination="{ clickable: true }"
    effect="fade"
    loop="true"
    :mousewheel="{ invert: false }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="( step, index ) in steps" :key="index">
      <slot
        :name="'step-' + index"
        :step="step"
      />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([ Pagination ]);

@Options({
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    steps: []
  }
})
export default class TabsExperiencias extends Vue {
  modules = [ EffectFade, Pagination ];

  created(): void {
    console.log('CREated component')
  }
  mounted(): void {
    console.log('Mounted component')
    // const swiper = new Swiper('.swiper',
    //   {
    //    spaceBetween: 30,
    //     effect: 'fade',
    //     loop: true,
    //     mousewheel: {
    //       invert: false,
    //     },
    //     // autoHeight: true,
    //     pagination: {
    //       el: '.blog-slider__pagination',
    //       clickable: true,
    //     }
    //   }
    // );
  }

  onSlideChange(): void{
    console.log('slide change');
  }

  onSwiper( swiper: any ): void{
    console.log(swiper);
  }

}
</script>

<style lang="scss">

.swiper-container-horizontal >
.swiper-pagination-bullets {

    position: absolute;
    z-index: 21;
    right: 20px;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-pagination-bullet {
      margin: 0 5px;
      width: 11px;
      height: 11px;
      display: block;
      border-radius: 10px;
      background: #062744;
      opacity: 0.2;
      transition: all 0.3s;

      &-active {
        opacity: 1;
        background: #fd3838;
        width: 30px;
        // height: 30px;
        box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);

        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
          margin: 0 5px;
        }
      }
    }
  }
</style>
