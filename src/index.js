import "./styles.css";
import { dropAlert } from "./dropdown.js";
import { bullets, next, previous } from "./carousel.js";

dropAlert();
let menuContent = document.getElementById("menuContent");
menuContent.style.visibility = "hidden";

next();
previous();
bullets();