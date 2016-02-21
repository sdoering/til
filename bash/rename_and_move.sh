#!/bin/bash

for full_filename in *markdown; do
  extension="${full_filename##*.}"
  filename="${full_filename%.*}"
  new_extension=".txt"
  mkdir -p "$filename"
  mv "$full_filename" "$filename""/"post.txt"
  echo "$filename""/""$filename""$new_extension"
done
