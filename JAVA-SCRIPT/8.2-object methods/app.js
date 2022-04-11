const mycountry = {
  country: "Finland ",
  capital: "Helsinki",
  language: "Finnish",
  population: 9,
  neighbours: 3,
  describe() {
    console.log(
      `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland() {
    this.isIsland = this.neighbours ? false : true;
  },
};

mycountry.describe();
mycountry.checkIsland();
console.log(mycountry.isIsland);
