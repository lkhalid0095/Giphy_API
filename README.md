# Giphy API


# Done by : 
* [Farai Mutukumira](https://github.com/FaraiMajor)
* [Lubna Khalid](https://github.com/lkhalid0095)
* [Hyeran Park](https://github.com/HyeranPark99)

<p><a href ="https://lkhalid0095.github.io/Giphy_API/">Click Here</a> for website link<p>

Coding Exercise
For this group assignment, you will create a simple web application that does the following:

## Update .env_sample file

Plase change .env_sample to .env and put your API Key.

## Available Scripts

DO NOT WRITE ALL COMPONENTS IN ONE FILE. Break out components into separate files, and make sure that they are imported/exported properly

Consider using three components:

App Component: has state with GIFS

SearchField Component: has state with search field input

GifCard Component: presentational component receiving GIF info as props

In order to interact with the API, you will need to create a free developer account and create a new project to have an API key generated for you.

To hit various GIPHY API Endpoints, you can use the following paths:

Regular Search: http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY

returns an array of gif objects
Trending Search: http://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY

returns an array of gif objects
Random Search: http://api.giphy.com/v1/gifs/random?api_key=YOUR_API_KEY

returns a singular gif object!