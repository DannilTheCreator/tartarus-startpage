#!/bin/bash

cd ~/tartarus-startpage || exit
python3 -m http.server 8080 &
sleep 2  # подождать, пока сервер запустится
