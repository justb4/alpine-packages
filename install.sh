#!/bin/bash

if ! [ -x "$(command -v apk)" ]; then
  echo 'Error: operating system not supported. Please use Alpine Linux, or install ogr2ogr manually. On macOS, this is most easily accomplished by doing `brew tap osgeo/osgeo4mac` followed with `brew install gdal2 --with-libkml`' >&2
  exit 0
fi

apk update
apk add packages/x86_64/gdal-2.1.3-r1.apk --allow-untrusted