window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Patrick Duke",
            role: "",
            desc: "Healthcare Sector Lead, Americas<br/><br/>Turner & Townsend",
            photo: "https://www.robinsmorton.com/wp-content/uploads/PDuke-e1743161617512.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name:"Penny Houchens",
            role: "",
            desc: "Executive Vice President, Healthcare Market<br/><br/>Gresham Smith",
            photo: "https://www.robinsmorton.com/wp-content/uploads/PennyHouchens_headshot-scaled.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Jason Hebert",
            role: "",
            desc: "Director of Operations, Senior Associate<br/><br/>TRO Jung | Brannen",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Jason-Hebert-Headshot-2025.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Jake Hughes",
            role: "",
            desc: "Managing Director, Project and Development Services<br/><br/>JLL",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Headshot-Jake-Hughes.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Chris Ressler",
            role: "",
            desc: "Health Lead, Principal<br/><br/>Stantec",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Chris-Ressler-Headshot-scaled-e1743161402593.jpeg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Rachael Rome",
            role: "",
            desc: "Global Director of Mental and Behavioral Health<br/>Design and Studio Practice Leader<br/><br/>HKS",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Rachael-Rome-Headshot-v2-scaled-e1743161287681.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Mike Sewell",
            role: "",
            desc: "Chief Digital Transformation Officer<br/><br/>Gresham Smith",
            photo: "https://www.robinsmorton.com/wp-content/uploads/SewellMike_headshot_Sq.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Jeremy Bolton",
            role: "",
            desc: "Senior Preconstruction Manager<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Jeremy-Bolton-2025._medium.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Matt Hardy",
            role: "",
            desc: "SmartFab® Director<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Matt-Hardy-Gray_pngmedium-1.png",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Mike Jennesse",
            role: "",
            desc: "Project Manager<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/M.Jennesse_medium.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Johnathan Peavy",
            role: "",
            desc: "Operations Manager<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/Peavy-2_medium-cropped.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },
        {
            name: "Erik Smithson",
            role: "",
            desc: "Senior Project Manager<br/><br/>Robins & Morton",
            photo: "https://www.robinsmorton.com/wp-content/uploads/DSC00008_ErikSmithson_medium.jpg",
            website: "https://robinsmorton.com",
            email: "mailto:builders@robinsmorton.com",
            linkedin: "https://www.linkedin.com",
            dribbble: "https://dribbble.com",
        },

    ];

    /* Social Icons */
    var icons = [{
        iWebsite: "https://robinsmorton.com/dailyui/6/assets/link.svg",
        iEmail: "https://robinsmorton.com/dailyui/6/assets/email.svg",
        iLinkedin: "https://robinsmorton.com/dailyui/6/assets/linkedin.svg",
        iDribbble: "https://robinsmorton.com/dailyui/6/assets/dribbble.svg",
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
                            <a class="icon" href="" target="_blank" data-index="1"><img src="${iEmail}" style="visibility:hidden;"></a>
                            <a class="icon" href="" target="_blank" data-index="2"><img src="${iLinkedin}" style="visibility:hidden;"></a>
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
