#!/bin/bash

for full_filename in *markdown; do
  extension="${full_filename##*.}"
  filename="${full_filename%.*}"
  mkdir -p "$filename"
  mv "$full_filename" "$filename"
done
