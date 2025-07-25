<!DOCTYPE html>
<html>
  <head>
    <title>Colored 3D Cube</title>
    <style>
      canvas {
        background: #f0f0f0;
        display: block;
        margin: 50px auto;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas" width="500" height="500"></canvas>

    <script>
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      const size = 100;
      const distance = 3;
      let angleX = 0;
      let angleY = 0;
      let angleZ = 0;

      const cubePoints = [
        { x: -1, y: -1, z: -1 },
        { x:  1, y: -1, z: -1 },
        { x:  1, y:  1, z: -1 },
        { x: -1, y:  1, z: -1 },
        { x: -1, y: -1, z:  1 },
        { x:  1, y: -1, z:  1 },
        { x:  1, y:  1, z:  1 },
        { x: -1, y:  1, z:  1 }
      ];

      const faces = [
        [0, 1, 2, 3], // back
        [4, 5, 6, 7], // front
        [0, 1, 5, 4], // bottom
        [2, 3, 7, 6], // top
        [1, 2, 6, 5], // right
        [0, 3, 7, 4]  // left
      ];

      const faceColors = [
        "#ff6666", "#66ccff", "#66ff66",
        "#cccccc", "#ffcc66", "#cc99ff"
      ];

      function rotate(p, ax, ay, az) {
        let x = p.x, y = p.y, z = p.z;

        let cosX = Math.cos(ax), sinX = Math.sin(ax);
        let cosY = Math.cos(ay), sinY = Math.sin(ay);
        let cosZ = Math.cos(az), sinZ = Math.sin(az);

        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;

        let x2 = x * cosY + z1 * sinY;
        let z2 = -x * sinY + z1 * cosY;

        let x3 = x2 * cosZ - y1 * sinZ;
        let y3 = x2 * sinZ + y1 * cosZ;

        return { x: x3, y: y3, z: z2 };
      }

      function project(p) {
        const scale = size / (p.z + distance);
        return {
          x: p.x * scale + canvas.width / 2,
          y: p.y * scale + canvas.height / 2,
          z: p.z
        };
      }

      function drawFace(points, color) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rotated = cubePoints.map(p => rotate(p, angleX, angleY, angleZ));
        const projected = rotated.map(project);

        const faceDepths = faces.map((face, i) => {
          const avgZ = face.reduce((sum, idx) => sum + rotated[idx].z, 0) / 4;
          return { index: i, depth: avgZ };
        });

        faceDepths.sort((a, b) => b.depth - a.depth);

        for (let { index } of faceDepths) {
          const face = faces[index].map(i => projected[i]);
          drawFace(face, faceColors[index]);
        }
      }

      function animate() {
        angleX += 0.01;
        angleY += 0.015;
        angleZ += 0.02;
        draw();
        requestAnimationFrame(animate);
      }

      animate();
    </script>
  </body>
</html>