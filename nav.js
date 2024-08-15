const activePage = window.location.pathname;
const activeNav = document.querySelectorAll('.ava').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('navactive');
      
    }
  })



  const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navLinks = document.getElementsByClassName('navbar-links')[0]
        const barOne = document.getElementsByClassName('bar one')[0]
        const barTwo = document.getElementsByClassName('bar two')[0]
        const barThree = document.getElementsByClassName('bar three')[0]
        
        toggleButton.addEventListener('click',() =>{
            navLinks.classList.toggle('active')
            barOne.classList.toggle('active')
            barTwo.classList.toggle('active')
            barThree.classList.toggle('active')
        });
