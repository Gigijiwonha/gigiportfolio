'use strick';

const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#testimonials',
    '#contact',
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href = "${id}"]`));
const visibleSections = sectionIds.map(() => false);

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.98],
};
const observer = new IntersectionObserver (observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
    let selectLastOne;
    entries.forEach((entry) => {
        const index = sections.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectLastOne = 
        index === sectionIds.length -1 &&
        entry.isIntersecting &&
        entry.intersectingRatio >= 0.99;
    });

    const navIndex = selectLastOne 
        ? sectionIds.length -1 
        : findFirstIntersecting(visibleSections);
}

function findFirstIntersecting (sections) {
    const index = sections.indexOf(true);
    return index >= 0 ? index : 0;
}
