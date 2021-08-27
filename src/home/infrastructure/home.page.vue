<template>
  <div class="home">
    <!-- Presentación -->
    <section id="presentacion" class="home__presentacion">
      <!-- Fondo -->
      <!-- <div class="backgroud-figure"> -->
        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e2ddfc70" fill-opacity="1" d="M -213 65 C -135 -17 -142 -25 -91 -28 Q -60 -25 -43 -6 L -4 34 L 32 72 C 53.3 96 107 160 160 197.3 C 213.3 235 267 245 320 213.3 C 373.3 181 427 107 480 112 C 533.3 117 587 203 640 213.3 C 693.3 224 747 160 800 160 C 853.3 160 907 224 960 245.3 C 1013.3 267 1067 245 1120 202.7 C 1173.3 160 1227 96 1280 85.3 C 1333.3 75 1387 117 1413 138.7 L 1448 165 L 1522 213 C 1565 242 1611 263 1642 267 Q 1745 266 1796 322 L 1440 320 L 1413.3 320 C 1386.7 320 1333 320 1280 320 C 1226.7 320 1173 320 1120 320 C 1066.7 320 1013 320 960 320 C 906.7 320 853 320 800 320 C 746.7 320 693 320 640 320 C 586.7 320 533 320 480 320 C 426.7 320 373 320 320 320 C 266.7 320 213 320 160 320 C 106.7 320 53 320 27 320 C -202 322 -202 322 -568 330 L -418 236 L -336 175 Z L -169 21 Z" />
        </svg>
        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e2ddfc" fill-opacity="1" d="M -388 313 L -687 306 C -616 0 -555 -5 -463 32 L -261 182 C -178 240 -137 249 -25 230 C 85 210 133 132 166 105 C 214 74 267 53 320 80 C 373.3 107 427 181 480 213.3 C 533.3 245 587 235 640 224 C 693.3 213 747 203 800 170.7 C 853.3 139 907 85 960 106.7 C 1013.3 128 1067 224 1120 240 C 1173.3 256 1227 192 1280 144 C 1333.3 96 1387 64 1413 48 L 1440 32 C 1489 3 1506 19 1518 32 C 1535 54 1544 67 1578 97 C 1587 106 1598 111 1619 110 C 1633 108 1637 101.3333 1644 96 C 1651 91 1657 92 1664 96 C 1670 103 1716 128 1750 140 C 1760 144 1773 147 1787 146 C 1799 144 1805 141.3333 1817 131 Q 1823 127 1828 131 C 1833 134.6667 1838 138.3333 1843 142 L 1860 153 Q 1864 155 1869 155 C 1879 152 1883 151 1919 112 C 1942 90 1931 90 1959 101 C 1983 111 2005 112.6667 2031 101 S 2086 119 2109 121 C 2136 112 2136 118 2153 131 C 2185 162 2223 198 2258 232 C 2289 257 2320 289 2348 310 L 1751 318 L 1440 320 L 1413.3 320 C 1386.7 320 1333 320 1280 320 C 1226.7 320 1173 320 1120 320 C 1066.7 320 1013 320 960 320 C 906.7 320 853 320 800 320 C 746.7 320 693 320 640 320 C 586.7 320 533 320 480 320 C 426.7 320 373 320 320 320 C 266.7 320 213 320 160 320 C 106.7 320 53 320 27 320 L -76 320 L -241 317 Z" />
        </svg>
      <!-- </div> -->
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
        <!-- Canvas lineas -->
        <!-- Opcion time line -->
        <div
          class="contenedor-time-line"
          :id="'contenedor-time-line-' + index"
          v-for="(experiencia, index) of experiencias"
          :key="index"
        >
          <!-- Camino que lleva a la tarjeta -->
          <canvas
            class="canvas-lineas-secuencia"
            :id="'line-from-check-to-card-' + index"
          ></canvas>

          <!-- Tarjeta con información -->
          <div class="informacion-experiencia" :id="'informacion-exp-' + index">
            <div class="card">
              <div class="card-header">
                <div class="contenido-header">
                  <div class="nombre-empresa">
                    <h4> {{ experiencia.empresa }} </h4>
                  </div>
                  <div class="fechas-trabajo">
                    <span class="fecha-inicio"> Jun 06 2008 </span>
                    <span class="fecha-fin"> Jun 06 2006 </span>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="contenido-body">
                  <div class="habilidades-especificas">
                    <ul class="lista-habilidades">
                      <li class="habilidad"> habilidad </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Check-box y linea vertical -->
          <div class="check-box-line">
            <div class="time-line" :id="'line-' + index"></div>
            <input
              type="checkbox"
              :id="'input-' + index"
              :checked="false"
              @change="mostrarOcultarLineaCanvas(index, $event)"
            >
            <label :for="'input-' + index" class="checkbox">
              <div class="checkbox__inner">
                <div class="green__ball" />
              </div>
            </label>
          </div>
        </div>
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
  lastTime        = 0;
  intervaloLinea  = 1;
  checkBoxIndex   = 0;
  idAnimationFrame: number | null = null;
  canvas: any []  = [];

  vertices: any = [
    { x: 625, y : 230 },
    { x: 420, y : 230 },
    { x: 420, y : 60 },
    { x: 320, y : 60 },
  ];
  ctx: any      = null;
  points: any   = [];
  experiencias  = [
    { checked: false, mesesLaborados: 7,  descripcion: '',  empresa: 'Masseq proyectos e ingeniería S.A.S.', urlEmpresa: '', fechaInicio: Date(), fechaFin: Date() },
    { checked: false, mesesLaborados: 15, descripcion: '',  empresa: 'Interredes S.A.S.', urlEmpresa: '', fechaInicio: Date(), fechaFin: Date() },
    { checked: false, mesesLaborados: 5,  descripcion: '',  empresa: 'Sigenia S.A.S.', urlEmpresa: '', fechaInicio: Date(), fechaFin: Date() },
    { checked: false, mesesLaborados: 4,  descripcion: '',  empresa: 'Expansión TI S.A.S.', urlEmpresa: '', fechaInicio: Date(), fechaFin: Date() }
  ];

  mounted(): void {
    this.experiencias.forEach( (item, index) => {
      const contenedor  = document.getElementById(`contenedor-time-line-${index}`);
      const canvas      = document.getElementById(`line-from-check-to-card-${index}`) as HTMLCanvasElement;
      const linea       = document.getElementById(`line-${index}`);
      const exper       = document.getElementById(`informacion-exp-${index}`);
      const esNumeroPar = index%2 === 0;

      if (linea) {
        linea.style.height = `200px`;
      }

      if (exper && canvas) {
        const anchoCanvas = contenedor ? (contenedor.clientWidth * 0.5) : 0;
        const altoCanvas  = contenedor ? contenedor.clientHeight : 0;
        // Asignamos nuevo ancho al canvas
        canvas.width  = anchoCanvas;
        canvas.height = altoCanvas;
        this.crearVerticesYCanvas( index + 1, anchoCanvas, altoCanvas );

        if (esNumeroPar) {
          canvas.classList.add('float-top-left');
          exper.classList.add('float-top-left');
          canvas.style.left = '0';
        } else {
          canvas.classList.add('float-top-right');
          exper.classList.add('float-top-right');
          canvas.style.right = '0';
        }

      }

    });
    this.crearAnimacionLineas();
  }

  crearVerticesYCanvas( index: number, anchoCanvas: number, altoCanvas: number ): void {
    const esNumeroPar = (index % 2 === 0) || false;
    const vertices = this.crearVertices( esNumeroPar, anchoCanvas, altoCanvas );
    const canvas   = {
      ctx: null,
      vertices
    };


    this.canvas.push( canvas );
  }

  crearVertices( esNumeroPar: boolean, anchoCanvas: number, altoCanvas: number ): any[] {
    const vertices: any  = [];
    let puntoX = 0;
    let puntoY = altoCanvas * 0.9;

    if ( esNumeroPar ) {
      puntoX = anchoCanvas * 0.05;
    } else {
      puntoX = anchoCanvas * 0.95;
    }

    for( let i = 1; i <= 4; i++ ) {

      vertices.push({
        x: puntoX,
        y: puntoY,
      });

      if (i === 1) {
        puntoX = esNumeroPar ? anchoCanvas * 0.32 : anchoCanvas * 0.65;
      }

      if (i === 2) {
        puntoY = altoCanvas * 0.2;
      }

      if (i === 3) {
        puntoX = esNumeroPar ? anchoCanvas * 0.5 : anchoCanvas * 0.45;
      }
    }

    return vertices;
  }

  /**
   * @method crearAnimacionLineas()
   * @description Función encargada de crear una animación
   */
  crearAnimacionLineas(): void {
    if (!window.requestAnimationFrame){
      window.requestAnimationFrame = (callback) => {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - ( currTime - this.lastTime));

        this.idAnimationFrame = window.setTimeout( () => {
          callback(currTime + timeToCall);
        }, timeToCall);

        this.lastTime = currTime + timeToCall;
        return this.idAnimationFrame;
      };
    }

    if (!window.cancelAnimationFrame){
      window.cancelAnimationFrame = (id) => {
        this.intervaloLinea = 0;
        clearTimeout(id);
      };
    }
  }

  /**
   * @method mostrarOcultarLineaCanvas()
   * @param index posición del checkbox que ha sido clickeado
   * @param event evento click sobre el checkbox
   * @description Función que muestra y oculta la linea desde el check hacía la tarjeta
   */
  mostrarOcultarLineaCanvas( index: number, event: any ): void {
    this.checkBoxIndex = index;

    event.stopPropagation();
    const canvas  = document.getElementById(`line-from-check-to-card-${index}`) as HTMLCanvasElement;
    const ctx     = canvas.getContext('2d');

    if (ctx) {
      ctx.strokeStyle  = '#005E74';
      ctx.lineWidth    = 1;
      ctx.imageSmoothingEnabled = false;
    }
    this.canvas[ index ].ctx = ctx;

    const checked = event.target.checked;

    if (checked) {
      this.points = this.calcWaypoints( this.canvas[ index ].vertices );
      // extend the line from start to finish with animation
      this.animate();
    } else {
      // Limpiamos el canvas
      this.canvas[ index ].ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.intervaloLinea = 0;
      window.cancelAnimationFrame(this.idAnimationFrame || 0);
    }

  }


  /**
   * @method calcWaypoints()
   * @param vertices arreglo de las vertices en las que se desea dibujar
   * @description Función que calcula los puntos entre vertices
   */
  calcWaypoints( vertices: any[] ): any[] {
    const waypoints = [];
    for (let i = 1; i < vertices.length; i++) {
      const pt0 = vertices[i - 1];
      const pt1 = vertices[i];
      const dx = pt1.x - pt0.x;
      const dy = pt1.y - pt0.y;

      for (let j = 0; j < 100; j++) {
        const x = pt0.x + dx * j / 100;
        const y = pt0.y + dy * j / 100;
        waypoints.push({ x: x, y: y });
      }
    }
    return waypoints;
  }

  /**
   * @method animate()
   * @description Función que anima la linea a graficar
   */
  animate(): void {
    if (this.intervaloLinea < this.points.length - 1) {
      this.idAnimationFrame = requestAnimationFrame( this.animate );
    } else {
      window.cancelAnimationFrame( this.idAnimationFrame || 0 );
    }

    // draw a line segment from the last waypoint
    // to the current waypoint
    this.canvas[ this.checkBoxIndex ].ctx.beginPath();

    const grosorLinea = 9;
    const puntoSiguientes = this.points[ this.intervaloLinea + grosorLinea ];
    const puntoAnteriores = this.points[ this.intervaloLinea ];

    if (puntoSiguientes && puntoAnteriores) {
      this.canvas[ this.checkBoxIndex ].ctx.moveTo(puntoSiguientes.x, puntoSiguientes.y);
      this.canvas[ this.checkBoxIndex ].ctx.lineTo(puntoAnteriores.x, puntoAnteriores.y);
      this.canvas[ this.checkBoxIndex ].ctx.stroke();

      this.intervaloLinea = this.intervaloLinea + 10;
    } else {
      window.cancelAnimationFrame( this.idAnimationFrame || 0 );
      this.intervaloLinea = 0;
    }
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

    .wave {
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 100%;
      z-index: 1;
      // animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      // transform: translate3d(0, 0, 0);
      // background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg') repeat-x; 
      // position: absolute;
      // top: -198px;
      // width: 6400px;
      // height: 198px;
      // animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      // transform: translate3d(0, 0, 0);

      // &:nth-child(1){
      //   fill: #e2ddfc99;
      //   animation: swell 7s ease -1.25s infinite;
      // }

      &:nth-child(2) {
        fill: #e1dbff;
        animation: swell 7s ease -1.25s infinite .2s;
        // animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
      }

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
    position: relative;
    z-index: 100;

    .experiencia-laboral {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: center;
      padding: 20px 0;


      .contenedor-time-line {
        position: relative;
        width: 100%;

        .canvas-lineas-secuencia {
          position: absolute;
        }

        .informacion-experiencia {
          position: absolute;
        }

        .check-box-line {
          display: flex;
          flex-flow: column;
          align-items: center;

          .time-line {
            height: 90px;
            border-left: 3px dashed #040d299c;
          }
        }
      }

    }
  }
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0, 1px,0);
  }
  50% {
    transform: translate3d(0, 25px,0);
  }
}

.float-top-left {
  top: 0;
  left: 40px;
}

.float-top-right {
  top: 0;
  right: 40px;
}

.card {
  min-width: 280px;
  max-width: 400PX;
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fefefe;
  background-clip: border-box;
  border: 0 solid #e0e0e0;
  border-radius: .25rem;
  margin-bottom: 24px;
  padding: 10px;
  box-shadow:
    2px 2px 3px rgba(black, 0.12), 2px 2px 6px rgba(black, 0.05),
		2px 2px 10px rgba(black, 0.025), inset -2px -2px 3px rgba(black, 0.05),
		inset -2px -2px 8px rgba(black, 0.02), inset 1px 3px 3px rgba(white, 0.45),
		inset 3px 8px 25px rgba(white, 0.35), inset 3px 2px 3px rgba(white, 0.35),
		inset 3px 2px 5px rgba(white, 0.2), inset 2px 3px 8px rgba(white, 0.085),
		inset 3px 2px 18px rgba(white, 0.05), inset 2px 3px 25px rgba(white, 0.025),
		inset 8px 8px 18px rgba(white, 0.1), inset 8px 8px 25px rgba(white, 0.05);
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem 1.2rem;
}

.card-header {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 5px;
}

.contenido-header {
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  .nombre-empresa {
    font-size: 1.1rem;
    padding: 0 1px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .fechas-trabajo {
    display: flex;
    flex-flow: row wrap;
    padding: 0 5px;

    span {
      display: inline-block;
      padding: 1px 9px;
      border-radius: 14px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .fecha-inicio {
      margin: 0 5px 0 0;
      background-color: #64718a;
      color: var(--white);
    }

    .fecha-fin {
      margin: 0 0 0 5px;
      background-color: #1f355f;
      color: var(--white);
    }
  }

}

.contenido-body {
  .habilidades-especificas {
    ul.lista-habilidades {
      list-style: none;
      margin: 0;
      padding: 0;
    }
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
// .cont-input-check {
//   position: relative;
//   padding: 30px 0;
//   width: 12.25%;
//   height: auto;
// }

// input[type='checkbox']#checkbox-t+label {
//   border: 1px solid rgb(0, 0, 0);
//   background: tranparent;
//   border-radius: 50%;
// }

// input[type='checkbox']#checkbox-t+label::before {
//   content: '';
//   width: 20px;
//   height: 20px;
//   top: 0;
//   left: 0;
//   bottom: -60px;
//   right: 0;
//   position: absolute;
//   margin: auto;
//   background: rgb(0, 0, 0);
//   border-radius: 50%;
//   transition: 0.2s, ease, all;
// }

// input[type='checkbox']#checkbox-t:checked+label::before {
//   bottom: 0;
// }

input[type="checkbox"] {
	display: none;

	&:checked {
		+ label.checkbox {
			.checkbox__inner {
				.green__ball {
					transform: translate(-50%, -50%) scale(1);
					opacity: 1;
					transition-delay: 15ms;
				}
			}
		}
		~ .checkbox__text {
			opacity: 1;
			.checkbox__text--options {
				span {
					&.off {
						transform: translateY(150%);
						opacity: 0;
					}
					&.on {
						transform: translateY(0%);
						opacity: 1;
					}
				}
			}
		}
	}
}

.checkbox {
	--size: 40px;
  margin: 10px;
	width: var(--size);
	height: var(--size);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: var(--bg);
	box-shadow:
		2px 2px 3px rgba(black, 0.12), 2px 2px 6px rgba(black, 0.05),
		2px 2px 10px rgba(black, 0.025), inset -2px -2px 3px rgba(black, 0.05),
		inset -2px -2px 8px rgba(black, 0.02), inset 1px 3px 3px rgba(white, 0.45),
		inset 3px 8px 25px rgba(white, 0.35), inset 3px 2px 3px rgba(white, 0.35),
		inset 3px 2px 5px rgba(white, 0.2), inset 2px 3px 8px rgba(white, 0.085),
		inset 3px 2px 18px rgba(white, 0.05), inset 2px 3px 25px rgba(white, 0.025),
		inset 8px 8px 18px rgba(white, 0.1), inset 8px 8px 25px rgba(white, 0.05);
	cursor: pointer;

	.checkbox__inner {
		position: relative;
		width: calc(var(--size) / 1.75);
		height: calc(var(--size) / 1.75);
		border-radius: 50%;
		background: var(--bg);
		box-shadow:
			inset 2px 2px 3px rgba(black, 0.12), inset 2px 2px 5px rgba(black, 0.08),
			inset 3px 3px 12px rgba(black, 0.05), inset 4px 5px 16px rgba(black, 0.035),
			inset 0px -1px 2px rgba(white, 0.45), inset -1px -1px 3px rgba(white, 0.45),
			inset -1px -1px 2px rgba(white, 0.2), inset -1px -1px 2px rgba(white, 0.12),
			2px 2px 2px rgba(white, 0.12), 2px 2px 3px rgba(white, 0.1),
			2px 2px 5px rgba(white, 0.08), 6px 6px 15px rgba(black, 0.014),
			8px 8px 18px rgba(black, 0.08), 12px 12px 28px rgba(black, 0.04);

		.green__ball {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(0.5);
			opacity: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background: var(--color-checked);
			box-shadow: inset 0 0 6px rgba(black, 0.12), inset -4px -5px 12px rgba(black, 0.12),
				inset -5px -6px 12px rgba(black, 0.08), inset 0px -6px 18px rgba(black, 0.06);
			transition: transform 250ms var(--transition-easing),
      opacity 300ms var(--transition-easing);
			transition-delay: 50ms;

			&::after {
				content: "";
				position: absolute;
				left: 50%;
				top: 25%;
				transform: translate(-50%, -50%);
				background: #fff;
				width: 35%;
				height: 15%;
				filter: blur(4px);
			}
		}
	}
}

</style>
