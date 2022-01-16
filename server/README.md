<div align="center" id="top"> 
  <img src="https://icon-library.com/images/bank-icon-png/bank-icon-png-2.jpg" alt="Bank API" />

  &#xa0;
</div>

<h1 align="center">Bank API</h1>


<p align="center">

  <img alt="Github top language" src="https://img.shields.io/github/languages/top/orinizri/bankapi?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/orinizri/bankapi?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/orinizri/bankapi?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/orinizri/bankapi?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/orinizri/bankapi?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/orinizri/bankapi?color=56BEB8" /> -->
</p>

<!-- Status -->


<!-- <hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/orinizri" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Management of bank API: Manage Records of clients using a JSON file (sync). 
Each client is organized as follows:
{
  passport_id : 123456,
  deposits : 5000,
  credit : 1000
},

## :sparkles: Features ##

:heavy_check_mark: Load data (internal);\
:heavy_check_mark: Save data (internal);\
:heavy_check_mark: Get all users (get : "/users/:id" ; params: id);\
:heavy_check_mark: Get user by passport id (get : "/users/"; params : id);\
:heavy_check_mark: Add user (post : : "/users/");\
:heavy_check_mark: Deposit (put : "/users/deposit/:id" ; params : id ; query : amount);\
:heavy_check_mark: Withdrawal (put : "/users/withdrawal/:id" ; params : id ; query : amount);\
:heavy_check_mark: Update credit (put : "/users/updateCredit/:id"; params : id ; query : amount);\
:heavy_check_mark: Transfer deposits between two clients (put : "/transfer/" ; params : id ; query : amount);

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [Postman](https://www.postman.com/)


## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/orinizri/bankapi

# Access
$ cd bankapi

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT.


Made with :heart: by <a href="https://github.com/orinizri" target="_blank">Ori Nizri Tal</a>

&#xa0;

<a href="#top">Back to top</a>
