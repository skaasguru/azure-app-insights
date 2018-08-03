# Hello World - Application Insights

This sample demonstrates a Hello World node.js app for Application Insights.

## Setup

```bash
sudo su
apt-get update

# Install Nodejs
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
apt-get update
bash nodesource_setup.sh
sudo apt-get install nodejs

node -v
npm -v

# Clone source code
git clone https://github.com/skaasguru/azure-app-insights

cd azure-app-insights

# Replace Application Insights Instrumentation Key
vim index.js
vim index.html

# Start Server
npm install
npm start

```
