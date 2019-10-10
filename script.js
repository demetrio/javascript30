'use strict';

const mainContainer = document.getElementById('main');
const myRequest = new Request('./projects.json');

function fetchMovieList(request) {
    fetch(request)
        .then(function(response) {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(function(response) {
            response.forEach(movie => {
                createPractice(movie);
            });
        })
        .catch(error => {
            console.log.error(error);
        });
}

fetchMovieList(myRequest);

function createPractice(course) {
    const card = document.createElement('a');
    card.setAttribute('class', 'portfolio-card');

    const img = document.createElement('img');
    img.setAttribute('src', 'https://unsplash.it/1920/1080');

    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'portfolio-card-title');
    h3.textContent = course.name;

    const p = document.createElement('p');
    p.setAttribute('class', 'portfolio-card-p');
    p.textContent = course.description;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);

    mainContainer.appendChild(card);
}
