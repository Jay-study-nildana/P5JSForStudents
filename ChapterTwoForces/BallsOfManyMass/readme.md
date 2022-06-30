# Balls of Many Masses

A quick implementation of Objects with different masses. As aways, some of my own remixes.

![image info](BallsofManyMasses_800px.png)

# Key settings

1. let realGravity = true; Turning this on and off will give you different styles of gravity. 
1. On would mean, you get gravity just like in real life. All objects irrespective of their mass, will have the same gravity and fall at the same speed. 
1. Off would mean, we get a more, mass based gravity. Each object falls and bounces at its own speed. It looks cool, but is not realistic.
1. gravityY - sets the actual gravity. Increase to make it faster. reduce to make it slower.
1. let realFriction = false; This turns on and off friction. This will slowly reduce the friction in the environment. The bounce reduces with each bounce and eventually, if the simulation runs long enough, the balls will settle down at the end.
1. velocity.copy(). This code is important when applying forces. If we dont copy, we end up directly manipulating the force, and it becomes zero right away. So, the objects sink and deposit themselves at the bottom.

# Files in the project

1. sketch.js - the main file where you write your code.
1. globalvariables.js - the file where I keep all global variables. Yes, in JavaScript we dont really recommend global variables. However, we are doing animation here. some rules need to be broken.
1. mover.js - where I put all the 'ball' things.

# References

1. https://natureofcode.com/book/chapter-2-forces/
1. https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp02_forces/NOC_2_01_forces
1. https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp02_forces/NOC_2_03_forces
1. https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp02_forces/NOC_2_02_forces

# Hire Me

I work as a full time freelance software developer and coding tutor. Hire me at [UpWork](https://www.upwork.com/fl/vijayasimhabr) or [Fiverr](https://www.fiverr.com/jay_codeguy).

# Hobbies

I try to maintain a few hobbies.

1. Podcasting. You can listen to my [podcast here](https://stories.thechalakas.com/listen-to-podcast/).
1. Photography. You can see my photography on [Unsplash here](https://unsplash.com/@jay_neeruhaaku).
1. Digital Photorealism 3D Art and Arch Viz. You can see my work on this on [Adobe Behance](https://www.behance.net/vijayasimhabr).
1. Writing and Blogging. You can read my blogs. I have many medium Publications. [Read them here](https://medium.com/@vijayasimhabr).

# important note

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

I can be reached through my website - [Jay's Developer Profile](https://jay-study-nildana.github.io/developerprofile)