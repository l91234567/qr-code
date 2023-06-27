var qr = require('qr-image');
var fs = require('fs')
const path = require('path')
const redis = require("redis");

const client = redis.createClient(6379);

client.connect();


module.exports = {
  getQRCode: async (req, res) => {
    const {text} = req.body;

    var data = await client.get(text)
    if(data !== null) {

      res.send(data)
    }else {
      // // uncomment this to save in local
      // var qr_png = qr.image(text, { type: 'png' });
      // qr_png.pipe(fs.createWriteStream(path.join(__dirname, `./QRImages/${text}.png`)));


      // turn into svg string
      var svg_string = qr.imageSync(text, { type: 'svg' });
      // set a cache to speed up request seed
      client.set(text, svg_string, 'EX', 600)

      res.send(svg_string)
    }



  }
}