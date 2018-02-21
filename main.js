
//we have a scene, camera and renderer

//scene : whatever we need to see
var scene = new THREE.Scene();
//camera : to focus on special area of the scene
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,10000);
//renderer : to render the scene
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//draw the shape you want 
var geometry = new THREE.BoxGeometry(600, 600, 600, 15, 15, 15);
//color the cube
var material = new THREE.MeshBasicMaterial({color: 0x6593f5, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
//add the cube to the scene 
scene.add(cube);

//move the cube along the z-axis
camera.position.z = 1000;

// call render func
render();
//call move fun when ever the user press a key
document.onkeypress = move;




// function to move the cube whereever you want 
function move(e){
	// move the cube depends on the key pessed 
	switch(e.keyCode) {
    case 119://w up toward
        cube.position.z = cube.position.z + 200;
        break;
    case 97://A left
        cube.position.x = cube.position.x - 200;
        break;
    case 115://s down toward
    	cube.position.z = cube.position.z - 200;
        break;
    case 100:// D right
        cube.position.x = cube.position.x + 200;
        break;
    case 120://xdown
    	cube.position.y = cube.position.y - 200;
        break;
    case 99://c up
        cube.position.y = cube.position.y + 200;
        break;
}
}

// function to render the scene and rotate it in place 
function render() {
   requestAnimationFrame(render);

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

   renderer.render(scene, camera);
}


