document.getElementById('toggleButton').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const icon = document.querySelector('#toggleButton i');
  
    // Toggle expanded class on sidebar
    sidebar.classList.toggle('expanded');
  
    if (window.innerWidth > 768) { // Check if screen size is larger than 768px
      if (sidebar.classList.contains('expanded')) {
        // Expand sidebar
        sidebar.style.width = '150px';
        content.style.marginLeft = '40px';
        // Change icon to "fa-angles-left" when sidebar is expanded
        icon.classList.remove('fa-angles-right');
        icon.classList.add('fa-angles-left');
      } else {
        // Collapse sidebar
        sidebar.style.width = '40px';
        content.style.marginLeft = '0px';
        // Change icon to "fa-angles-right" when sidebar is collapsed
        icon.classList.remove('fa-angles-left');
        icon.classList.add('fa-angles-right');
      }
    }

    if (window.innerWidth < 768) { // Check if screen size is smaller than 768px {
      if (sidebar.classList.contains('expanded')) {
        sidebar.style.height = '100px'; // Set the height as needed
        sidebar.style.width = '100%';
        icon.classList.remove('fa-angles-right');
        icon.classList.add('fa-angles-up');
      } else {
        sidebar.style.height = '40px'; // Set the height as needed
        sidebar.style.width = '100%';
        icon.classList.remove('fa-angles-up');
        icon.classList.add('fa-angles-down');
      }
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    document.querySelectorAll('.navbar-list li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offset = targetSection.offsetTop;
        /*
        sidebar.classList.remove('expanded'); // Collapse sidebar when navigating to section
        sidebar.style.width = '50px'; // Ensure sidebar collapses fully
  
        content.style.marginLeft = '50px'; // Ensure content adjusts when sidebar collapses
        */
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      });
    });
  });