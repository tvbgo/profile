
const getBio = () => {
  fetch("https://api.github.com/users/tvbgo")
    .then(response => response.json())
    .then((data) => {
      const myBio = document.querySelectorAll(".github-bio");
      const bio = data.bio;
      myBio[0].insertAdjacentHTML("afterbegin", bio);
    });
}
getBio();






