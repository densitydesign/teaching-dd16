//Original code 129 bytes https://www.dwitter.net/d/21373 - by Pascal

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;



#define S sin
#define C cos
#define t time
#define X uv.x*32.
#define Y -uv.y*32.


void main( void ) {

	vec2 uv = ( gl_FragCoord.xy-90.90* resolution.xy )/resolution.y-56.1 ;

	float c = S(X/45.+Y/25.)*S(X/50.+t+S(0.1*t+Y/15.));
	float d = C(X/25.+Y/55.)*C(X/50.+t+S(0.1*t+Y/15.));

	gl_FragColor = vec4( vec3( 1., 0.95-c, 0.95-d), 0.75 );



}
