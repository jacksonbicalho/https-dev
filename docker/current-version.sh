#!/usr/bin/env bash
set -e

yarn version:new --prerelease --dev


# export CURRENT_VERSION=$(cat package.json \
#   | grep version \
#   | head -1 \
#   | awk -F: '{ print $2 }' \
#   | sed 's/[",]//g')

#   echo ${CURRENT_VERSION}

