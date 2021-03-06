/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Global constants
const itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page

  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;

  // select the element with a class of `student-list` and assign it to a variable

  let studentList = document.querySelector('.student-list');

  // Check for empty list
  if (list.length) {
    // set the innerHTML property of the studentList variable to an empty string
    // Clear previously-displayed students from list
  
    studentList.innerHTML = '';

    // loop over the length of the `list` parameter
  
    for (let i = 0; i < list.length; i++) {
      // conditional to display the proper students
      if (i >= startIndex && i < endIndex) {
        // create the elements needed to display the student information
        
        const studentItem = `
          <li class="student-item cf">
            <div class="student-details">
              <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
              <h3>${list[i].name.first} ${list[i].name.last}</h3>
              <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
              <span class="date">Joined ${list[i].registered.date}</span>
            </div>
          </li>
        `;
  
          // insert the above elements
  
        studentList.insertAdjacentHTML("beforeend",studentItem);
      }
    }
  } else {
    // Display 'No results' if list is empty
    studentList.innerHTML = `
      <p style="font-size: 1.5em; font-style: italic; text-align: center; margin-top: 15vh;">No results</p> 
    `;
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  // link-list
  let linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  if (list.length) { // Only continue if 'list' is not empty
    // How many pages?
    const numOfPages = Math.ceil(list.length / itemsPerPage);

    // Create pagination buttons
    for (let i = 1; i <= numOfPages; i++) {
      linkList.insertAdjacentHTML('beforeend', `
        <li>
          <button type="button">${i}</button>
        </li>
      `);
    }
    linkList.firstElementChild.firstElementChild.className = 'active';

    // Event listener for click on pagination
    linkList.addEventListener('click', (e) => {
      const clickedButton = e.target;
      if (clickedButton.tagName === 'BUTTON') {
        const pageToDisplay = clickedButton.textContent;
        linkList.querySelector('.active').classList.remove('active');
        clickedButton.classList.add('active');

        // Display clicked page
        showPage(list, pageToDisplay);
      }
    });
  }
}

// Extra credit

  // Add search form to header
const header = document.querySelector('header');
header.insertAdjacentHTML('beforeend', `
  <label for="search" class="student-search">
    <input type="text" id="search" placeholder="Search by name...">
    <button type="button" id="search-button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
`);

  // Create search function with parameters searchText & list
function searchFunc(searchText, list) {
  // Array to contain students matching search
  let newData = [];

  // Loop through list
  for (let i = 0; i < list.length; i++) {
    // create constant toCheck with first and last name from list and convert to lowercase
    const toCheck = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;

    // does toCheck contain searchText?
    if (toCheck.includes(searchText.toLowerCase())) {
      // Add matched student to newData array
      newData.push(list[i]);
    }
  }
  // Call showPage() & addPagination() functions
  showPage(newData, 1);
  addPagination(newData);
}

  // Variables to reference search input and button
const searchInput = header.querySelector('#search');
const searchSubmit = header.querySelector('#search-button');

  // Event listeners for search
searchInput.addEventListener('keyup', () => {
  searchFunc(searchInput.value, data);
});

searchSubmit.addEventListener('click', () => {
  searchFunc(searchInput.value, data);
});

// Call functions
showPage(data, 1);
addPagination(data);