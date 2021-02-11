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
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  console.log(startIndex);

  const endIndex = page * itemsPerPage;
  console.log(endIndex);

  // create two variables which will represent the index for the first and last student on the page
  const firstStudent = ``; // I'm not sure
  const lastStudent = ``; // I'm not sure


  // select the element with a class of `student-list` and assign it to a variable

  let studentList = document.querySelector('.student-list');

  // set the innerHTML property of the variable you just created to an empty string
  // Clear previously-displayed students from list

  studentList.innerHTML = '';

  // loop over the length of the `list` parameter

  for (let i = 0; i < list.length; i++) {

    // inside the loop create a conditional to display the proper students

    if ( i>= startIndex && i < endIndex) {

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
      console.log(studentItem);

        // insert the above elements

      studentList.insertAdjacentHTML("beforeend",studentItem);
    }
  }
}
showPage(data, 2);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
