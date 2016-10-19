# Cross-site Scripting (XSS)

Example cross-site scripting vulnerabilities in action.


## Getting Started

The first step before you can start the node app is to install all the necessary node module dependencies for the project. Run the following command from your terminal:
```
npm install
```

Start the normal web server using node:
```
node server.js
```

Once you have started the server, navigate to the following link in your browser:

[http://localhost:3000/](http://localhost:3000/)

You should see a simple search form. Enter some text and hit enter or click the search button. The search results are dummy data that will never change. But, notice how the text you entered is shown in the page. This form is vulnerable to an XSS attack.

Look at the source code of the HTML page. You should see some comments with some example search queries to use. Follow the instructions in the source to see if you can get the XSS attacks to work.
