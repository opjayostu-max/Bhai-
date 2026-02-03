function toggleTheme() {
  document.body.classList.toggle("light");
}

window.addEventListener("load", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(360, 360);
  document.getElementById("logo3d").appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 1.6, 0.6),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
  );
  scene.add(body);

  const play = new THREE.Mesh(
    new THREE.ConeGeometry(0.35, 0.8, 3),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );
  play.rotation.z = Math.PI / 2;
  play.position.z = 0.4;
  scene.add(play);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enablePan = false;

  function animate() {
    requestAnimationFrame(animate);
    body.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});