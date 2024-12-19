document.addEventListener("DOMContentLoaded", function () {
    // Job Search Functionality
    const searchButton = document.getElementById("search-button");
    const searchInput = document.querySelector("input[type='text']");
    const searchResultsContainer = document.getElementById("job-listings");
  
    // Event listener for the search button
    searchButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default form submission
  
      const query = searchInput.value.trim();
  
      // Check if search query is empty
      if (query === "") {
        alert("Oops! You need to enter a job title or keyword to search.");
        return;
      }
  
      // Notify user with the search query
      alert(`You are searching for jobs related to: "${query}"`);
  
      // Show loading indicator while fetching results
      searchResultsContainer.innerHTML = "<p>Loading results...</p>";
  
      // Simulate fetching results asynchronously (replace with real API if needed)
      setTimeout(() => {
        // Simulated job results (replace with real data fetch)
        const jobResults = [
          { title: "Software Engineer", company: "Tech Company", location: "Remote" },
          { title: "Frontend Developer", company: "Web Solutions", location: "New Delhi" },
          { title: "Data Analyst", company: "Analytics Corp", location: "Mumbai" },
          { title: "Project Manager", company: "Build IT", location: "Pune" }
        ];
  
        // If no job results, notify the user
        if (jobResults.length === 0) {
          searchResultsContainer.innerHTML = `<p>No jobs found for "${query}". Try using different keywords!</p>`;
          return;
        }
  
        // Display the search results
        searchResultsContainer.innerHTML = `<h2>Search Results for: "${query}"</h2>`;
        const resultsList = document.createElement("ul");
  
        // Add each job listing to the result list
        jobResults.forEach((job) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${job.title} at ${job.company} (${job.location})`;
          resultsList.appendChild(listItem);
        });
  
        // Append the list to the results container
        searchResultsContainer.appendChild(resultsList);
      }, 1500); // Simulated delay for fetching results
    });
  
    // Login and Signup Button Actions
    const loginButton = document.querySelector("a[href='login.html']");
    const signupButton = document.querySelector("a[href='signup.html']");
  
    // Login button event
    loginButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      alert("You're being redirected to the Login page.");
      window.location.href = "login.html"; 
    });
  
    // Signup button event
    signupButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      alert("You're being redirected to the Signup page.");
      window.location.href = "signup.html"; 
    });
  
    // Scroll to Top Button
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.textContent = "↑";
    scrollToTopButton.id = "scrollToTopBtn";
    scrollToTopButton.style.display = "none";
    scrollToTopButton.style.position = "fixed";
    scrollToTopButton.style.bottom = "20px";
    scrollToTopButton.style.right = "20px";
    scrollToTopButton.style.padding = "15px";
    scrollToTopButton.style.borderRadius = "50%";
    scrollToTopButton.style.fontSize = "18px";
    scrollToTopButton.style.backgroundColor = "#0FA4AF";
    scrollToTopButton.style.color = "#fff";
    scrollToTopButton.style.border = "none";
    scrollToTopButton.style.cursor = "pointer";
    scrollToTopButton.style.transition = "opacity 0.3s";
    document.body.appendChild(scrollToTopButton);
  
    // Show Scroll to Top button when user scrolls down
    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.opacity = 1;
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.opacity = 0;
        setTimeout(() => {
          scrollToTopButton.style.display = "none";
        }, 300); // Wait for the fade-out transition to finish
      }
    };
  
    // Smooth scroll back to top when button is clicked
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Contact Form Validation (Optional)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      const contactFormInputs = contactForm.querySelectorAll("input, textarea");
  
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
  
        let isValid = true;
        contactFormInputs.forEach((input) => {
          if (input.value.trim() === "") {
            isValid = false;
            input.style.borderColor = "#FF0000"; // Highlight invalid input
          } else {
            input.style.borderColor = "#ccc"; // Reset valid input border color
          }
        });
  
        if (isValid) {
          alert("Thank you for reaching out! We will get back to you soon.");
          contactForm.reset(); // Clear the form after submission
        } else {
          alert("Please fill out all fields before submitting.");
        }
      });
    }
  });
  
