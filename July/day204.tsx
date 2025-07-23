<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>3D Cube with 4x4 Matrix</title>
  <style>
    body { margin: 0; background: black; }
    canvas { display: block; margin: auto; background: #111; }
  </style>
</head>
<body>
<canvas id="canvas" width="600" height="600"></canvas>
<script>
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const vertices = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1]
];

const faces = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 1, 5, 4],
  [2, 3, 7, 6],
  [1, 2, 6, 5],
  [0, 3, 7, 4]
];

const light = [0, 0, -1];

function createRotationYMatrix(angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    [cos, 0, -sin, 0],
    [0, 1, 0, 0],
    [sin, 0, cos, 0],
    [0, 0, 0, 1]
  ];
}

function multiplyMatrixAndPoint(m, p) {
  const [x, y, z] = p;
  const xp = m[0][0]*x + m[0][1]*y + m[0][2]*z + m[0][3];
  const yp = m[1][0]*x + m[1][1]*y + m[1][2]*z + m[1][3];
  const zp = m[2][0]*x + m[2][1]*y + m[2][2]*z + m[2][3];
  const wp = m[3][0]*x + m[3][1]*y + m[3][2]*z + m[3][3];
  return [xp / wp, yp / wp, zp / wp];
}

function project([x, y, z]) {
  const scale = 400 / (z + 5);
  return [x * scale + width / 2, y * scale + height / 2];
}

function normalize([x, y, z]) {
  const len = Math.sqrt(x*x + y*y + z*z);
  return [x/len, y/len, z/len];
}

function dot(a, b) {
  return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
}

function getNormal(v0, v1, v2) {
  const U = [v1[0]-v0[0], v1[1]-v0[1], v1[2]-v0[2]];
  const V = [v2[0]-v0[0], v2[1]-v0[1], v2[2]-v0[2]];
  const nx = U[1]*V[2] - U[2]*V[1];
  const ny = U[2]*V[0] - U[0]*V[2];
  const nz = U[0]*V[1] - U[1]*V[0];
  return normalize([nx, ny, nz]);
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  const t = performance.now() / 1000;
  const rotationMatrix = createRotationYMatrix(t);
  const transformed = vertices.map(v => multiplyMatrixAndPoint(rotationMatrix, v));

  const faceData = faces.map(face => {
    const points3D = face.map(i => transformed[i]);
    const projected = points3D.map(project);
    const normal = getNormal(...points3D);
    const brightness = Math.max(0, dot(normal, light));
    const avgZ = points3D.reduce((sum, v) => sum + v[2], 0) / 4;
    return { projected, brightness, avgZ };
  });

  faceData.sort((a, b) => b.avgZ - a.avgZ);

  faceData.forEach(({ projected, brightness }) => {
    ctx.beginPath();
    projected.forEach(([x, y], i) => {
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    const shade = Math.floor(255 * brightness);
    ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  });

  requestAnimationFrame(draw);
}

draw();
</script>
</body>
</html>