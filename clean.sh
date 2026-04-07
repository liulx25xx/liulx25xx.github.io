#!/bin/bash

cd /Users/nnnnm/Documents/trae_projects/GitHub/devfarouk-main

used_files=(
"aftereffects.svg"
"azure.png"
"claudecode-color.svg"
"css3.svg"
"easyvibe.png"
"figma.svg"
"future.png"
"futurelab.svg"
"github.svg"
"hardware.png"
"helloclaw.png"
"html5.svg"
"huggingface.svg"
"illustrator.svg"
"image1.jpg"
"image2.jpg"
"image3.jpg"
"image4.jpg"
"java.svg"
"javascript.svg"
"lab1.png"
"lab2.jpg"
"linkedIn.svg"
"message-programming.svg"
"mysql.svg"
"nolibox.svg"
"pandas.svg"
"pattern-4.svg"
"photoshop.svg"
"powerbi.svg"
"pycharm.svg"
"python.svg"
"pytorch.svg"
"tensorflow.svg"
"trae-color.svg"
"unity.svg"
"vr.png"
"vscode.svg"
"xd.svg"
"yanzhi.png"
"zhipu.svg"
"devtracy.png"
"Resume.pdf"
"profile-bg.svg"
"claude.svg"
"trae.svg"
"profile-bg.png"
"phone.png"
)

if [ -f "public/devfarouk.png" ]; then
    mv public/devfarouk.png public/devtracy.png
fi

for file in public/*.{png,jpg,webp,svg} public/svgs/*.{png,jpg,webp,svg}; do
    [ -e "$file" ] || continue
    filename=$(basename "$file")
    
    used=false
    for used_file in "${used_files[@]}"; do
        if [ "$filename" == "$used_file" ]; then
            used=true
            break
        fi
    done
    
    if [ "$used" == false ]; then
        echo "Deleting unused file: $file"
        rm "$file"
    fi
done