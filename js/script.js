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

  // set the innerHTML property of the variable you just created to an empty string
  // Clear previously-displayed students from list

  studentList.innerHTML = '';

  // loop over the length of the `list` parameter

  for (let i = 0; i < list.length; i++) {

    // inside the loop create a conditional to display the proper students

    if (i >= startIndex && i < endIndex) {

      // inside the conditional:
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
}
showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  // How many pages?
  const numOfPages = Math.ceil(list.length / itemsPerPage);
  
  // link-list
  let linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

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
    let pageToDisplay;
    const clickedButton = e.target;
    if (clickedButton.tagName === 'BUTTON') {
      pageToDisplay = clickedButton.textContent;
      linkList.querySelector('.active').classList.remove('active');
      clickedButton.classList.add('active');

      // Display clicked page
      showPage(list, pageToDisplay);
    }
  });
}

// Call functions
addPagination(data);