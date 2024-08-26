// src/index.ts
import './index.css';

import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('gggg');
  gsap.to('.box', { x: 300, duration: 5 });
});
