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

#### MAC
- download des Linux-Bundle
- an gewünschten Ort entpacken ```z.B. ~/foundryVTT/```
- Datenordner anlegen z. B. ```~/foundryVTT/data/fvtt08/foundrydata```  
- in den entpackten Ordner wechseln z. B. ```cd foundryvtt-0.8.5```  
- Nodeserver starten ```node resources/app/main.js --dataPath=$HOME/foundryVTT/data/fvtt08/foundrydata --port=30008```

### Projekt linken

#### MAC
- Das Repository im Ordner ```system``` (z. B. ```~/foundryVTT/data/fvtt08/foundrydata/Data/systems```) linken z. B. 
  ```ln -s ~/foundryVTT/dev/BrokenCompass/system/ brokencompass```
- ggf. muss der Nodeserver neu gestartet werden
