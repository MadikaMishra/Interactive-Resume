function openTab(tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
      content.style.display = 'none';
  });
  document.getElementById(tabName).style.display = 'block';
}

// Open the home tab by default
openTab('home');
