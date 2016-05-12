var movies = [
	{
		title: "Batman v Superman",
		hasWatched: true,
		rating: 4
	},
	{
		title: "Captain America: Civil War",
		hasWatched: false,
		rating: 4.5
	}
]
movies.forEach(function(movie)
{
	console.log(buildString(movie));
});

function buildString(movie){
	var result = "You have ";
		if(movie.hasWatched)
		{
			result += "watched ";
		}
		else
		{
			result += "not seen ";
		}
		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";

	return result;
}

