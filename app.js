const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = 'black';
    }else{
        header.style.backgroundColor = 'black';
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');
  
    skillBars.forEach(skillBar => {
      const skillProgress = skillBar.querySelector('.skill-progress');
      const initialWidth = skillProgress.style.width;
      const skillName = skillBar.parentElement.querySelector('.skill-name').textContent;
  
      skillBar.addEventListener('mouseenter', function() {
        skillProgress.textContent = `${skillName}: ${initialWidth}`;
      });
  
      skillBar.addEventListener('mouseleave', function() {
        skillProgress.textContent = '';
      });
    });
  
    // Intersection Observer for filler animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fillSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    const section = document.querySelector('.skills-section');
    observer.observe(section);
  
    function fillSkillBars() {
      skillBars.forEach(skillBar => {
        const skillProgress = skillBar.querySelector('.skill-progress');
        const initialWidth = skillProgress.style.width;
  
        skillProgress.style.width = initialWidth;
        skillProgress.style.transition = 'width 1.5s ease-in-out'; // Adjust animation duration as needed
      });
    }
  });
  
  