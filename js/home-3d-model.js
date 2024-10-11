//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


//Create a Three.JS Scene
const scene = new THREE.Scene();

//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);


// Loading manager / preloader
let updateLoaderText = document.getElementById("loader-status-text");

const manager = new THREE.LoadingManager();
manager.onStart = function (url, itemsLoaded, itemsTotal) 
{
    updateLoaderText.innerHTML = `Started loading ${url}... <br> Loaded ${itemsLoaded} of ${itemsTotal} files`;
};
manager.onLoad = function () 
{
    updateLoaderText.innerHTML = "Loading complete!";
    document.getElementById('loading-screen').style.display = 'none';
};
manager.onProgress = function (url, itemsLoaded, itemsTotal) 
{
    updateLoaderText.innerHTML = `Loading ${url}... <br> Loaded ${itemsLoaded} of ${itemsTotal} files`;
};
manager.onError = function (url) 
{
    updateLoaderText.innerHTML = `There was an error loading ${url}`;
    console.error('There was an error loading ' + url);
};



//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader( manager );


//Load the file
loader.load(
    "models/dino/scene.gltf",
    function (gltf) 
    {
        //If the file is loaded, add it to the scene
        object = gltf.scene;

        // Set the rotation angle (in radians)
        // object.rotation.x = Math.PI / 2.5; // 45 degrees
        object.rotation.y = 3.8;
        // object.rotation.z = Math.PI / 3.5; // 45 degrees

      scene.add(object);
    },
    function (xhr)
    {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) 
    {
        console.error(error);
    }
);

//Instantiate a new renderer and set its size
const canvas = document.querySelector('#dino-canvas');
const renderer = new THREE.WebGLRenderer({ alpha: true, canvas }); // Alpha: true = transparent background

// renderer.setSize(canvas.innerWidth, canvas.innerHeight);

//Set how far the camera will be from the 3D model
camera.position.z = 50;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 5);
scene.add(ambientLight);


//This adds controls to the camera, so we can rotate / zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);

// to disable zoom
controls.enableZoom = false;

// to disable rotation
// controls.enableRotate = false;

// to disable pan
controls.enablePan = false;

// Fix model blockiness
function resizeRendererToDisplaySize(renderer) 
{
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
}

// Render the scene
function animate() 
{
    requestAnimationFrame(animate);

    // Add rotation animation
    if (object) 
    {
        object.rotation.y += 0.01; // Rotate the model around the Y axis
    }

    
    if (resizeRendererToDisplaySize(renderer))
    {
        // Fix distortion
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }


    renderer.render(scene, camera);
}

//Start the 3D rendering
animate();