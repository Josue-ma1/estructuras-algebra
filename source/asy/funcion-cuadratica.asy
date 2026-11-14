
import graph;
size(10cm, 7cm);

real f(real x) { return x^2; }

xlimits(0, 2);
ylimits(0, 4.5);

for (int i = 0; i <= 2; ++i)
  draw((i,0)--(i,4.4), gray(0.85)+0.4bp);

for (int j = 0; j <= 4; ++j)
  draw((0,j)--(2,j), gray(0.85)+0.4bp);

draw((0,0)--(2.15,0), black+0.8bp, Arrow(6));
draw((0,0)--(0,4.65), black+0.8bp, Arrow(6));

label("$x$", (2.15,0), E, fontsize(8));
label("$y$", (0,4.65), N, fontsize(8));

for (int i = 0; i <= 2; ++i)
  label("$"+string(i)+"$", (i,0), S, fontsize(7));

for (int j = 1; j <= 4; ++j)
  label("$"+string(j)+"$", (0,j), W, fontsize(7));

draw(graph(f, 0, 2), blue+1.2bp);

dot((0,0), blue+2bp);
dot((1,1), blue+2bp);
dot((2,4), blue+2bp);

