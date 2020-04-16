---
name: Install Mac Mini for Le Bijou Apartment
about: Steps for creating a task for setting up a new Mac Mini for Le Bijou Apartments
title: Install Mac Mini for Le Bijou Lintheschergasse Airhome23.5 LG23.5
labels: ''
assignees: ''

---

**Apartment name for Mac mini**
E.g. lbiotaorionis

**DB name**
E.g. lblinth235-prod

**Checklist**
- [ ] Install latest macOS 
- [ ] Install TeamViewer

**Change computer/hostname**
- [ ] Mac-mini:~ james$ scutil --set ComputerName ?
- [ ] Mac-mini:~ james$ scutil --set LocalHostName  ?
- [ ] Mac-mini:~ james$ scutil --set HostName  ?
- [ ] Mac-mini:~ james$ dscacheutil -flushcache

**Install HomeBrew**
- https://brew.sh/
- [ ] brew upgrade
 
**PM2 Setup**
- [ ] npm install pm2 -g
- [ ] pm2 start caffeinate
- [ ] pm2 dump
- [ ] pm2 startup
  
- [ ] lbiotaorionis:~ james$ pm2 startup
[PM2] Init System found: launchd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/usr/local/Cellar/node/10.4.0/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup launchd -u james --hp /Users/james
lbiotaorionis:~ james$

- [ ] pm2 save

**Sounds**
- [ ]  -> Disable all input/output sounds
  
**Security and Privacy**
- [ ]  -> Disable remote control infrared receiver 

**Energy Saver**
- [ ] 	-> Startup automatically after power failure 

**Setup qJamesAppBackend**
- [ ] cd /Users/james
- [ ] mkdir workspace
- [ ] cd workspace/
- [ ] git clone https://github.com/honato11/qJamesAppBackend.git
- [ ] nvm install 8.8.0
- [ ] nvm use 8.8.0
- [ ] ./setup_main_nodocker.sh
