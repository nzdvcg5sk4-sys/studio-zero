uniform float time;

void main() {
    vec3 p = position;

    float wave = sin(length(position.xy) * 20.0 - time * 10.0);

    p += normal * wave * 2.0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
