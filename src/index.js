import Typed from 'typed.js';

const dynamicBannerText = () => {
  const banner = document.querySelectorAll('#hello-text');
  if (banner) {
    new Typed('#hello-text', {
      strings: ["Hello World!", "Hello World!", "My name is Tomas!", "Welcome to my profile!"],
      typeSpeed: 70,
      loop: true,
      loopCount: 2,
      showCursor: false
    });
  }
}
dynamicBannerText();

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




