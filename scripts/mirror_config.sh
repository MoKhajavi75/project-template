#!/bin/bash

source "$(dirname "$0")/__styles__.sh"

# Check to see if the config.yml file exists
[ ! -f config.yml ] && exit 0

# Replace value with empty string
sed 's/: .*/: x/gm' <config.yml >config.example.yml

# Check for changes
if [[ $(git diff --exit-code config.example.yml) ]]; then
  echo -e "${ERROR} ${B}config.example.yml${N} has been modified.\n"
  exit 1
fi
