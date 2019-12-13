const test = require("../lib/index");
const createCamera = require("3d-view-controls");
const createAxes = require("gl-axes3d");
const perspective = require("gl-mat4/perspective");
const canvas = document.createElement("canvas");
canvas.style.border = "1px solid";
canvas.width = 500;
canvas.height = 500;
/** @type {WebGLRenderingContext} */
const gl = canvas.getContext("webgl");
document.body.append(canvas);

const camera = createCamera(canvas, {
  eye: [50, 50, 50]
});
const axes = createAxes(gl, {
  bounds: [
    [-5, -5, -5],
    [5, 5, 5]
  ]
});
const image = new Image();
image.onload = () => {
  const plane = new test.GLPlane({
    gl,
    texture: image,
    opacity: 0.9,
    points: [
      [0, 0, 0],
      [0, 2, 0],
      [2, 2, 0],
      [2, 0, 0]
    ]
  });
  const p1 = new test.GLPlane({
    gl,
    texture: image,
    opacity: 0.5,
    points: [
       [0,0,0],
       [0,0,2],
       [2,0,2],
       [2,0,0]
    ]
  })
  function render() {
    requestAnimationFrame(render);

    if (camera.tick()) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      axes.draw({
        projection: perspective(
          [],
          Math.PI / 4,
          canvas.width / canvas.height,
          0.01,
          1000
        ),
        view: camera.matrix
      });
     gl.enable(gl.BLEND)
     gl.blendEquation(gl.FUNC_ADD);
     gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
     gl.disable(gl.CULL_FACE)
     p1.draw({
        projection: perspective(
          [],
          Math.PI / 4,
          canvas.width / canvas.height,
          0.01,
          1000
        ),
        view: camera.matrix
      })
      plane.draw({
        projection: perspective(
          [],
          Math.PI / 4,
          canvas.width / canvas.height,
          0.01,
          1000
        ),
        view: camera.matrix
      });
    }
  }
  render();
};
image.src = "./texture.png";
