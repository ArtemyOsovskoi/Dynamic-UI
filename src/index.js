import "./styles.css";
import { dropAlert } from "./dropdown.js";
import { next, previous } from "./carousel.js";

dropAlert();
let menuContent = document.getElementById("menuContent");
menuContent.style.visibility = "hidden";

next();
previous();