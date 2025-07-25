<!DOCTYPE html>
<html>
  <head>
    <title>Rotating Cube Outline 2D</title>
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

      const size = 50;
      const offset = 50;
      let angle = 0;

      function rotatePoint(x, y, theta) {
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        return {
          x: x * cos - y * sin,
          y: x * sin + y * cos
        };
      }

      function drawCube() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const front = [
          rotatePoint(-size, -size, angle),
          rotatePoint(size, -size, angle),
          rotatePoint(size, size, angle),
          rotatePoint(-size, size, angle)
        ].map(p => ({
          x: p.x + canvas.width / 2 - offset,
          y: p.y + canvas.height / 2 - offset
        }));

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
          drawLine(back[i], back[(i + 1) % 4]);
          drawLine(front[i], back[i]);
        }
      }

      function animate() {
        angle += 0.01;
        drawCube();
        requestAnimationFrame(animate);
      }

      animate();
    </script>
  </body>
</html>