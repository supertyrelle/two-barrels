// typing animations
import TypeIt from 'typeit';
// animate on scroll animations 
import AOS from 'aos';
// page transitions!
import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';
// custom alerts
import Swal from 'sweetalert2';

// initiate smooth page transitions and dom manipulation with swup.js
const options = {
    cache: true,
    linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^=""]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    animateHistoryBrowsing: true,
    plugins: [new SwupScrollPlugin({
        doScrollingRightAway: true,
        animateScroll: true,
        scrollFriction: 0.2,
        scrollAcceleration: 0.06,
    })]
};
const swup = new Swup(options);

// checks location on load.
checklocation();

// if user changes pages, the check location function,
// re-assigns the active link on the top navigation and runs
// corresponding functions to align with the page that the user is on.
// console.log(window.location.pathname);
document.addEventListener('swup:contentReplaced', event => {
    checklocation();
});

function checklocation() {
    const endpoint = window.location.pathname;
    // declaring breakdown of links
    const overviewLink = document.getElementById("overview-link");
    const whoLink = document.getElementById("who-link");
    const jobsLink = document.getElementById("jobs-link");
    const howWeLink = document.getElementById("how-we-work-link");
    const getALink = document.getElementById("get-a-job-link");
    const contactLink = document.getElementById("contact-link");
    // mobile links
    const overviewLinkMob = document.getElementById("overview-link-m");
    const whoLinkMob = document.getElementById("who-link-m");
    const jobsLinkMob = document.getElementById("jobs-link-m");
    const howWeLinkMob = document.getElementById("how-we-work-link-m");
    const getALinkMob = document.getElementById("get-a-job-link-m");
    const applyMob = document.getElementById("apply-link-m");
    const contactLinkMob = document.getElementById("contact-link-m");

    // if endpoint is of a specific page, remove the current menu class, 
    // assign the active class on the menu to the page and run that page's script.
    if (endpoint == "/index.html") {
        removeactive();
        overview();
        overviewLink.classList.add("active");
        overviewLinkMob.classList.add("active");
    } else
    if (endpoint == "/who-we-are.html") {
        removeactive();
        whoLink.classList.add("active");
        whoLinkMob.classList.add("active");
    } else if (endpoint == "/jobs.html") {
        removeactive();
        jobs();
        jobsLink.classList.add("active");
        jobsLinkMob.classList.add("active");
    } else if (endpoint == "/get-a-job.html") {
        removeactive();
        jobsLink.classList.add("active");
        jobsLinkMob.classList.add("active");
        getALink.classList.add("active");
        getALinkMob.classList.add("active");
    } else if (endpoint == "/how-we-hire.html") {
        removeactive();
        jobsLink.classList.add("active");
        jobsLinkMob.classList.add("active");
        howWeLink.classList.add("active");
        howWeLinkMob.classList.add("active");
    } else if (endpoint == "/job.html") {
        removeactive();
        job();
        jobsLink.classList.add("active");
        jobsLinkMob.classList.add("active");
    } else if (endpoint == "/apply.html") {
        removeactive();
        apply();
        jobsLink.classList.add("active");
        applyMob.classList.add("active");
    } else if (endpoint == "/contact.html") {
        removeactive();
        contact();
        contactLink.classList.add("active");
        contactLinkMob.classList.add("active");
    } else {
        removeactive();
        overview();
        overviewLink.classList.add("active");
        overviewLinkMob.classList.add("active");
    }

    function removeactive() {
        overviewLink.classList.remove("active");
        whoLink.classList.remove("active");
        jobsLink.classList.remove("active");
        getALink.classList.remove("active");
        howWeLink.classList.remove("active");
        contactLink.classList.remove("active");
        overviewLinkMob.classList.remove("active");
        whoLinkMob.classList.remove("active");
        jobsLinkMob.classList.remove("active");
        getALinkMob.classList.remove("active");
        howWeLinkMob.classList.remove("active");
        applyMob.classList.remove("active");
        contactLinkMob.classList.remove("active");
    };

    function animateOnScroll() {
        // AOS.init();
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 95, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }
    animateOnScroll();
}

function overview() {
    // typing animation for the front page!
    function jobText() {
        const instance = new TypeIt('#replace', {
            strings: ["Work", "Create", "Succeed"],
            speed: 200,
            cursorSpeed: 1400,
            waitUntilVisible: true,
            breakLines: false,
            loop: true,
            loopDelay: 3000,
            waitUntilVisible: true,
            nextStringDelay: 1950
        }).go();
    }
    // when user clicks the call to action button, scroll to second area of index page
    function ctaScroll() {
        const moreCTA = document.getElementById("more-cta");
        moreCTA.onclick = function () {
            const contentTop = document.getElementById('content-top');
            const contentTopLocation = contentTop.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = -40;

            window.scrollTo({
                top: contentTopLocation + yOffset,
                behavior: 'smooth'
            });
        };
    }

    jobText();
    ctaScroll();
};
// accordion interactivity for bottom of page, derived from 
// the deprecated w3 schools resource: https://www.w3schools.com/howto/howto_js_accordion.asp
function jobs() {
    const acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

function job() {
    // use sweetalert to generate popups for each job benefit on the job listings page
    function jobBenefits() {
        const greatWage = document.getElementById("great-wage");
        const paidTime = document.getElementById("paid-time");
        const paidHolidays = document.getElementById("paid-holidays");
        const retMatching = document.getElementById("ret-matching");
        const paidMedical = document.getElementById("paid-medical");
        const matpatLeave = document.getElementById("mat-leave");
        const flexHours = document.getElementById("flex-hours");
        const pizzaStreet = document.getElementById("pizza-street");
        const crappyParking = document.getElementById("crappy-parking");

        greatWage.onclick = function () {
            greatWagePopup()
        };
        paidTime.onclick = function () {
            paidTimePopup()
        };
        paidHolidays.onclick = function () {
            paidHolidaysPopup()
        };
        retMatching.onclick = function () {
            retMatchingPopup()
        };
        paidMedical.onclick = function () {
            paidMedicalPopup()
        };
        matpatLeave.onclick = function () {
            matpatLeavePopup()
        };
        flexHours.onclick = function () {
            flexHoursPopup()
        };
        pizzaStreet.onclick = function () {
            pizzaStreetPopup()
        };
        crappyParking.onclick = function () {
            crappyParkingPopup()
        };

        function greatWagePopup() {
            Swal.fire({
                title: 'Wages',
                html: '<p class="paragraph">Two Barrels pays well, and we care about the people who work here, which is why we conduct annual performance reviews with a raise option to provide opportunities for candid discussion.</p> <p class="paragraph">These reviews allow our employees to demonstrate how they excelled in the previous year and discuss their goals for the year to come.</p>',
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/dollar.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function paidTimePopup() {
            Swal.fire({
                title: 'Paid Time Off (PTO)',
                html: `<p class="paragraph">Two Barrels employees can earn up to 18 days paid time off each year, and this time starts accruing on your first day. Once earned, your PTO doesn’t expire, so you can even carry it over to the next calendar year. You can use your PTO for sick days, vacations, or personal days. You can also take additional unpaid time off, including extended unpaid time, if your work is getting done.</p> <p class="paragraph">To request time off, you’ll first talk to the people you’re working with on your current projects and work out what you need to do to make your time off happen. You can then tell the HR department when you’ll be gone. Our goal is always to plan extended time off beforehand. Time off is important, and it always works better with better planning.</p>`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/calendar.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function paidHolidaysPopup() {
            Swal.fire({
                title: 'Paid Time Off (PTO)',
                html: `<p class="paragraph">Two Barrels offers its employees 4 paid holidays off annually. We recognize that everyone celebrates holidays differently and what may be an important holiday for one employee is different for another. So employees get to choose which holidays they want to work and which ones they want off.</p>`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/holly.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function retMatchingPopup() {
            Swal.fire({
                title: 'Retirement',
                html: `<p class="paragraph">Two Barrels provides an optional Simple IRA plan managed by Fidelity and makes matching contributions of up to 3% of an employee’s annual compensation. Employees can enroll on their first day and take advantage of the Simple IRA’s tax-deferred growth potential with pretax contributions.</p><p class="paragraph">The plan offers employees self-directed investment options, including a wide range of mutual funds, stocks, bonds, ETFs, and FDIC-insured CDs. Fidelity also offers its support and guidance to help you choose your investments wisely and create a long-term plan.</p>`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/hand.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function paidMedicalPopup() {
            Swal.fire({
                title: 'Health Insurance',
                html: `<p class="paragraph">Two Barrels is proud to offer its employees 100% employer-paid medical, dental and vision insurance through Premera Blue Cross. There is a 60 day waiting period for new employees, and coverage begins the first of the month following the end of the waiting period.</p><div class="insurance-details"><p class="paragraph">Read through the following items if you'd like to learn more:</p>` +
                    `<a href="http://www.twobarrels.com/wp-content/uploads/2017/06/High-Level-Summary.pdf" target="_blank"><i class="fas fa-briefcase-medical"></i>Insurance Plan High Level Summary</a>` +
                    `<a href="http://www.twobarrels.com/wp-content/uploads/2017/06/employee-medical-costs.pdf" target="_blank"><i class="fas fa-money-bill-wave"></i>Cost for Adding Dependents</a>` +
                    `<a href="http://www.twobarrels.com/wp-content/uploads/2017/06/Premera-Summary-Plan.pdf" target="_blank"><i class="fas fa-building"></i>Premera Blue Cross Summary Plan</a>` +
                    `<a href="http://www.twobarrels.com/wp-content/uploads/2017/06/SBC-uniform-glossary-final.pdf.pdf" target="_blank"><i class="fas fa-file-alt"></i>Glossary of Health Coverage & Medical Terms</a>` + `</div>`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/hand.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function matpatLeavePopup() {
            Swal.fire({
                title: 'Maternity and Paternity Leave',
                html: `<p class="paragraph">Having a child join your family is a big deal! We want you to take some time and enjoy this new chapter in life, so we offer three weeks of paid Maternity and Paternity Leave. This leave is for biological or adopted children.</p>`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/stroller.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function flexHoursPopup() {
            Swal.fire({
                title: 'Flexible Hours',
                html: `<p class="paragraph">Hey, some people are morning people and some people aren’t, so we don’t really care when you start your day… but you need to be able to coordinate your schedule with your team. If most of your team gets to the office at 7 am and you’re showing up at 11 am, that probably won’t be sustainable. It’s common sense. You’ll need to show up when you’re needed or convince your team to sleep in a little later.</p>` + `<p class="paragraph">We’re all “Computer Employees” exempt from overtime pay, but our goal is to never have to ask you to work over 40 hours. We know continually working a ton of hours is not sustainable. We’d like to think you can get more done when you’re fresh and happy.</p>` + `<p class="paragraph">We also all work onsite, and we don’t hire remote workers. We like to think that we’re smarter when we work together. Collaboration and teamwork are key to how we work at Two Barrels.</p>`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/clock.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function pizzaStreetPopup() {
            Swal.fire({
                title: 'Pizza!',
                html: `<p class="paragraph">Not only do we have pizza across the street, we are centrally located in downtown Spokane within walking distance from the area’s best cafes, restaurants, and bars.</p>`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/pizza.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };

        function crappyParkingPopup() {
            Swal.fire({
                title: 'Parking',
                html: `<img src="https://media.giphy.com/media/geLZzq5cskAHC/giphy.gif">`,
                // type: 'success',
                confirmButtonText: 'Close',
                imageUrl: 'https://supertyrelle.com/2b/icons/parking.svg',
                customClass: {
                    popup: 'job-popup',
                    header: 'header-class',
                    title: 'title',
                    image: 'popup-icon',
                    content: 'popup-content',
                    confirmButton: 'popup-confirm'

                }
            });
        };
    };
    jobBenefits();

};

function apply() {
    // use sweetalert to generate a popup for when the user submits the 
    // form on the appply page, scroll to top afterward
    const sendAppButton = document.getElementById("send-app");
    sendAppButton.onclick = function () {
        function emptyForm() {
            document.getElementById("apply-input").reset();
        }
        emptyForm();
        Swal.fire({
            title: 'Application Recieved',
            text: "Thank you for your interest in Two Barrels. Please await our signal.",
            type: 'success',
            // position: 'bottom-end',
            confirmButtonText: 'Sounds good',
            // timer: 4200,
            customClass: {
                container: 'container-class',
                popup: 'contact-popup',
                header: 'header-class',
                backdrop: false,
                title: 'popup-title',
                closeButton: 'close-button-class',
                icon: 'icon-class',
                confirmButton: 'popup-confirm',
            },
            onAfterClose: () => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })

        });

    };
};

function contact() {
    // use sweetalert to generate a popup for when the user submits the 
    // form on the appply page, scroll to top afterward
    const sendMsgButton = document.getElementById("send-msg");
    sendMsgButton.onclick = function () {
        function emptyForm() {
            document.getElementById("contact-input").reset();
        }
        emptyForm();
        Swal.fire({
            title: 'Message sent',
            text: "Thanks for sending us your message. We'll get back to you as soon as possible!",
            type: 'success',
            // position: 'top-end',
            confirmButtonText: 'Sounds good',
            timer: 4200,
            customClass: {
                container: 'container-class',
                popup: 'contact-popup',
                header: 'header-class',
                backdrop: false,
                title: 'popup-title',
                closeButton: 'close-button-class',
                icon: 'icon-class',
                confirmButton: 'popup-confirm',
            },
            onAfterClose: () => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })

        });

    };
};