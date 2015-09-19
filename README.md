# GettingMEAN
A MEAN web app that builds on my Previous DoingAngularRight. This time being a full stack project to help understand the ins and outs of Express and mongoDB

##Angular JS
The basic angular app here follows the structure principal that each part of the site is its own little module linked together by the master module and the index page where they are all called. By dividing the app up in such a way we can easily maintain the app. Each template, controller and service will be contained with in a folder for example the home page is made up of 3 files home.html, homeCtrl.js and homeService.js. These 3 files can be found from public/app/componants/home folder, this means that if i ever need to do something on the home page I will always know where to look and I wont have to scroll through 30 controllers to find the right one.

###Angular and Bootstrap
Angular and jQuery dont always play nice, bootstrap is built with jQuery and so can sometimes cause a little trouble in an angular app. By using the "Bootstrap.ui" we get a full bootstrap library that uses angular to perform any JavaScript tasks. This means less bugs and more productivity. 

##Express JS
Usind Express JS Generator we have a basic app lay out. the public folder holds the angular app. To turn the server on enter this into the cmd line `DEBUG=myapp npm start`
