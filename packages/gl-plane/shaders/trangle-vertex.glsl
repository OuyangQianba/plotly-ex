precision highp float;

attribute vec3 position;//, normal;
attribute vec2 uv;

uniform mat4 model
           , view
           , projection;

varying vec2 f_uv;

vec4 project(vec3 p) {
  return projection * view * model * vec4(p, 1.0);
}

void main() {
  gl_Position = project(position);
  f_uv = uv;
}
