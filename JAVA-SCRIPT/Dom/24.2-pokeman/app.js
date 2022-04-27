function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokemon1 = new Pokemon("Flareon", "Fire", [
  "Pika Papow",
  "Photon Geyser",
  "Multi-Attack",
]);
const pokemon2 = new Pokemon("Flaaffy", "Electric", [
  "Needle Arm",
  "Mud Bomb",
  "Lava Plume",
]);
const pokemon3 = new Pokemon("Latias", "Dragon", [
  "Sandstorm",
  "Mind Blown",
  "Razor Wind",
]);

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.name}`;
};

Pokemon.prototype.attack = function (attackNum) {
  return `${this.name} used ${this.attackList[attackNum]}`;
};

console.log(pokemon1.callPokemon());
console.log(pokemon1.attack(1));
console.log(pokemon2.callPokemon());
console.log(pokemon2.attack(0));
console.log(pokemon3.callPokemon());
console.log(pokemon3.attack(2));
