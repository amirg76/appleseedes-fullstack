const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

//
const olNewElement = document.createElement("ol");
olNewElement.style.listStyleType = "none";
document.body.appendChild(olNewElement);

const liNewElement = document.querySelector("ol");

users.forEach((user) => {
  const userElement = `<li data-id="${user.id}">${user.firstName} ${user.lastName}</li>`;

  const newLiFromUser = document.createElement("li");

  newLiFromUser.innerHTML = userElement;

  liNewElement.appendChild(newLiFromUser);
});
