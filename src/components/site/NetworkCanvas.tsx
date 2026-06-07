import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Restrained WebGL background: a slowly rotating wireframe sphere of points
 * with connecting lines (corporate networks). Responds to ambient mouse.
 */
export function NetworkCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Sphere of points
    const N = 220;
    const positions = new Float32Array(N * 3);
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < N; i++) {
      // golden-spiral distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.6;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x0b132b,
      size: 0.022,
      transparent: true,
      opacity: 0.9,
    });
    group.add(new THREE.Points(pGeom, pMat));

    // Connecting lines (nearest neighbours)
    const linePos: number[] = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        if (pts[i].distanceTo(pts[j]) < 0.55) {
          linePos.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const lGeom = new THREE.BufferGeometry();
    lGeom.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    const lMat = new THREE.LineBasicMaterial({
      color: 0x1c2541,
      transparent: true,
      opacity: 0.18,
    });
    group.add(new THREE.LineSegments(lGeom, lMat));

    // Resize
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Mouse
    const target = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = (t: number) => {
      group.rotation.y += 0.0015;
      group.rotation.x += (target.y - group.rotation.x) * 0.02;
      group.rotation.z += ((-target.x) - group.rotation.z) * 0.02;
      const s = 1 + Math.sin(t * 0.0004) * 0.02;
      group.scale.setScalar(s);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
      renderer.dispose();
      pGeom.dispose();
      lGeom.dispose();
      pMat.dispose();
      lMat.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}