#! /usr/bin/env bash
shopt -s globstar
${APP_ROOT}/node_modules/.bin/coffee --compile --bare --map --print app/**/*.coffee > ${APP_ROOT}/site/app.js

