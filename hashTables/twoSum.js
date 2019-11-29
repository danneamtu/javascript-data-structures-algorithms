function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const secondMovieSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovie = movieLengths[i];
    const matchingSecondMovie = flightLength - firstMovie;

    if (secondMovieSeen.has(matchingSecondMovie)) {
      return true;
    }

    secondMovieSeen.add(firstMovie);
  }

  return false;
}

// time complexity of O(n), where n is the length of the movieLengths array
// space complexity of O(n), where n is the length of the set from the movieLengths array

console.log(canTwoMoviesFillFlight([90, 10, 20, 40, 20, 30], 140));
