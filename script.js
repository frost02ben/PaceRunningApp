window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) { 
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  function updateDisplay(){
    var fivek = localStorage.getItem('pbFivek');
    var goalFivek = localStorage.getItem('goalFiveK');

    var tenk = localStorage.getItem('pbTenk');
    var goalTenk = localStorage.getItem('goalTenK');

    var halfm = localStorage.getItem('pbHalfM');
    var goalHalfm = localStorage.getItem('goalHalfM');

    var fullm = localStorage.getItem('pbFullM');
    var goalFullm = localStorage.getItem('goalFullM');

    if (fivek) {
      document.getElementById("display-fivek").innerHTML = "<strong>Best</strong> : " + fivek;
    }
    if (goalFivek) {
      document.getElementById("display-goal-fivek").innerHTML = "<strong>Goal</strong> : " + goalFivek;
    }

    if (tenk) {
      document.getElementById("display-tenk").innerHTML = "<strong>Best</strong> : " + tenk;
    }
    if (goalTenk) {
      document.getElementById("display-goal-tenk").innerHTML = "<strong>Goal</strong> : " + goalTenk;
    }

    if (halfm) {
      document.getElementById("display-halfm").innerHTML = "<strong>Best</strong> : " + halfm;
    }
    if (goalHalfm) {
      document.getElementById("display-goal-halfm").innerHTML = "<strong>Goal</strong> : " + goalHalfm;
    }

    if (fullm) {
      document.getElementById("display-fullm").innerHTML = "<strong>Best</strong> : " + fullm;
    }
    if (goalFullm) {
      document.getElementById("display-goal-fullm").innerHTML = "<strong>Goal</strong> : " + goalFullm;
    }
  }


  document.getElementById("submit-btn").addEventListener("click", function() {
    var fivek = document.getElementById("pb-fivek").value;
    var goalFivek = document.getElementById("goal-fivek").value;

    var tenk = document.getElementById("pb-tenk").value;
    var goalTenk = document.getElementById("goal-tenk").value;

    var halfm = document.getElementById("pb-hm").value;
    var goalHalfm = document.getElementById("goal-halfm").value;

    var fullm = document.getElementById("pb-fm").value;
    var goalFullm = document.getElementById("goal-fullm").value;

if(fivek){
  localStorage.setItem('pbFivek', fivek);
  updateDisplay();
}
if(goalFivek){
  localStorage.setItem('goalFiveK', goalFivek);
  updateDisplay();
}

if(tenk){
  localStorage.setItem('pbTenk', tenk);
  updateDisplay();
}
if(goalTenk){
  localStorage.setItem('goalTenK', goalTenk);
  updateDisplay();
}

if(halfm){
  localStorage.setItem('pbHalfM', halfm);
  updateDisplay();
}
if(goalHalfm){
  localStorage.setItem('goalHalfM', goalHalfm);
  updateDisplay();
}


if(fullm){
  localStorage.setItem('pbFullM', fullm);
  updateDisplay();
}
if(goalFullm){
  localStorage.setItem('goalFullM', goalFullm);
  updateDisplay();
}
  
  });

  document.addEventListener("DOMContentLoaded", function() {
    updateDisplay();
  });

  document.addEventListener("DOMContentLoaded", function() {
    var collapseElements = document.querySelectorAll('.collapse');
  
    collapseElements.forEach(function(content) {
      var toggleIcon = content.parentElement.querySelector('.toggle-icon');
  
      content.addEventListener('show.bs.collapse', function () {
        toggleIcon.classList.remove('fa-caret-right');
        toggleIcon.classList.add('fa-caret-down');
      });
  
      content.addEventListener('hide.bs.collapse', function () {
        toggleIcon.classList.remove('fa-caret-down');
        toggleIcon.classList.add('fa-caret-right');
      });
    });
  
    updateDisplay();
  });


  function renderPosts() {
    const postsContainer = document.getElementById('blog-posts');
    postsContainer.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
        <p><strong>Distance:</strong> ${post.distance} km</p>
        <p><strong>Time:</strong> ${post.time}</p>
        <p><strong>Thoughts:</strong> ${post.thoughts}</p>
        <button onclick="deletePost(${index})" class="main-btn"><i class="fas fa-xmark"></i></button>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  
  // Function to add a new post
  function addPost() {
    const distance = document.getElementById('distance').value;
    const time = document.getElementById('time').value;
    const thoughts = document.getElementById('thoughts').value;
  
    if (distance && time && thoughts) {
      const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      posts.push({ distance, time, thoughts });
      localStorage.setItem('blogPosts', JSON.stringify(posts));
      renderPosts();
  
      // Clear the input fields
      document.getElementById('distance').value = '';
      document.getElementById('time').value = '';
      document.getElementById('thoughts').value = '';
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  // Function to delete a post
  function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    renderPosts();
  }

  
  // Event listener for the submit button
  document.getElementById('submit-btn').addEventListener('click', addPost);

     window.addEventListener('DOMContentLoaded', renderPosts);



  
 

    // document.getElementById("blog-posts").innerHTML = "Nothing to show here";

  