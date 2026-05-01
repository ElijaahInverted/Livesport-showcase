const { execSync } = require('child_process');

try {
  execSync('tar -xzf design.tar.gz -C .', { stdio: 'inherit' });
  console.log('Extraction complete');
} catch (e) {
  console.error(e);
}
