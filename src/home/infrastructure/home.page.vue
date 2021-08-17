<template>
  <div class="home">
    <!-- Presentación -->
    <section id="presentacion" class="home__presentacion">
      <!-- Fondo -->
      <div class="backgroud-figure">
        <svg class="wave-animation wave-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e2ddfc70" fill-opacity="1" d="M -213 65 C -135 -17 -142 -25 -91 -28 Q -60 -25 -43 -6 L -4 34 L 32 72 C 53.3 96 107 160 160 197.3 C 213.3 235 267 245 320 213.3 C 373.3 181 427 107 480 112 C 533.3 117 587 203 640 213.3 C 693.3 224 747 160 800 160 C 853.3 160 907 224 960 245.3 C 1013.3 267 1067 245 1120 202.7 C 1173.3 160 1227 96 1280 85.3 C 1333.3 75 1387 117 1413 138.7 L 1448 165 L 1522 213 C 1565 242 1611 263 1642 267 Q 1745 266 1796 322 L 1440 320 L 1413.3 320 C 1386.7 320 1333 320 1280 320 C 1226.7 320 1173 320 1120 320 C 1066.7 320 1013 320 960 320 C 906.7 320 853 320 800 320 C 746.7 320 693 320 640 320 C 586.7 320 533 320 480 320 C 426.7 320 373 320 320 320 C 266.7 320 213 320 160 320 C 106.7 320 53 320 27 320 C -202 322 -202 322 -568 330 L -418 236 L -336 175 Z L -169 21 Z" />
        </svg>
        <svg class="wave-animation wave-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e2ddfc" fill-opacity="1" d="M -388 313 L -687 306 C -616 0 -555 -5 -463 32 L -261 182 C -178 240 -137 249 -25 230 C 85 210 133 132 166 105 C 214 74 267 53 320 80 C 373.3 107 427 181 480 213.3 C 533.3 245 587 235 640 224 C 693.3 213 747 203 800 170.7 C 853.3 139 907 85 960 106.7 C 1013.3 128 1067 224 1120 240 C 1173.3 256 1227 192 1280 144 C 1333.3 96 1387 64 1413 48 L 1440 32 C 1489 3 1506 19 1518 32 C 1535 54 1544 67 1578 97 C 1587 106 1598 111 1619 110 C 1633 108 1637 101.3333 1644 96 C 1651 91 1657 92 1664 96 C 1670 103 1716 128 1750 140 C 1760 144 1773 147 1787 146 C 1799 144 1805 141.3333 1817 131 Q 1823 127 1828 131 C 1833 134.6667 1838 138.3333 1843 142 L 1860 153 Q 1864 155 1869 155 C 1879 152 1883 151 1919 112 C 1942 90 1931 90 1959 101 C 1983 111 2005 112.6667 2031 101 S 2086 119 2109 121 C 2136 112 2136 118 2153 131 C 2185 162 2223 198 2258 232 C 2289 257 2320 289 2348 310 L 1751 318 L 1440 320 L 1413.3 320 C 1386.7 320 1333 320 1280 320 C 1226.7 320 1173 320 1120 320 C 1066.7 320 1013 320 960 320 C 906.7 320 853 320 800 320 C 746.7 320 693 320 640 320 C 586.7 320 533 320 480 320 C 426.7 320 373 320 320 320 C 266.7 320 213 320 160 320 C 106.7 320 53 320 27 320 L -76 320 L -241 317 Z" />
        </svg>
      </div>
      <div class="presentacion-poligono-profesion"></div>
      <!-- Saludo -->
      <div class="presentacion-textos">
      <h1 class="saludo"> Hola, soy </h1>
      <h2 class="nombre"> Germán Avilés </h2>
      </div>
      <!-- Profesion -->
      <div class="presentacion-profesion">
        <span> Desarrollador </span>
        <span> frontend </span>
      </div>
    </section>
    <!-- Experiencia laboral -->
    <section id="experiencia" class="home__experiencia">
      <div class="experiencia-laboral">
        Lorem ipsum,
        dolor sit amet consectetur adipisicing elit.
        Praesentium harum soluta aliquid veritatis in! Cum eos culpa est. Assumenda,
        at suscipit! Quod earum cupiditate sapiente vitae optio fugit enim pariatur!

        Lorem ipsum,
        dolor sit amet consectetur adipisicing elit.
        Praesentium harum soluta aliquid veritatis in! Cum eos culpa est. Assumenda,
        at suscipit! Quod earum cupiditate sapiente vitae optio fugit enim pariatur!

        Lorem ipsum,
        dolor sit amet consectetur adipisicing elit.
        Praesentium harum soluta aliquid veritatis in! Cum eos culpa est. Assumenda,
        at suscipit! Quod earum cupiditate sapiente vitae optio fugit enim pariatur!
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  }
})
export default class Home extends Vue {

  mounted(): void {
    // const miLienzo: any = document.getElementById('primera-curva');
    // console.log('MI lienzo: ', miLienzo);
    // const lapiz = miLienzo.getContext("2d");
    // curva cuadratia
    // lapiz.moveTo(150, 300);
    // lapiz.quadraticCurveTo(300,150,450,300);
    // lapiz.stroke();

    // Curva bezier
    // lapiz.moveTo(50, 200);
    // lapiz.bezierCurveTo(200, 50, 350, 200, 500, 50);
    // lapiz.stroke();

    // var x0 = 50;
    // var y0 = 100;
    // var x1 = 150;
    // var y1 = 100;
    // var x2 = 200;
    // var y2 = 250;
    // lapiz.beginPath();
    // lapiz.strokeStyle = "#fff"
    // lapiz.moveTo(x0,y0);
    // lapiz.arcTo(x1, y1, x2, y2, 150);
    // lapiz.stroke();
    // lapiz.fillStyle = "#fff";
    // lapiz.fill();
    //Para ver como funcionan los puntos de control
  }

}
</script>

<style lang="scss" scoped>

.saludo, .nombre {
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 5px;
}

.nombre {
  letter-spacing: 10px;
}

.home {
  padding: 0;
  .home__presentacion {
    background: var(--primary);
    background: rgb(4,10,36);
    background: linear-gradient(90deg, rgba(4,10,36,1) 0%, rgba(4,13,42,1) 41%, rgba(8,34,61,1) 100%);
    background-attachment: fixed;
    height: calc(100vh - var(--navbar-height) );
    .backgroud-figure {
      position: absolute;
      width: 100%;
      bottom: -6px;
    }
    .presentacion-poligono-profesion {
      position: absolute;
      height: 100%;
      width: 100%;
      background: var(--white);
      clip-path: polygon(0 75%, 50% 100%, 100% 75%, 100% 100%, 0 100%);
      // clip-path: polygon(0 75%, 50% 100%, 100% 75%, 100% 100%, 0 100%);
      top: 0;
      left: 0;
      z-index: 1;
    }
    .presentacion-textos {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }
    .presentacion-profesion {
      position: absolute;
      left: 20px;
      bottom: 20px;
      text-align: center;
      font-weight: 500;
      color: var(--primary);
      z-index: 10;
      user-select: none;
      span {
        display: block;
        font-size: 1.85rem;
        letter-spacing: 2px;
      }
    }
  }
  .home__experiencia {
    background: var(--white);
    color: var(--primary);
    padding: 50px 0 0 0;
  }
}

.wave-1 {
  position: absolute;
  path {
    fill: #e2ddfc99;
  }
}

.wave-2 {
  path {
    fill: #e1dbff;
  }
}


// .wave-animation {
//   animation: move-forever 10s cubic-bezier(.55, .5, .45, .5) infinite;
//   &:nth-child(1) {
//     animation-delay: -2s;
//     animation-duration: 7s;
//   }
//   &:nth-child(2) {
//     animation-delay: -4s;
//     animation-duration: 13s;
//   }
// }

// @keyframes move-forever {
//   0% {
//     transform: translate3d(-90px, 0, 0);
//   }

//   100% {
//     transform: translate3d(85px, 0, 0);
//   }
// }

</style>
