<!DOCTYPE html>
<html>
  <head>
    <title>Cube Outline 2D</title>
    <style>
      canvas {
        background: #f0f0f0;
        display: block;
        margin: 50px auto;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas" width="400" height="400"></canvas>

    <script>
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      const offset = 50;

      const front = [
        { x: 100, y: 100 },
        { x: 200, y: 100 },
        { x: 200, y: 200 },
        { x: 100, y: 200 }
      ];

      const back = front.map(p => ({
        x: p.x + offset,
        y: p.y + offset
      }));

      function drawLine(p1, p2) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      for (let i = 0; i < 4; i++) {
        drawLine(front[i], front[(i + 1) % 4]);
      }

      for (let i = 0; i < 4; i++) {
        drawLine(back[i], back[(i + 1) % 4]);
      }

      for (let i = 0; i < 4; i++) {
        drawLine(front[i], back[i]);
      }
    </script>
  </body>
</html>