const tweetForm = document.querySelector('#tweetForm')

tweetForm.addEventListener('submit', function (e) {
    console.log("submit");
    e.preventDefault(); // the form will currently take us 
    // to the dogs page, and or reload if we get rid of 
    // action.
    // we can prevent this behavior with .preventDefault()
    let user = document.querySelector("#username").value;
    let tweet = document.querySelector('#tweet').value;
    const ul = document.querySelector('#tweets');
    let newLiUser = document.createElement('li');
    newLiUser.textContent = user;
    let newLiTweet = document.createElement('li');
    newLiTweet.textContent = tweet;
    ul.appendChild(newLiUser);
    ul.appendChild(newLiTweet)
})