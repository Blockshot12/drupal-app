<h1>React + Drupal 8 API</h1>

This project is a simple test for a React App with Drupal 8 API. The Drupal backend has to be build separately from this repository. There is a simple JSON file included of the Drupal API output inside <b>./src/Data/tickets.json</b>.

<h2>Dependencies</h2>
<ul>
  <li>NPM - NodeJS</li>
  <li>Drupal 8</li>
</ul>

<h2>Installation</h2>
<p>Use the command line to install the app.</p>
```
$ git clone https://github.com/Blockshot12/drupal-app
$ cd drupal-app
$ npm install
$ npm start
```
<p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>

<h3>Sending Feedback</h3>

<p>We are always open to <a href="https://github.com/">your feedback</a>.

<h3>Folder Structure</h3>

<p>After creation, your project should look like this:</p>

```
drupal-app/
  gitIgnore
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    Components/
      Footer/
        Footer.js
      Header/
        Header.js
      Tickets/
        TicketItem.js
        Tickets.js
    Data/
      tickets.json
    styles/
      styles.css
    App.js
    index.js
```

<p>For the project to build, **these files must exist with exact filenames**:</p>
<ul>
  <li>`public/index.html` is the page template;</li>
  <li>`src/index.js` is the JavaScript entry point.</li>
</ul>
<p>You can delete or rename the other files.</p>

<h3>Available Scripts</h3>
<p>In the project directory, you can run:<p>

<h3>npm start</h3>

<p>Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.</p>

<p>The page will reload if you make edits.<br>
You will also see any lint errors in the console.</p>

<h3>npm run build</h3>

<p>Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.</p>

<p>The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!</p>
