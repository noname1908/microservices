#!/usr/bin/env bash

docker build -t catalog-service .

docker run --name catalog-service -p 3333:3333 -d catalog-service