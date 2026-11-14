import three;
import graph3;
size(7cm, 0);
currentprojection = orthographic(5, 3, 2.5);

// Cilindro vertical de radio r y altura h.
real r = 1.25;
real h = 2.8;
int n = 72;
path3 base = (r*cos(0), r*sin(0), 0);
path3 tapa = (r*cos(0), r*sin(0), h);
for (int i = 1; i <= n; ++i) {
  real t = 360*i/n;
  base = base -- (r*cos(t), r*sin(t), 0);
  tapa = tapa -- (r*cos(t), r*sin(t), h);
}
base = base -- cycle;
tapa = tapa -- cycle;

// Superficie lateral y las dos bases.
surface lateral = surface(new triple(pair uv) {
  real t = 360*uv.x;
  return (r*cos(t), r*sin(t), h*uv.y);
}, (0,0), (1,1), 72, 8, Spline);
draw(lateral, surfacepen=material(rgb("4682b4")+opacity(0.72), emissivepen=rgb("4682b4")*0.45));
draw(surface(base), surfacepen=material(rgb("5e4fa2")+opacity(0.8), emissivepen=rgb("5e4fa2")*0.45));
draw(surface(tapa), surfacepen=material(rgb("6a9fca")+opacity(0.88), emissivepen=rgb("6a9fca")*0.45));

// Aristas superior e inferior.
draw(base, gray(0.25)+0.7pt);
draw(tapa, gray(0.25)+0.7pt);
draw((r,0,0)--(r,0,h), gray(0.25)+0.7pt);

// Radio en la base visible y altura al costado del cilindro.
draw((0,0,0)--(r,0,0), red+1.1pt, Arrow3(5));
label("$r$", (r/2,-0.14,0), red);
draw((r+0.28,0,0)--(r+0.28,0,h), red+1.1pt, Arrows3(5));
label("$h$", (r+0.43,0,h/2), red);

draw(Label("$x$", EndPoint), O -- (1.9, 0, 0), black+0.6pt, Arrow3(5));
draw(Label("$y$", EndPoint), O -- (0, 1.5, 0), black+0.6pt, Arrow3(5));
draw(Label("$z$", EndPoint), O -- (0, 0, 3.5), black+0.6pt, Arrow3(5));
limits((-1.8,-1.7,0),(2.2,1.8,3.4));
