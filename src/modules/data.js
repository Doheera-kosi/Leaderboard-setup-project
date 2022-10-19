export const array = [
  {
    name: 'Name',
    score: 34,
  },

  {
    name: 'Name',
    score: 34,
  },

  {
    name: 'Name',
    score: 34,
  },

  {
    name: 'Name',
    score: 34,
  },

  {
    name: 'Name',
    score: 34,
  },

  {
    name: 'Name',
    score: 34,
  },
  {
    name: 'Name',
    score: 34,
  },
  {
    name: 'Name',
    score: 34,
  },
  {
    name: 'Name',
    score: 34,
  },
];

// const display = document.querySelector('#list');
const element = document.createElement('li');

export const render = () => {
  array.forEach((a, index) => {
    element.innerHTML += `
    <li class='litem ${index % 2 !== 0 ? 'item' : 'item1'}' >
      <label class='lname'> ${a.name} : </label> 
      <label class='lscore'> ${a.score} </label>
    </li>
    `;
  });
};
window.onload = () => {
  render();
  document.querySelector('#list').appendChild(element);
};
