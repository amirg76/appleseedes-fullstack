//! 1) Break into components
//* Single responsibility
//? - App
//?     - SearchBar
//?     - ProductTable
//?         - Category
//?         - Product

//! 2) Build static version
//? Smaller apps top to bottom
//? Larger apps bottom to top (with test for all)

//! 3) state representation
//* DRY - dont repeat yourself
//? It passed by props?
//? It remain unchanged?
//todo States:
//todo originalData - App
//todo displayedData - App
//todo isInStock - App
//todo userInput - App

//! 3) where our state located
//? find a common parent component
