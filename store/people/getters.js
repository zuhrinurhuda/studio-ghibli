const getters = {
  filteredPeople({ peopleList, searchText }) {
    return peopleList.filter(person => {
      return person.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    })
  }
}

export default getters
