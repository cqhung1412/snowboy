/** sample code for using snowboy library **/
/** @bugsounet **/

const Snowboy = require("./resources/snowboy.js")

var config = {
  debug: true,
  snowboy: {
    audioGain: 2.0,
    Frontend: false,
    Model: "smart_mirror",
    Sensitivity: null
  },
  micConfig: {
    recorder: "arecord",
    device: "plughw:1",
  },
}

this.snowboy = new Snowboy(config.snowboy, config.micConfig, (detected) => { detect(detected) }, config.debug )
this.snowboy.init()
this.snowboy.start()

function detect(detected) {
  console.log("Make your proper script if " + detected + " detected")
}
