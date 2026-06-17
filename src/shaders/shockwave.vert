uniform float time;
uniform float progress;

void main() {
    vec3 p = position;
    
    float dist = length(p);
    float wave = sin(dist * 10.0 - time * 15.0) * progress;
    
    p += normal * wave * 3.0;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}