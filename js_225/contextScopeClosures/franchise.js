const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(number => `${this.name} ${number}`)
  },
};

console.log(franchise.allMovies())