# wbfapi
Test Foursquare API

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Requirements

You can run project on OS X that have [bower](http://bower.io#install-bower) and [node with npm](https://nodejs.org/) installed.

1) Install Nodejs (https://nodejs.org/)

2) Install Bower (http://bower.io#install-bower): `sudo npm install -g bower`

3) Install Grunt CLI (http://gruntjs.com/getting-started#installing-the-cli): `sudo npm install -g grunt-cli`

## Running and Testing

1) First we will run `bower install` and `npm install` to install the packages.

If you received an error saying "ERR! cb() never called" run `sudo npm cache clean` and then `npm install` again.


2) Building and Running

This tasks requires you to have Ruby and Sass installed. On OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `sudo gem update` and `sudo gem install sass` to install Sass.

* Run `grunt` for building (will be built in 'dist' folder)
* Run `grunt serve` for preview (will be opened with default browser)

* Running `grunt test` will run the unit tests with karma.

## Project structure

* `/app` -  Project source files
* `/test` - Unit tests
* `/dist` - Built project files (to be compiled)


## My approach

I picked AngularJS  as it's now one of the most advanced technologies for the front end. It allows us to use well known MVC and keep code structure clear separating it from html files. It has low barriers and can be used from small to big projects. It allows to write modern web apps, have good documentation and community.

Yeoman choosed as it's good tool to quickly generate project base with various modules included already.

Sass - one of the pre-processors that can be used in big projects. It supports variables, mixins and lets you write re-usable methods and use logic statements.

Grunt - in these latter days I prefer using Gulp instead as it's using another, more readable structure. Grunt still, was developer first so it have more plugins available. 
