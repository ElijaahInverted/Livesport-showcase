const fs = require('fs');
const zlib = require('zlib');

async function download() {
  try {
    const res = await fetch('https://api.anthropic.com/v1/design/h/zkIf0qQk2-j7ZGGMxXuBkQ?open_file=Livesport+Landing.html');
    const buffer = await res.arrayBuffer();
    // Save the raw buffer (tar.gz usually) to design.tar.gz
    fs.writeFileSync('design.tar.gz', Buffer.from(buffer));
    console.log('Download complete');
  } catch (err) {
    console.error(err);
  }
}

download();
