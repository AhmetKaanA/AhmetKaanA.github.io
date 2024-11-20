---
layout: page
title: Stabilization of a Smart Beam with a Tip Mass
description: a project with a background image
img: assets/img/wdpBeamMass.png
importance: 1
category: Wolfram Demonstration Projects
related_publications: true
---
This demonstration project explore a magnetizable smart (piezoelectric) beam model of unit length subjected to a dynamic tip load. There are significant interactions between electromagnetic and acoustic waves, characterized by differences in wave propagation speeds. The yellow strips on the top and bottom surfaces of the beam represent electrodes that are perfectly bonded to the piezoelectric material. The blue section represents a tip mass 
m
 which dynamically couples with the beam's strain at the tip. Use the sliders to adjust default material parameters. The initialization code has detailed instructions.
The system employs a non-collocated observer-controller design. Two controllers positioned at the right end manage mechanical and electromagnetic vibrations using applied voltage and strain controllers, while the observer dynamics at the left tip guide these controllers. The first two gauges track error terms—the difference between observation and control systems—measuring the left tip velocity and total current. The third and fourth gauges represent controller dynamics, showing the right tip velocity and 
η
-dynamics which describe the combined effects of the tip load and controllers. Simulations are performed over a 
1
0-second interval for preset initial conditions.
This Demonstration highlights the efficacy of the observer-controller system in stabilizing both mechanical and electromagnetic vibrations, validating theoretical results[1, 2]. Through the applied voltage and strain controllers, the system achieves rapid stabilization, underscoring the potential practical applications of the proposed control strategy in advanced piezoelectric devices.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}
