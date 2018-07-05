#!/usr/bin/env bash

eval $(docker-machine env)

array=(
    './movies-service'
    './cinema-catalog-service'
)

cd ..

for ((i = 0; i < ${#array[@]}; ++i)); do
    cd ${array[$i]}
    cd src
    ./start-service.sh
    cd ..
    cd ..
done