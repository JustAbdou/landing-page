#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const privacyFile = path.join(distDir, 'privacy-policy.html');
const privacyDir = path.join(distDir, 'privacy-policy');
const privacyIndex = path.join(privacyDir, 'index.html');

// .htaccess file paths
const htaccessSource = path.join(__dirname, '..', 'public', '.htaccess');
const htaccessDest = path.join(distDir, '.htaccess');

console.log('🔄 Reorganizing files for LWS hosting structure...');

try {
  // Create privacy-policy directory if it doesn't exist
  if (!fs.existsSync(privacyDir)) {
    fs.mkdirSync(privacyDir, { recursive: true });
    console.log('✅ Created privacy-policy directory');
  }

  // Move privacy-policy.html to privacy-policy/index.html
  if (fs.existsSync(privacyFile)) {
    fs.renameSync(privacyFile, privacyIndex);
    console.log('✅ Moved privacy-policy.html to privacy-policy/index.html');
  } else {
    console.log('❌ privacy-policy.html not found');
  }

  // Copy .htaccess file for LWS server configuration
  if (fs.existsSync(htaccessSource)) {
    fs.copyFileSync(htaccessSource, htaccessDest);
    console.log('✅ Copied .htaccess with LWS Panel + ChefFlow rules');
    console.log('ℹ️  If you have existing .htaccess on server, merge the rules manually');
  } else {
    console.log('⚠️  .htaccess not found - server may need manual configuration');
  }

  console.log('🎉 LWS hosting structure ready!');
  console.log('📁 Structure:');
  console.log('   dist/index.html → https://chefflowapp.net/');
  console.log('   dist/privacy-policy/index.html → https://chefflowapp.net/privacy-policy/');

} catch (error) {
  console.error('❌ Error reorganizing files:', error);
  process.exit(1);
}
