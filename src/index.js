import "./styles.css";
import WebGLFont from "./components/WebGLFont";
import { shaders } from "./components/import_shaders";

//Parameters to be passed to the main font 
const type = new WebGLFont({
  word: "WINTER\n OF CODE",
  position: [-335, -35, 0],
  rotation: [Math.PI, 0, 0],
  zoom: 200,
  vertex: shaders[2].vertex,                   
  fragment: shaders[2].fragment,
  index: 2                                // Index required for shaders that require different(slighlty changed) three-bmfont MSDF shader for generating text
});                         