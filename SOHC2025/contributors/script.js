window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Mohammad Alai",
            role: "AIA, ACHA",
            desc: "Director of Design with the Office of Design and Construction<br/><br/>AdventHealth",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Mohammad-Alai-Headshot-scaled.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Sam Burnette",
            role: "",
            desc: "Principal<br/><br/>ESa",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Sam-Burnette-Headshot-e1743161107368.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Gina Casalinova",
            role: "CHC",
            desc: "Director of Construction<br/><br/>Cleveland Clinic",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Gina-Casalinova-Headshot-e1743161323202.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Steve Culler",
            role: "",
            desc: "Low Voltage Resource Director<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Steve-Culler-Headshot.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Patrick Duke",
            role: "",
            desc: "Healthcare Solutions Lead, Americas<br/><br/>Turner & Townsend",
            photo: "https://www.robinsmorton.com/wp-content/uploads/PDuke-e1743161617512.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "David Forrestall",
            role: "",
            desc: "CEO<br/><br/>SecurIT360",
            photo: "https://www.robinsmorton.com/wp-content/uploads/David-Forrestall-Headshot-e1743160860929.png",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Bill Hurcules",
            role: "",
            desc: "President and CEO<br/><br/>WJH Health",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Bill-Hercules-Headshot-scaled-e1743161481187.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Ben Leaver",
            role: "",
            desc: "Chief Financial Officer<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Ben-Leaver-Headshot-scaled-e1743095720256.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Russell Meyers",
            role: "",
            desc: "President<br/><br/>Permian Basin Behavioral Health Center",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Russell-Meyers-scaled-e1743161159464.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Jackie Mustakas",
            role: "",
            desc: "Senior Sustainability Manager<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Jackie-Mustakas-Headshot-scaled-e1743161244661.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Cullen Pitts",
            role: "",
            desc: "Principal<br/><br/>McMillan Pazdan Smith",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Cullen-Pitts-Headshot-e1743161364218.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Chris Ressler",
            role: "",
            desc: "Regional Healthcare Director, Associate Principal<br/><br/>Page",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Chris-Ressler-Headshot-scaled-e1743161402593.jpeg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Rachael Rome",
            role: "",
            desc: "Studio Practice Leader, Mental Behavioral Health<br/><br/>HKS Architects Inc.",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Rachael-Rome-Headshot-v2-scaled-e1743161287681.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Sammy Shams",
            role: "",
            desc: "Vice President, Sustainable Design Leader in Health<br/><br/>HKS Architects Inc.",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Sammy-Shams-Headshot.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Bob Wall",
            role: "",
            desc: "Vice President<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Bob-Wall-Headshot-scaled-e1743161436149.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },

    ];

    /* Social Icons */
    var icons = [{
        iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
        iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
        iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
        iDribbble: "https://rafaelalucas.com/dailyui/6/assets/dribbble.svg",
    }];

    var iWebsite = icons[0].iWebsite,
        iEmail = icons[0].iEmail,
        iLinkedin = icons[0].iLinkedin,
        iDribbble = icons[0].iDribbble;


    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo,
                website = team[i].website,
                email = team[i].email,
                linkedin = team[i].linkedin,
                dribbble = team[i].dribbble;

            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <span class="more"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                        
                     <!--   <div class="social">
                        <span class="pointer"></span>
                        <div class="icons">
                            <a class="icon" href="" target="_blank" data-index="10"><img src="${iWebsite}" style="visibility:hidden;"></a>
                            <a class="icon" href="" target="_blank" data-index="1"><img src="${iEmail} style="visibility:hidden;"></a>
                            <a class="icon" href="" target="_blank" data-index="2"><img src="${iLinkedin} style="visibility:hidden;"></a>
                            <a class="icon" href="" target="_blank" data-index="11"><img src="${iDribbble}" style="visibility:hidden;"></a>
                            </div>
                            </div>
                            -->
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});
