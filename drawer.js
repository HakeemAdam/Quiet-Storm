


const renderer = new THREE.WebGLRenderer({
    antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 1)

const section = document.querySelector("section")
section.appendChild(renderer.domElement)


const label = ".$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~i!lI;:,\"^`'."
const label1 = "...A quiet strom brews..."
const hakeem = "HakeemAdam"
const asciEffect = new AsciiEffect(renderer, label1, {
    invert: true,
    alpha: true,
    resolution: 0.05,
    color: true,
})
asciEffect.setSize(window.innerWidth, window.innerHeight)
//asciEffect.domElement.style.color = 'black'
//asciEffect.domElement.style.backgroundColor = 'black'
section.replaceChild(asciEffect.domElement, renderer.domElement)




const scene = new THREE.Scene()

const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
cam.position.z = -50
cam.lookAt(scene.position)

const light = new THREE.DirectionalLight(0x530000, 2)
light.position.set(0, 0, -1)
scene.add(light)

const addedShapes = []

const animate = function () {
    //renderer.render(scene, cam)
    asciEffect.render(scene, cam);
    requestAnimationFrame(animate)
    //cam.position.setZ(cam.position.z + 1)

    addedShapes.forEach(shape => {
        shape.rotateX(0.005)
        shape.rotateY(0.005)
        shape.rotateZ(0.005)


    })


}

//const TEXT = new THREE.TextGeometry(label)


const createShape = function (x, y) {

    const geometry = new THREE.IcosahedronGeometry(20, 1)
    const material = new THREE.MeshPhongMaterial({ flatShading: true, color: 0xffff00 })

    const shape = new THREE.Mesh(geometry, material)
    // shape.position.set(
    //     10,
    //     10,
    //     5
    // )
    addedShapes.push(shape)
    scene.add(shape)

}



createShape(window.innerWidth / 2, window.innerHeight / 2)


animate()

function onWindowClick(e) {

}

function onWindowResize() {

    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    asciEffect.setSize(window.innerWidth, window.innerHeight);

}
window.addEventListener('resize', onWindowResize);

window.addEventListener('click', onWindowClick);



