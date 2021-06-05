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

## Dev Setup

### NodeJS-Server aufsetzen

#### MAC/Linux
- download des Linux-Bundle
- an gewünschten Ort entpacken ```z.B. ~/foundryVTT/```
- Datenordner anlegen z. B. ```~/foundryVTT/data/fvtt08/foundrydata```  
- in den entpackten Ordner wechseln z. B. ```cd foundryvtt-0.8.5```  
- Nodeserver starten ```node resources/app/main.js --dataPath=$HOME/foundryVTT/data/fvtt08/foundrydata --port=30008```

#### WIN
- download node.js als Setup für Windows und installieren
- download des Linux-Bundle von FoundryVTT
- am gewünschten Ort entpacken z.B.  ```d:\foundry8\foundryVTT```
- Datenordner anlegen z. B. ```d:\foundry8\foundrydata```  
- in der Konsole Nodeserver starten z.B. ```c:\Program Files\nodejs\node.exe d:\foundry8\foundryvtt\resources\app\main.js --dataPath=d:\foundry8\foundrydata```

### Projekt linken

#### MAC/Linux
- Das Repository im Ordner ```system``` (z. B. ```~/foundryVTT/data/fvtt08/foundrydata/Data/systems```) linken z. B. 
  ```ln -s ~/foundryVTT/dev/BrokenCompass/system/ brokencompass```
- ggf. muss der Nodeserver neu gestartet werden

#### WIN
- das Repository in der Konsole (mit Adminrechten) im Ordner ```system``` linken 
- z.B. ```mklink /d d:\nodejs\foundry8\foundrydata\Data\systems\brokencompass d:\dev\brokencompass\system```
- ggf. muss der Nodeserver neu gestartet werden


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
