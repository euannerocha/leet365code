<!DOCTYPE html>
<html>
  <head>
    <title>2D Transform Matrix Cube</title>
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

      function applyMatrix(p, m) {
        return {
          x: p.x * m[0] + p.y * m[2] + m[4],
          y: p.x * m[1] + p.y * m[3] + m[5]
        };
      }

      function getTransformMatrix(angle, scale, translateX, translateY) {
        const cos = Math.cos(angle) * scale;
        const sin = Math.sin(angle) * scale;
        return [
          cos, sin,
         -sin, cos,
         translateX, translateY
        ];
      }

      function drawCube() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const matrix = getTransformMatrix(
          angle,
          1,
          canvas.width / 2 - offset,
          canvas.height / 2 - offset
        );

        const base = [
          { x: -size, y: -size },
          { x: size, y: -size },
          { x: size, y: size },
          { x: -size, y: size }
        ];

        const front = base.map(p => applyMatrix(p, matrix));
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