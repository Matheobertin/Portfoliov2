import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js'; // Assurez-vous que le chemin est correct

// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth - 30, window.innerHeight - 20);
document.body.appendChild(renderer.domElement);

const loader1 = new GLTFLoader();
let mixer;
let action;
// Durée totale de l'animation (en secondes)
let animationDuration;
let scene1;
// Chargez le modèle .glTF
loader1.load('demarage.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire
    scene1 = gltf.scene;
    scene1.scale.set(10, 10, 10);
    scene1.position.set(0, 0, 0);
    animationDuration = gltf.animations[0].duration;
    // Ajoutez le modèle à la scène
    scene.add(scene1);

    // Si vous avez des animations dans le fichier .glTF, vous pouvez également les gérer ici
    mixer = new THREE.AnimationMixer(scene1);
    action = mixer.clipAction(gltf.animations[0]);
    action.setLoop(THREE.LoopOnce); // Définissez la boucle pour jouer une seule fois
    action.clampWhenFinished = true; // Empêchez l'animation de retourner à son état initial
    action.play();
});


// Création de la lumière principale (soleil)
const pointLight = new THREE.PointLight(0xffffff, 40, 20);
pointLight.position.set(3.5, 4, 3.5); // Position de la lumière

scene.add(pointLight);

// Création de la lumière principale (soleil)
const pointLight1 = new THREE.PointLight(0xffffff, 40, 20);
pointLight1.position.set(-3.5, 4, 3.5); // Position de la lumière

scene.add(pointLight1);

// Création de la lumière principale (soleil)
const pointLight2 = new THREE.PointLight(0xffffff, 40, 20);
pointLight2.position.set(0, 4, -3.5); // Position de la lumière

scene.add(pointLight2);

const sceneWidth = 10;
const sceneHeight = 10;

const loader = new GLTFLoader();
loader.load('personnage.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    character.add(gltf.scene);

});

// Création du personnage
const characterGeometry = new THREE.BoxGeometry(0, 0, 0);
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
character.position.set(0, -5, 0.86); // Position initiale du personnage
character.scale.set(1,1,1);
character.castShadow = true; // Activer la projection d'ombres du personnage

// Ajoutez le personnage au groupe
scene.add(character);

const loader2 = new GLTFLoader();
loader2.load('tableau.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    tableau.add(gltf.scene);

});

// Création du tableau
const tableauGeometry = new THREE.BoxGeometry(0, 0, 0);
const tableauMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const tableau = new THREE.Mesh(tableauGeometry, tableauMaterial);
tableau.position.set(0, 0, 0); // Position initiale du personnage
tableau.scale.set(1,1,1);
tableau.castShadow = true; // Activer la projection d'ombres du personnage

// Ajoutez le personnage au groupe
scene.add(tableau);

const loader3 = new GLTFLoader();
loader3.load('bureau.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    bureau.add(gltf.scene);

});

// Création du bureau
const bureauGeometry = new THREE.BoxGeometry(0, 0, 0);
const bureauMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const bureau = new THREE.Mesh(bureauGeometry, bureauMaterial);
bureau.position.set(0, 0, 0); // Position initiale du personnage
bureau.scale.set(1,1,1);
bureau.castShadow = true; // Activer la projection d'ombres du personnage
scene.add(bureau);

const loader7 = new GLTFLoader();
loader7.load('armoire.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    armoire.add(gltf.scene);

});

// Création de l'armoire
const armoireGeometry = new THREE.BoxGeometry(0, 0, 0);
const armoireMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const armoire = new THREE.Mesh(armoireGeometry, armoireMaterial);
armoire.position.set(0, 0, 0); // Position initiale du personnage
armoire.scale.set(1,1,1);
armoire.castShadow = true; // Activer la projection d'ombres du personnage
scene.add(armoire);


const loader4 = new GLTFLoader();
loader4.load('livre.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    livre.add(gltf.scene);

});

// Création du bureau
const livreGeometry = new THREE.BoxGeometry(0, 0, 0);
const livreMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const livre = new THREE.Mesh(livreGeometry, livreMaterial);
livre.position.set(0, 0, 0); // Position initiale du personnage
livre.scale.set(1,1,1);
livre.castShadow = true; // Activer la projection d'ombres du personnage
bureau.add(livre);

const loader5 = new GLTFLoader();
loader5.load('chariot.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    chariot.add(gltf.scene);

});

// Création du bureau
const chariotGeometry = new THREE.BoxGeometry(0, 0, 0);
const chariotMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const chariot = new THREE.Mesh(chariotGeometry, chariotMaterial);
chariot.position.set(0, 0, 0); // Position initiale du personnage
chariot.scale.set(1,1,1);
chariot.castShadow = true; // Activer la projection d'ombres du personnage
bureau.add(chariot);

const loader6 = new GLTFLoader();
loader6.load('fleur.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    fleur.add(gltf.scene);

});

// Création du bureau
const fleurGeometry = new THREE.BoxGeometry(0, 0, 0);
const fleurMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const fleur = new THREE.Mesh(fleurGeometry, fleurMaterial);
fleur.position.set(0, 0, 0); // Position initiale du personnage
fleur.scale.set(1,1,1);
fleur.castShadow = true; // Activer la projection d'ombres du personnage
bureau.add(fleur);

let tableauClicked = false;
let bureauClicked = false;
let armoireClicked = false;
let livreClicked = false;
let chariotClicked = false;
let fleurClicked = false;


renderer.domElement.addEventListener('click', (event) => {

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    // Coordonnées du clic de souris
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Configurer le rayon pour le lancer depuis la caméra
    raycaster.setFromCamera(mouse, camera);

    // Trouver tous les objets intersectés par le rayon
    const intersects_tableau = raycaster.intersectObjects([tableau], true);
    const intersects_bureau = raycaster.intersectObjects([bureau], true);
    const intersects_armoire = raycaster.intersectObjects([armoire], true);

    const textOverlay = document.getElementById("textOverlay");

    textOverlay.style.display = "none";
    if (tableauClicked) {
        tableauClicked = false;
    }if (bureauClicked) {
        const intersects_livre = raycaster.intersectObjects([livre], true);
        const intersects_chariot = raycaster.intersectObjects([chariot], true);
        const intersects_fleur = raycaster.intersectObjects([fleur], true);

        textOverlay.style.display = "none";
        bureauClicked = false;
        if (livreClicked){
            livreClicked = false;
            bureauClicked = true;
        }
        if (chariotClicked){
            chariotClicked = false;
            bureauClicked = true;
        }
        if (fleurClicked){
            fleurClicked = false;
            bureauClicked = true;
        }
        else{
            if(intersects_livre.length > 0){
                textOverlay.innerHTML = "This is the book information. You can add your own text here.";
                textOverlay.style.top = window.innerHeight/2 - 100+ "px";
                textOverlay.style.left = window.innerWidth/2 - 100 + "px";
                livreClicked = true;
                textOverlay.style.display = "block";
                bureauClicked = true;
            }
            if(intersects_chariot.length > 0){
                textOverlay.innerHTML = "This is the chariot information. You can add your own text here.";
                textOverlay.style.top = window.innerHeight/2 - 100+ "px";
                textOverlay.style.left = window.innerWidth/2 - 100 + "px";
                chariotClicked = true;
                textOverlay.style.display = "block";
                bureauClicked = true;
            }
            if(intersects_fleur.length > 0){
                textOverlay.innerHTML = "This is the fleur information. You can add your own text here.";
                textOverlay.style.top = window.innerHeight/2 - 100+ "px";
                textOverlay.style.left = window.innerWidth/2 - 100 + "px";
                fleurClicked = true;
                textOverlay.style.display = "block";
                bureauClicked = true;
            }
        }
    }

    else {

        if (intersects_tableau.length > 0) {
            tableauClicked = true;
            camera.position.copy(tableau.position);
            camera.position.add(new THREE.Vector3(-4.3, 1.15, 3.45));
            camera.rotation.set(-Math.PI / 25, Math.PI / 7.25, Math.PI / 60);
        }
        if (intersects_bureau.length > 0) {
            camera.position.copy(bureau.position);
            camera.position.add(new THREE.Vector3(-3.225, 1.1, -1.4));
            camera.rotation.set(-Math.PI / 6, Math.PI / 7.5, Math.PI / 15);
            bureauClicked = true;
        }
    }
});

let isMouseOverTableau = false;
let isMouseOverBureau = false;
let isMouseOverLivre = false;
let isMouseOverChariot = false;
let isMouseOverFleur = false;

renderer.domElement.addEventListener('mousemove', (event) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    if(tableauClicked === false && bureauClicked === false) {

        const intersects_tableau = raycaster.intersectObject(tableau, true);
        const intersects_bureau = raycaster.intersectObject(bureau, true);

        if (intersects_tableau.length > 0) {
            if (!isMouseOverTableau) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverTableau = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                tableau.position.y += 0.1;
            }
        } else {
            if (isMouseOverTableau) {
                // La souris a quitté la zone de l'objet
                isMouseOverTableau = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                tableau.position.y -= 0.1;
            }
        }

        if (intersects_bureau.length > 0) {
            if (!isMouseOverBureau) {
                isMouseOverBureau = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //bureau.scale.set(0.9, 0.9, 0.9);
                bureau.position.y += 0.1;
            }
        } else {
            if (isMouseOverBureau) {
                isMouseOverBureau = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //bureau.scale.set(1, 1, 1);
                bureau.position.y -= 0.1;
            }
        }
    }
    if(bureauClicked){
        const intersects_livre = raycaster.intersectObject(livre, true);
        const intersects_chariot = raycaster.intersectObject(chariot, true);
        const intersects_fleur = raycaster.intersectObject(fleur, true);

        if (intersects_livre.length > 0) {
            if (!isMouseOverLivre) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverLivre = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                livre.position.y += 0.05;
            }
        } else {
            if (isMouseOverLivre) {
                // La souris a quitté la zone de l'objet
                isMouseOverLivre = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                livre.position.y -= 0.05;
            }
        }
        if (intersects_chariot.length > 0) {
            if (!isMouseOverChariot) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverChariot = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                chariot.position.y += 0.05;
            }
        } else {
            if (isMouseOverChariot) {
                // La souris a quitté la zone de l'objet
                isMouseOverChariot = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                chariot.position.y -= 0.05;
            }
        }
        if (intersects_fleur.length > 0) {
            if (!isMouseOverFleur) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverFleur = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                fleur.position.y += 0.05;
            }
        } else {
            if (isMouseOverFleur) {
                // La souris a quitté la zone de l'objet
                isMouseOverFleur = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                fleur.position.y -= 0.05;
            }
        }
    }
});


// Configuration de la caméra
camera.position.set(0, 2, 3);

// Créez un objet pour suivre l'état des touches
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    ' ': false, // Touche d'espace pour le saut
};

document.addEventListener('keydown', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = false;
    }
});

// Fonction pour mettre à jour les mouvements du personnage
const characterSpeed = 0.035; // Vitesse de déplacement
const characterPosition = character.position.clone();
let hauteurPersonnage = 0;
let indice = true;
// Fonction pour mettre à jour les mouvements du personnage
function updateCharacterMovement(delta) {
    // Vérifier si l'animation de démarrage n'est pas encore terminée
    let moveForward;
    let moveBackward;
    let moveLeft;
    let moveRight;
    moveForward = keys['ArrowUp'];
    moveBackward = keys['ArrowDown'];
    moveLeft = keys['ArrowLeft'];
    moveRight = keys['ArrowRight'];
    if (animationFinished && !bureauClicked && !tableauClicked) {
        moveForward = keys['ArrowUp'];
        moveBackward = keys['ArrowDown'];
        moveLeft = keys['ArrowLeft'];
        moveRight = keys['ArrowRight'];
    }

    let deltaX = 0;
    let deltaZ = 0;

    if (moveForward) {
        deltaZ -= characterSpeed;
    }
    if (moveBackward) {
        deltaZ += characterSpeed;
    }
    if (moveLeft) {
        deltaX -= characterSpeed;
    }
    if (moveRight) {
        deltaX += characterSpeed;
    }

    characterPosition.x += deltaX;
    characterPosition.z += deltaZ;

    character.rotation.y = Math.atan2(deltaX, deltaZ);

    // Vérification de la position du personnage par rapport aux limites de la scène
    if (characterPosition.x < -sceneWidth / 2 - 0.75) {
        characterPosition.x = -sceneWidth / 2 - 0.75;
    }
    if (characterPosition.x > sceneWidth / 2 + 0.75) {
        characterPosition.x = sceneWidth / 2 + 0.75;
    }
    if (characterPosition.z > sceneHeight / 2 + 0.75) {
        characterPosition.z = sceneHeight / 2 + 0.75;
    }
    if (characterPosition.z < -sceneHeight / 2 - 0.75) {
        characterPosition.z = -sceneHeight / 2 - 0.75;
    }

    // Vérification de la position du personnage par rapport à la plateforme du milieu de la scène
    const characterAboveTableau = (
        characterPosition.x >= -5.5 &&
        characterPosition.x <= -3.5 &&
        characterPosition.z >= 2 &&
        characterPosition.z <= 3.5
    );

    if (characterAboveTableau) {
        characterPosition.x -= deltaX;
        characterPosition.z -= deltaZ;
    }

    const characterAboveBureau = (
        characterPosition.x >= -4.75 &&
        characterPosition.x <= -2.5 &&
        characterPosition.z >= -3 &&
        characterPosition.z <= -1.25
    );

    if (characterAboveBureau) {
        characterPosition.x -= deltaX;
        characterPosition.z -= deltaZ;
    }

    // Vérification de la position du personnage par rapport à la plateforme du milieu de la scène
    const characterAbovePlatform = (
        characterPosition.x >= -0.85 &&
        characterPosition.x <= 0.85 &&
        characterPosition.z >= -0.85 &&
        characterPosition.z <= 0.85
    );

    if (characterAbovePlatform) {
        characterPosition.y =  hauteurPersonnage;
    } else {
        characterPosition.y = hauteurPersonnage - 0.2; // Hauteur par défaut

    }

    character.position.x = characterPosition.x;
    character.position.z = characterPosition.z;
    character.position.y = characterPosition.y;

    // Mise à jour du temps écoulé
    elapsedTime += delta;
    // Vérification si l'animation est terminée
    if (elapsedTime >= animationDuration && indice) {
        animationFinished = true;
        indice = false;
        const loader2 = new GLTFLoader();
        loader2.load('fin.glb', (nouvelleGltf) => {
            scene.remove(scene1);
            nouvelleGltf.scene.scale.set(10, 10, 10);
            nouvelleGltf.scene.position.set(0, 0, 0);
            // Ajoutez la nouvelle animation à la scène
            scene.add(nouvelleGltf.scene);
            // Configurez la nouvelle animation comme vous l'avez fait précédemment
            mixer = new THREE.AnimationMixer(nouvelleGltf.scene);
            action = mixer.clipAction(nouvelleGltf.animations[0]);
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.play();
        });
        // Réinitialiser le temps écoulé si nécessaire
        elapsedTime = 0;
    }
}
const clock = new THREE.Clock();
let animationFinished = false;
// Temps écoulé depuis le début de l'animation
let elapsedTime = 0;
// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    if(mixer){
        mixer.update(delta);
    }

    // Mettre à jour les mouvements du personnage
    updateCharacterMovement(delta);

    if(animationFinished){
        character.scale.set(1, 1, 1);
    }else{
        character.scale.set(10, 10, 10);
    }
    if(!tableauClicked && !bureauClicked && !livreClicked){
        camera.position.copy(character.position);
        camera.position.add(new THREE.Vector3(0, 1.5, 2.5));
        camera.lookAt(character.position);
    }


    renderer.render(scene, camera);
}

renderer.shadowMap.enabled = true; // Activer le rendu des ombres
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Type d'ombrage (peut être ajusté selon vos préférences)
animate();
