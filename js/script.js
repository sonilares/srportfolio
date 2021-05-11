// preloader
window.addEventListener('load', function() {
  document.querySelector('.preloader').classList.add('preloader--opacity-0');
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
  }, 1000)
});
//progress bar

const progressBar1 = document.getElementsByClassName
('progress-bar1')[0];
const widthMax = 150;

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar1);
  const widthCurrent = parseFloat(computedStyle.getPropertyValue
    ('--width')) || 0;

  const width = widthCurrent > widthMax ? 0 : widthCurrent;
  progressBar1.style.setProperty('--width', width + .1);
}, 5);


const progressBar2 = document.getElementsByClassName
('progress-bar2')[0];

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar2)
  const widthCurrent = parseFloat(computedStyle.getPropertyValue
    ('--width')) || 0
  const width = widthCurrent > widthMax ? 0 : widthCurrent;

  progressBar2.style.setProperty('--width', width + .1)
},5)


const progressBar3 = document.getElementsByClassName
('progress-bar3')[0];

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar3)
  const widthCurrent = parseFloat(computedStyle.getPropertyValue
    ('--width')) || 0

  const width = widthCurrent > widthMax ? 0 : widthCurrent;
  progressBar3.style.setProperty('--width', width + .1)
},5)


const progressBar4 = document.getElementsByClassName
('progress-bar4')[0];

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar4)
  const widthCurrent = parseFloat(computedStyle.getPropertyValue
    ('--width')) || 0

  const width = widthCurrent > widthMax ? 0 : widthCurrent;
  progressBar4.style.setProperty('--width', width + .1)
},5)

// Portfolio filter
const filterContainer = document.querySelector('.portfolio__filter');
const filterButtons = filterContainer.children;
const totalFilterButtons = filterButtons.length;
const portfolioItems = document.querySelectorAll('.portfolio__item');
const totalPortofolioItems = portfolioItems.length;

for (let i = 0; i < totalFilterButtons; i++) {
  filterButtons[i].addEventListener('click', function() {
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');
    for(let k = 0; k < totalPortofolioItems; k++) {
      if (filterValue === portfolioItems[k].getAttribute('data-category')) {
        portfolioItems[k].classList.add('show');
        portfolioItems[k].classList.remove('hide');
      } else {
        portfolioItems[k].classList.add('hide');
        portfolioItems[k].classList.remove('show');
      }

      if (filterValue === 'all') {
        portfolioItems[k].classList.add('show');
        portfolioItems[k].classList.remove('hide');
      }
    }

  });
}

// Portfolio lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('.lightbox__img');
const lightboxText = lightbox.querySelector('.lightbox__text');
const lightboxCounter = lightbox.querySelector('.lightbox__counter');
let itemIndex = 0;

for (let i = 0; i < totalPortofolioItems; i++) {
  portfolioItems[i].addEventListener('click', function() {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

const changeItem = () => {
  const imgSrc = portfolioItems[itemIndex].querySelector('.portfolio__img img').getAttribute('src');
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h3').innerHTML;
  lightboxCounter.innerHTML = (itemIndex + 1) + ' of ' + totalPortofolioItems;
};

const toggleLightbox = () => {
  lightbox.classList.toggle('open');
};

const nextItem = () => {
  if (itemIndex === (totalPortofolioItems - 1)) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
};

const prevItem = () => {
  if (itemIndex === 0) {
    itemIndex = totalPortofolioItems - 1;
  } else {
    itemIndex--;
  }
  changeItem();
};

// Portfolio close button
const lightboxClose = document.querySelector('.lightbox__close');
lightbox.addEventListener('click', (event) => {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

// Sidebar Navigation
const sidebarNav = document.querySelector('.sidebar .nav');
const navItems = sidebarNav.querySelectorAll('.nav__item');
const totalNavItems = navItems.length;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;

// Button hire me
document.querySelector('.btn-hire-me').addEventListener('click', function() {
  for (let j = 0; j < totalNavItems; j++) {
    sections[j].classList.remove('section--prev-section');
  }

  for (let j = 0; j < totalNavItems; j++) {
    // menambahkan kelas section--prev-section pada section yang sudah active
    if (navItems[j].querySelector('.nav__link').classList.contains('active')) {
      sections[j].classList.add('section--prev-section');
    }
    // hapus kelas active pada .nav__link
    navItems[j].querySelector('.nav__link').classList.remove('active');
  }

  document.querySelector('.nav__link[href="#contact"]').classList.add('active');

  showSection(this);
});

for (let i = 0; i < totalNavItems; i++) {
  const navLink = navItems[i].querySelector('.nav__link');
  navLink.addEventListener('click', function() {
    // menghapus kelas section--prev-section pada section
    for (let j = 0; j < totalNavItems; j++) {
      sections[j].classList.remove('section--prev-section');
    }

    for (let j = 0; j < totalNavItems; j++) {
      // menambahkan kelas section--prev-section pada section yang sudah active
      if (navItems[j].querySelector('.nav__link').classList.contains('active')) {
        sections[j].classList.add('section--prev-section');
      }
      // hapus kelas active pada .nav__link
      navItems[j].querySelector('.nav__link').classList.remove('active');
    }

    this.classList.add('active');
    showSection(this);
  });
}

const showSection = (element) => {
  // hapus kelas active pada setiap section
  for (let i = 0; i < totalSections; i++) {
    sections[i].classList.remove('section--active');
  }

  const target = element.getAttribute('href');
  document.querySelector(target).classList.add('section--active');
};

// Toggle Sidebar
const navTogglerBtn = document.querySelector('#navTogglerBtn');
const sidebar = document.querySelector('.sidebar');

navTogglerBtn.addEventListener('click', () => {
  sidebarSectionTogglerBtn();
});

const sidebarSectionTogglerBtn = () => {
  sidebar.classList.toggle('sidebar--open');
  navTogglerBtn.classList.toggle('nav-toggler--open');
  for (let i = 0; i < totalSections; i++) {
    sections[i].classList.toggle('section--open');
  }
};
