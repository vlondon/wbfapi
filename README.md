# wbfapi
Test Foursquare API

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Requirements

You can run project on OS X that have [bower](http://bower.io#install-bower) and [node with npm](https://nodejs.org/) installed.

1) Install Nodejs (https://nodejs.org/)
2) Install Bower(http://bower.io#install-bower): `sudo npm install -g bower`

## Running and Testing

1) First we will run `bower install` and `npm install` to install the packages.
If you received an error saying "ERR! cb() never called" run `sudo npm cache clean` and then `npm install` again.

2) Building and Running project
This tasks requires you to have Ruby and Sass installed. On OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `sudo gem update —system` and `sudo gem install sass` to install Sass.

* Run `grunt` for building (will be built in 'dist' folder)
* Run `grunt serve` for preview (will be opened with default browser)

* Running `grunt test` will run the unit tests with karma.

## Project structure

* `/app` -  Project source files
* `/test` - Unit tests
* `/dist` - Built project files (to be compiled)
