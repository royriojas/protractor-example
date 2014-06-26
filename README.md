protractor-example
==================

Simple example of using protractor to test pages that are not made with Angular

# Instructions

if you're in an os other than osx you will need to remove the node_modules folder and do a clean `npm i`

````
npm i
grunt
````

running grunt will verify yous js files, beautify them and then run protractor

## grunt exec:protactor:suiteName

will execute the tests inside the given folder suiteName (inside the e2e/suites folder)

````
grunt exec:protractor:stack-overflow
````

The command above will start the demo test in the stack-overflow folder inside the suites folder
