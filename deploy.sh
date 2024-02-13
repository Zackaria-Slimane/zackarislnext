#!/bin/bash
cd zackarislnext/ || return
git pull origin main
npm ci &&
	npm build &&
	pm2 restart [zackaria-portfolio]
