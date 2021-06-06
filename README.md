# The Broken Compass game system for FoundryVTT

<p align="center">
<img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/anvil-vtt/BrokenCompass"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/anvil-vtt/BrokenCompass"> <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/anvil-vtt/BrokenCompass/total" /> <img alt="GitHub Releases" src="https://img.shields.io/github/downloads/anvil-vtt/BrokenCompass/latest/total" /> <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/anvil-vtt/BrokenCompass?label=latest%20release" /> 
</p>
<p align="center">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/anvil-vtt/BrokenCompass/BrokenCompass%20CI"> <img alt="GitHub" src="https://img.shields.io/github/license/anvil-vtt/BrokenCompass"> <a href="https://github.com/anvil-vtt/BrokenCompass/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/anvil-vtt/BrokenCompass"></a> <a href="https://github.com/anvil-vtt/BrokenCompass/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/anvil-vtt/BrokenCompass"></a> <a href="https://github.com/anvil-vtt/BrokenCompass/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/anvil-vtt/BrokenCompass"></a> 
</p>

This is the **Broken Compass system** for FoundryVTT. 


## Installation
**Manifest URL**: https://github.com/anvil-vtt/BrokenCompass/releases/latest/download/system.json

For manual installation, use the provided manifest URL in the "*Install System*" popup window while managing game systems.


## Developer setup

### Important console commands

| Command | Description |
|---------|-------------|
|`npm install`|Install/Update node modules after new dependencies were added by other developers|
|`npm install --save-dev <package-name>`| Installs a new node module and saves it as a dev-dependency (inside package.json)|
|`npm run build`|Builds the project and puts everything inside `dist`|
|`npm run watch`|Same as `npm run build` but watches for changes and rebuilds automatically|
|`npm run start`|Starts the webpack dev-server on port `8080` which allows developers to use HMR|
|`npm run prettier`|Checks if every file is formatted in the right way|
|`npm run prettier:fix`|Automatically fixes the code style for most files inside the project|

### Install Node.js version of FoundryVTT

#### Linux / MacOS
- Ensure that Node.js is installed (version requirement 14+)
- Download the linux version of FoundryVTT
- Extract the downloaded archive, e.g. to `~/foundryvtt/`
- Create an empty data folder, e.g `~/foundryvttdata/`
- Start FoundryVTT from your console via `node ~/foundryvtt/resources/app/main.js --dataPath=$HOME/foundryvttdata`

#### Windows
- Ensure that Node.js is installed (version requirement 14+)
- Download the linux version of FoundryVTT
- Extract the downloaded archive, e.g. to `D:\foundryvtt\`
- Create an empty data folder, e.g `D:\foundryvttdata\`
- Start FoundryVTT from your console via `C:\Program Files\nodejs\node.exe D:\foundryvtt\resources\app\main.js --dataPath=D:\foundryvttdata\`

### Installing the system for development

- Request write access to the repository or fork the project
- Clone the repository, e.g. via console `git clone git@github.com:anvil-vtt/BrokenCompass.git ~/BrokenCompass`

### Link the new system to your FoundryVTT data folder

#### Linux / MacOS
  - `cd ~/foundryvttdata/Data/systems`
  - When using build/watch: `ln -s ~/BrokenCompass/dist/ brokencompass`
  - When using the webpack devserver: `ln -s ~/BrokenCompass/system/ brokencompass`
  
#### Windows
  - `cd D:\foundryvttdata\Data\systems`
  - When using build/watch: `mklink /d D:\foundryvttdata\Data\systems\brokencompass D:\BrokenCompass\dist`
  - When using the webpack devserver: `mklink /d D:\foundryvttdata\Data\systems\brokencompass D:\BrokenCompass\system`
  

## License

MIT License

Copyright (c) 2021 Patrick Bauer and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
