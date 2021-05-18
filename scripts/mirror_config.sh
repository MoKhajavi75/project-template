#!/bin/sh

[ ! -f config.yml ] && exit

cat config.yml \
  | awk "{sub(/token: .*/, \"token: 0\"); print}" \
  > config.example.yml

if [ -n "`git diff config.example.yml 2>&1`" ]; then
  echo "config.example.yml has been modified!\n"
  exit 1;
fi
