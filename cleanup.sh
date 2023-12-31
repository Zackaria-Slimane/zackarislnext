#!/bin/bash
echo "Navigating to the root of the project..."
cd  .
echo "Removing the .next folder..."
rm -rf .next
echo "Removing the node_modules folder..."
rm -rf node_modules
echo "Installing dependencies ..."
npm ci
npm run dev
echo "Cleanup completed successfully."