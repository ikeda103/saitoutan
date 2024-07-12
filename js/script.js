document.addEventListener('DOMContentLoaded', () => {
  const speed = 1.2;

  function calculateWaveProperties() {
    const screenWidth = window.innerWidth;
    let waveHeight, waveLength;

    if (screenWidth < 600) {
      waveHeight = 10;
      waveLength = 40;
    } else if (screenWidth < 900) {
      waveHeight = 15;
      waveLength = 60;
    } else {
      waveHeight = 20;
      waveLength = 80;
    }

    return { waveHeight, waveLength };
  }

  function drawWave(canvas, fillColor, offset) {
    const ctx = canvas.getContext('2d');
    const { waveHeight, waveLength } = calculateWaveProperties();

    function animateWave() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        let y = waveHeight * Math.sin((x + offset) / waveLength);
        ctx.lineTo(x, canvas.height / 2 + y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();

      offset += speed;
      requestAnimationFrame(animateWave);
    }

    animateWave();
  }

  // waveCanvasの設定
  const canvas = document.getElementById('waveCanvas');
  let offset = 0;
  drawWave(canvas, '#fff', offset);

  // waveCanvasBlueの設定
  const canvasBlue = document.getElementById('waveCanvasBlue');
  let offsetBlue = 0;
  drawWave(canvasBlue, '#069FDC', offsetBlue);

  // ウィンドウリサイズ時に波のプロパティを再計算
  window.addEventListener('resize', () => {
    drawWave(canvas, '#fff', offset);
    drawWave(canvasBlue, '#069FDC', offsetBlue);
  });
});
