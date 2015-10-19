#!/bin/bash
npm install
grunt less
cd ./public/
webpack
npm start&grunt watch
