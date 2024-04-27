document.addEventListener('DOMContentLoaded', function() {
    const toc = document.getElementById('10d13c1a-f52b-4e6b-acdc-0ecfba99e655');
    const items = toc.querySelectorAll('div.table_of_contents-item');
    const sidebar = document.createElement('nav');
    sidebar.className = 'sticky-sidebar';
    const ul = document.createElement('ul');
    sidebar.appendChild(ul);

    items.forEach(item => {
        const level = parseInt(item.className.match(/indent-(\d+)/)?.[1] || "0");
        let currentUl = ul;
        for (let i = 0; i < level; i++) {
            currentUl = currentUl.lastElementChild || currentUl;
            currentUl = currentUl.querySelector('ul') || currentUl;
        }

        const li = document.createElement('li');
        li.className = `level-${level}`;
        
        const a = document.createElement('a');
        a.href = item.querySelector('a').href;
        a.textContent = item.textContent.trim();
        li.appendChild(a);

        const hasSubItems = item.nextElementSibling && parseInt(item.nextElementSibling.className.match(/indent-(\d+)/)?.[1] || "0") > level;
        if (hasSubItems) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'toggle-btn';
            toggleButton.textContent = '+';
            toggleButton.onclick = function() {
                const nextUl = toggleButton.parentNode.querySelector('ul');
                if (nextUl) {
                    const isVisible = nextUl.style.display === 'block';
                    nextUl.style.display = isVisible ? 'none' : 'block';
                    toggleButton.textContent = isVisible ? '+' : '−';
                }
            };
            li.appendChild(toggleButton);

            const subUl = document.createElement('ul');
            subUl.style.display = 'none';
            li.appendChild(subUl);
        }

        currentUl.appendChild(li);
    });

    document.body.insertBefore(sidebar, document.body.firstChild);
});







document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sticky-sidebar');
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Remove active class from all links
            sidebar.querySelectorAll('a').forEach(lnk => lnk.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');

            // Navigate to the section
            window.location.hash = this.getAttribute('href').split('#')[1];
          
          
        });
    });
});









document.addEventListener('DOMContentLoaded', function() {
    const tocElement = document.getElementById('10d13c1a-f52b-4e6b-acdc-0ecfba99e655');
    if (tocElement) {
        tocElement.style.display = 'none';
    }
});















// JavaScript to create loading screen
document.addEventListener("DOMContentLoaded", function() {
  var loadingScreen = document.createElement('div');
  loadingScreen.id = 'loading-screen';
  var spinner = document.createElement('div');
  spinner.classList.add('spinner');
  loadingScreen.appendChild(spinner);
  document.body.appendChild(loadingScreen);
});

// JavaScript to remove loading screen once content is loaded
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
});

















document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.createElement('button'); 
  burgerButton.className = 'burger-menu';
  burgerButton.textContent = '☰'; // Add the menu icon
  document.body.appendChild(burgerButton); // Add to the page

  const sidebar = document.querySelector('.sticky-sidebar');

  burgerButton.addEventListener('click', function() {
    sidebar.classList.toggle('show-menu');
  });
});











document.addEventListener('click', function(event) {
  // Check if the viewport width is 1500px or less (common breakpoint for mobile devices)
  if (window.innerWidth <= 1520) {
      var sidebar = document.querySelector('.sticky-sidebar');
      var burgerMenu = document.querySelector('.burger-menu');

      // Check if the clicked element is not the sidebar and not the burger menu
      if (!sidebar.contains(event.target) && !burgerMenu.contains(event.target)) {
          sidebar.classList.remove('show-menu');
      }
  }
});













