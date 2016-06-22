var extras = require('aframe-extras');
AFRAME.registerComponent('velocity', extras.math.velocity); // Register a single component.
extras.physics.registerAll();                               // Register a particular package, and its dependencies.
extras.registerAll();    