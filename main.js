// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".like-glyph").addEventListener('click', click_action);
});

function click_action(event) {
  return mimicServerCall(url="http://mimicServer.example.com", config={})
}

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
        alert("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
        alert("You notified the server!");
        alert("Pretend remote server notified of action!");
        if (document.querySelector(".like-glyph").innerText === EMPTY_HEART) {
          document.querySelector(".like-glyph").innerText = FULL_HEART;
          document
            .querySelector(".like-glyph")
            .classList.add("activated-heart");
        } else {
          document.querySelector(".like-glyph").innerText = EMPTY_HEART;
          document
            .querySelector(".like-glyph")
            .classList.remove("activated-heart");
        }
      }
    }, 300);
  });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }
