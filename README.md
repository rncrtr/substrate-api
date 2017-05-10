# Instructions

# Install
$ npm install

# Run in Dev
$ npm run dev

# Production Setup:
$ npm i -g pm2

## Run in Production
$ npm start

# Mongo Database Setup:

## Install it
$ sudo apt-get install -y mongodb-org

## Make data directory
$ mkdir data

## Create the command in the mongod file
$ echo 'mongod --dbpath=data --nojournal --rest "$@"' > mongod

## Change its permissions so it will let you run it
$ chmod a+x mongod

## Run it:
$ ./mongod