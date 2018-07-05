#!/bin/bash

docker build -t movies-service .

docker run --name movies-service -l=apiRoute='/movies' -p 3001:3333 -d movies-service