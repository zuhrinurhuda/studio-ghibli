const getters = {
  filteredFilms({ films, searchText }) {
    return films.filmList.filter(
      film =>
        film.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    )
  }
}
