#!/bin/bash

# Create directories and copy images for blog migration

cd /Users/afontcu/dev/afontcu.dev

# Autonomy
mkdir -p public/blog/autonomy
cp content/blog/autonomy/*.jpg public/blog/autonomy/

# Bilbostack-2024
mkdir -p public/blog/bilbostack-2024
cp content/blog/bilbostack-2024/*.jpg public/blog/bilbostack-2024/

# Culture-of-testing
mkdir -p public/blog/culture-of-testing
cp content/blog/culture-of-testing/*.jpg public/blog/culture-of-testing/

# Embrace-unknowns
mkdir -p public/blog/embrace-unknowns
cp content/blog/embrace-unknowns/*.jpg public/blog/embrace-unknowns/

# Jscamp-bcn-2019
mkdir -p public/blog/jscamp-bcn-2019
cp content/blog/jscamp-bcn-2019/*.jpg public/blog/jscamp-bcn-2019/

# Minefield
mkdir -p public/blog/minefield
cp content/blog/minefield/*.png public/blog/minefield/

# Pessimism-driven-development
mkdir -p public/blog/pessimism-driven-development
cp content/blog/pessimism-driven-development/*.png public/blog/pessimism-driven-development/

# Shoe-factory-build-software
mkdir -p public/blog/shoe-factory-build-software
cp content/blog/shoe-factory-build-software/*.jpeg public/blog/shoe-factory-build-software/

echo "All images copied successfully"
