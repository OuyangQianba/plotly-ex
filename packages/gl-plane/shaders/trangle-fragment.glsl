#extension GL_OES_standard_derivatives : enable

precision highp float;

uniform sampler2D texture;
uniform float opacity;
varying vec2 f_uv;

void main() {
  if(opacity == 0.0) {
    discard;
  }
  gl_FragColor = opacity * texture2D(texture,vec2(f_uv.x,1.0 - f_uv.y));
}
