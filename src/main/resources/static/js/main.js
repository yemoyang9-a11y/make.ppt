document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".reveal");
    const sectionLinks = document.querySelectorAll(".section-nav a");
    const readmeButtons = document.querySelectorAll(".readme-button");

    // 이 함수는 스크롤 시 섹션을 보여줍니다.
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        // 긴 README 섹션도 조금만 보이면 바로 나타납니다.
        threshold: 0.01
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });

    // 현재 화면 위쪽에 있는 섹션의 메뉴를 강조합니다.
    function updateActiveMenu() {
        let currentSection = sections[0];

        sections.forEach(function (section) {
            if (section.getBoundingClientRect().top <= 180) {
                currentSection = section;
            }
        });

        sectionLinks.forEach(function (link) {
            link.classList.remove("active");
        });

        if (currentSection) {
            const activeLink = document.querySelector(
                '.section-nav a[href="#' + currentSection.id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    }

    updateActiveMenu();

    // 섹션 메뉴를 클릭하면 해당 위치로 부드럽게 이동합니다.
    sectionLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const sectionId = link.getAttribute("href");
            const targetSection = document.querySelector(sectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    window.addEventListener("scroll", function () {
        updateActiveMenu();
    });

    // 버튼을 누르면 README 내용을 열고 닫습니다.
    readmeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const readmeContent = button.nextElementSibling;
            const isHidden = readmeContent.hidden;

            readmeContent.hidden = !isHidden;
            button.textContent = isHidden
                ? "README 내용 닫기"
                : "README 내용 보기";
        });
    });

});
