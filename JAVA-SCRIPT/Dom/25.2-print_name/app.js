const objName = {
  name: "amir",
  printName() {
    console.log(this.name);
  },
  printDelay() {
    setTimeout(
      function () {
        this.printName();
      }.bind(this),
      1000
    );
  },
};

objName.printName();
objName.printDelay();
