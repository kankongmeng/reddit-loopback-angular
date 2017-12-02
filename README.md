# reddit-loopback-react-angular

Example of basic **Reddit Clone** application developed with **LoopBack Framework 3.X**, **AngularJS1** and **ReactJS ES6**.

### Features:
* Maintain a list of topics and its upvotes/downvotes.
* Allow the user to submit topics.
* A "topic" is simply a string that does not exceed 255 characters.
* Allow the user to upvote or downvote the same topic multiple times.
* Always return a list of top 20 topics (sorted by upvotes, descending) on the homepage.
* Design an in-memory data structure (shared by the same process as your application).
* Code comments and documentation: For the key functionalities.
* Implemented Karma-Jasmine TDD and BDD (Auto Unit Test).
* Responsive bootstrap design.
* Code follow ESLint standards.
* Use webpack-merge for easily switching environment between production and development.
* Support API explorer with Loopback Framework.
* Support search post by title. (AngularJS)
* Support filter by votes, title(A-Z), date. (AngularJS)


### Change The Code! Installation Step Below: <br>
My main goal for this is to give new programmers some code to look at and talk about.

*Open your terminal*
```bash
$ git clone https://github.com/kankongmeng/reddit-loopback-react-angular.git
$ cd reddit-loopback-react-angular
$ npm install
$ npm build
$ node .
$ npm test
```
(Remarks: *npm test* is for execute Karma-Jasmine and ESLint test.)


### Reddit Clone Angular Main Page <br>
Live Demo: https://reddit-loopback-angular-react.herokuapp.com/ <br>
Localhost: https://localhost:3000 <br>
![Angular Page](https://raw.githubusercontent.com/kankongmeng/reddit-loopback-react-angular/master/screenshot/reddit-clone-angular-main-screenshot.JPG)


### Reddit Clone React Main Page <br>
Live Demo: https://reddit-loopback-angular-react.herokuapp.com/react.html <br>
Localhost: https://localhost:3000 <br>
![React Page](https://raw.githubusercontent.com/kankongmeng/reddit-loopback-react-angular/master/screenshot/reddit-clone-react-main-screenshot.JPG)


### Reddit Clone Loopback API Explorer Page <br>
Live Demo: https://reddit-loopback-angular-react.herokuapp.com/explorer/#/Post <br>
Localhost: https://localhost:3000/explorer/ <br>
![Loopback API Explorer Page](https://raw.githubusercontent.com/kankongmeng/reddit-loopback-react-angular/master/screenshot/reddit-clone-api-explorer-main-screenshot.JPG)


### Deploy?

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

*[learn more about](https://devcenter.heroku.com/articles/app-json-schema)*
