import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export type ItemModelGLTF = GLTF & {
	nodes: {
		gold: THREE.Mesh;
		silver: THREE.Mesh;
		diamonds: THREE.Mesh;
		diamonds001: THREE.Mesh;
		diamonds002: THREE.Mesh;
		diamonds003: THREE.Mesh;
		diamonds004: THREE.Mesh;
		diamonds005: THREE.Mesh;
		
	};
	materials: {
		gold: THREE.MeshStandardMaterial;
		silver: THREE.MeshStandardMaterial;
		diamonds: THREE.MeshStandardMaterial;
		diamonds001: THREE.MeshStandardMaterial;
		diamonds002: THREE.MeshStandardMaterial;
		diamonds003: THREE.MeshStandardMaterial;
		diamonds004: THREE.MeshStandardMaterial;
		diamonds005: THREE.MeshStandardMaterial;
	};
};

