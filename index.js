// index.js
document.addEventListener("DOMContentLoaded", () => {
    
    const parseMarkdown = (text) => {
        let parsed = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        parsed = parsed.replace(/`(.*?)`/g, "<code>$1</code>");
        return parsed;
    };

    const el = (tag, classNames = "", innerHTML = "") => {
        const element = document.createElement(tag);
        if (classNames) element.className = classNames;
        if (innerHTML) element.innerHTML = parseMarkdown(innerHTML);
        return element;
    };

    // 1. Build Header
    const headerEl = document.getElementById("header-content");
    if (portfolioData.profile.avatar) {
        const img = el("img", "avatar");
        img.src = portfolioData.profile.avatar;
        headerEl.appendChild(img);
    }
    headerEl.appendChild(el("h1", "name", portfolioData.profile.name));
    headerEl.appendChild(el("h2", "title", portfolioData.profile.title));
    const linksDiv = el("div", "links-container");
    portfolioData.profile.links.forEach(link => {
        const a = el("a", "btn-link", link.label);
        a.href = link.url;
        a.target = "_blank";
        linksDiv.appendChild(a);
    });
    headerEl.appendChild(linksDiv);
    headerEl.appendChild(el("blockquote", "about-box", portfolioData.profile.about));

    // 2. Build Skills
    const skillsContainer = document.getElementById("skills-container");
    const ulSkills = el("ul", "skills-list");
    portfolioData.skills.forEach(skill => {
        const li = el("li", "skill-card");
        li.appendChild(el("div", "skill-text", `<strong>${skill.category}:</strong> ${skill.items}`));
        if (skill.icons && skill.icons.length > 0) {
            const iconDiv = el("div", "skill-icons");
            skill.icons.forEach(src => {
                const img = el("img", "skill-icon-img");
                img.src = src;
                iconDiv.appendChild(img);
            });
            li.appendChild(iconDiv);
        }
        ulSkills.appendChild(li);
    });
    skillsContainer.appendChild(ulSkills);

    // 3. Build Projects & Lab
    const buildCards = (dataArray, containerId) => {
        const container = document.getElementById(containerId);
        dataArray.forEach(item => {
            const card = el("div", "card");
            card.appendChild(el("h3", "card-title", item.title));
            if (item.subtitle) card.appendChild(el("p", "card-subtitle", item.subtitle));

            if (item.links && item.links.length > 0) {
                const cardLinks = el("div", "card-links");
                item.links.forEach(link => {
                    const a = el("a", "card-link", `🔗 ${link.label}`);
                    a.href = link.url;
                    a.target = "_blank";
                    cardLinks.appendChild(a);
                });
                card.appendChild(cardLinks);
            }

            if (item.bullets && item.bullets.length > 0) {
                const ul = el("ul", "card-bullets");
                item.bullets.forEach(bullet => ul.appendChild(el("li", "", bullet)));
                card.appendChild(ul);
            }

            // FIXED IMAGE LOGIC
            if (item.images && item.images.length > 0) {
                const imgGrid = el("div", "image-grid");
                item.images.forEach(imgData => {
                    const img = el("img", "card-img");
                    // If you just put a string like "assets/pic.jpg", it uses it.
                    // If you put an object {src: "", alt: ""}, it handles that too.
                    img.src = (typeof imgData === 'string') ? imgData : imgData.src;
                    imgGrid.appendChild(img);
                });
                card.appendChild(imgGrid);
            }
            container.appendChild(card);
        });
    };

    buildCards(portfolioData.projects, "projects-container");
    buildCards(portfolioData.lab, "lab-container");
});