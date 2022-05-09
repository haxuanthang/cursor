import { gsap } from "gsap";
import { lerp, getMousePos, getSiblings } from "./utils";

// Grab the mouse position and set it  to mouse state
// Lấy vị trí chuột và đặt nó ở trạng thái chuột

let mouse = { x: 0, y: 0 };
window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));

export default class Cursor {
  constructor(el) {
    // Varibles
    this.Cursor = el;
    this.Cursor.style.opacity = 0;
    this.Item = document.querySelectorAll(".hero-inner-link-item");
    this.Hero = document.querySelector(".hero-inner");
  }
}
