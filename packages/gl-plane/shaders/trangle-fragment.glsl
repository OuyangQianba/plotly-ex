#extension GL_OES_standard_derivatives : enable

precision highp float;

uniform sampler2D texture;
varying vec2 f_uv;

void main() {
   gl_FragColor = texture2D(texture,vec2(f_uv.x,1.0 - f_uv.y));
}
