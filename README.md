# wigwam-design
Wigwam Design Website

All code for the Wigwan Design website.

This is a nodejs app with a client react app

###Project Structure

```
.
+-- app.js // Promise based server start up
+-- client
|   +-- app
|
+-- server
|   +-- src
|       |
|       +-- assets // fonts, static images and so on
|       +-- css // bootstrap and other vendor css files
|       +-- img // images for the static portion of the site
|       +-- routes
|           |
|           +-- controllers
|               |
|               +-- handlers // files in here are auto routed and required
|       +-- utils
|       +-- views
|
|   +-- dependencies.js // Convienient place to require dependencies
|   +-- index.js // returns express app and depedencies
|
+-- gulpfile // build process 

```



