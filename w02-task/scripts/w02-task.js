/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Lincoln Allen';
const currentYear = '2024';
const profilePicture = 'images/test.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Pizza', 'Hamburgers', 'Hot dogs'];
foodElement.innerHTML = favFoods.join(',');
const newFood = 'Ice Cream';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods.join(',')}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(',')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(',')}`;

