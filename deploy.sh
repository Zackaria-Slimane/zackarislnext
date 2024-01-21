#!/bin/bash
cd zackarislnext/
git pull origin main
npm ci
npm build
pm2 restart [zackaria-portfolio]
