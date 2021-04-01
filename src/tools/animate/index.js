import Vue from 'vue';
import com from './index.vue';

const Animate = Vue.extend(com);

export default function ({
  startX, startY, endX, endY, src, width, height,
}) {
  // 1、函数进来的时候，先创建一个元素，在商品原来的位置。
  const app = new Animate({
    el: document.createElement('div'),
    data() {
      return {
        moveX: startX,
        moveY: startY,
        sx: 1,
        sy: 1,
        opacity: 1,
        exist: true,
        src,
        width,
        height,
      };
    },
  });
  // 2、然后把元素插入到body中
  document.body.appendChild(app.$el);
  // 3、在0秒后，也就是创建好后立马改变位置，使得动画产生。
  setTimeout(() => {
    app.moveX = endX;
    app.moveY = endY;
    app.sx = 0.1;
    app.sy = 0.1;
    app.opacity = 0;
  }, 0);
  // 4、1秒后删除元素，完成动画。
  setTimeout(() => {
    app.exist = false;
  }, 1000);
}
