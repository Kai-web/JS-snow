const body = document.body;

function createSnowFlake() {
  const snow_flake = document.createElement('i');
  snow_flake.classList.add('fas');
  snow_flake.classList.add('fa-snowflake');
  // 创建产生的位置
  snow_flake.style.left = Math.random() * window.innerWidth + 'px';
  // 雪花大小
  snow_flake.style.fontSize = Math.random() * 20 + 10 + 'px';
  // 雪花透明度
  snow_flake.style.opacity = Math.random();
  // 动画时间
  snow_flake.style.animationDuration = Math.random() * 3 + 4 + 's';

  document.body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 6000);
}

setInterval(createSnowFlake, 100);
