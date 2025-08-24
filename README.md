## API Explorer: Mastering RESTFUL Connections
This is a modern movie discovery application built with Next.js, TypeScript, and Tailwind CSS. 
The application allows users to browse movies from the MoviesDatabase API, view movie details, and search for films by year or genre. 
The project focuses on creating a responsive, well-structured web application with proper API integration and TypeScript typing.


Key features of the API include:

* Fetching popular, trending, or filtered movie titles
* Searching by title, year, or genre
* Retrieving detailed information for a single movie
* Pagination support for browsing results
* Well-documented endpoints for flexible integration

## Version
API Version: v1 (as per MoviesDatabase API documentation)

## Available Endpoints
| Endpoint | Description |
|:--------:|:-----------:|
|/titles |Fetches a list of movies (supports filters)|
|/titles/{id}| 	Get details for a single movie by ID|
|/titles/search/title/{title} | Search for movies by title|
|/titles/utils/genres|List available movie genres|

 ## Request and Response Format
 Typical Request (example POST to /titles):
 ``` javascript
const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5ef2eda572mshfd24569f3431d2bp1b6ffdjsne631067968de',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
```
 ## Authentication
 All requests must include the following headers:
   * x-rapidapi-host: moviesdatabase.p.rapidapi.com
   * x-rapidapi-key: YOUR_API_KEY
Your API key is stored in a local .env.local file as: ini, Copy, Edit
MOVIE_API_KEY=YOUR_API_KEY
(Never commit this file to source control.)

## Error Handling
Common error codes:
  * 401 Unauthorized: Missing or invalid API key
  * 500 Internal Server Error: Server-side problem
  * 429 Too Many Requests: Rate limit exceeded
  * 404 Not Found: Invalid endpoint or resource


## Usage Limits and Best Practices
The rate limit: Most free plans allow up to 100 requests/day (check your RapidAPI dashboard).
For the best practices, consider the following: 
  * Paginate results using the page parameter.
  * Cache frequently-requested data on the client to reduce API calls
  * Never expose your API key on the frontend; always proxy requests through a server-side route (e.g., Next.js API route)
  * Handle loading and error states gracefully in the UI
