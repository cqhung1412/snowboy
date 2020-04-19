/** sample code for using snowboy library **/
/** @bugsounet **/

const Snowboy = require("./resources/snowboy.js")

var config = {
  debug: true,
  snowboy: {
    audioGain: 2.0,
    applyFrontend: false,
    applyModel: "jarvis",
    applySensitivity: null
  },
  micConfig: {
    recorder: "arecord",
    device: "plughw:1",
  },
}

this.snowboy = new Snowboy(config.snowboy, config.micConfig, (detected) => { detect(detected) }, config.debug )
this.snowboy.init()

function detect(detected) {
  console.log("Make this script if " + detected + " detected")
}
