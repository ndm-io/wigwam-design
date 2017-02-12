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
|               |
|               +-- methods // exported methods to make controllers testable
|       +-- utils
|       +-- views
|
|   +-- dependencies.js // Convienient place to require dependencies
|   +-- index.js // returns express app and depedencies
|
+-- gulpfile // build process 

```

###Controllers / Handlers

.js files in <code>/server/src/routes/controllers/handlers</code> should all
have the following structure:

```
{
    method: 'post', //or get
    route: '/api...',
    dependencies: [
        'required-module1' // array of dependency names (gets required and injected into handler)
    ]
    handler: function (dependencies) { .. } // a fn which 
                                            // returns fn(req, res, next) for
                                            // controller pattern
    
}
```

All *.js files in the handler directory get exported and setup with the
route specified in the <code>route</code> property. The handler function gets
its dependencies injected in the format:

```
{
    twilio: [function],
    object-assign: [function]
}
```

So to access a dependency within the controller (req, res, next) fn
access the dependencies such as:

<code>
const client = dependencies.twilio.RestClient()
</code>

