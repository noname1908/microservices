#!/usr/bin/env bash

docker build -t catalog-service .

docker run --name catalog-service -l=apiRoute='/cinemas' -p 3002:3333 -d catalog-service