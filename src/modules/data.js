// Declaring and Initializing global variables
const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');
const refreshBtn = document.querySelector('#refresh');
const gameForm = document.querySelector('#form');
const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eb3tufSC8mHnDPCqR6T5/scores/';
const element = document.querySelector('#list');

// Function for Rendering items
export const renderScores = (allMembers) => {
  element.innerHTML = '';
  const allUsers = (allMembers.result);
  allUsers.forEach((user, index) => {
    element.innerHTML += `
      <li class='litem ${index % 2 !== 0 ? 'item' : 'item1'}' >
        <label class='lname'> ${user.user} : </label> 
        <label class='lscore'> ${user.score} </label>
      </li>
      <hr>
    `;
  });
};
export default renderScores;

// Function to Fetch From API
export const postForm = async () => {
  const response = fetch(gameURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
  });
  const data = await (await response).json();
  userName.value = '';
  userScore.value = '';
  return data;
};

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  postForm();
});

// Function to FetchScores From
export const fetchScores = async () => {
  const response = await fetch(gameURL);
  const data = await response.json();
  renderScores(data);
};

refreshBtn.addEventListener('click', fetchScores);