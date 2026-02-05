const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45,1,0.1,1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setSize(360,360);
document.getElementById("logo3d").appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff,0.8));

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2.5,1.6,0.6),
  new THREE.MeshStandardMaterial({color:0xff0000})
);
scene.add(cube);

function animate(){
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  renderer.render(scene,camera);
}
animate();