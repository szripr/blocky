#version 100

precision mediump float;

uniform sampler2D u_texture;

varying vec2 v_uvs;

void main() {
    gl_FragColor = texture2D(u_texture, v_uvs);
}
