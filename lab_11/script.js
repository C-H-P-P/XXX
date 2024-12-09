let activeTags = [];

function toggleTag(tag) {
    const index = activeTags.indexOf(tag);
    if (index === -1) activeTags.push(tag);
    else activeTags.splice(index, 1);

    document.querySelectorAll(".tags button").forEach(button => {
        button.classList.toggle("active", activeTags.includes(button.textContent.toLowerCase()));
    });

    filterJobs();
}

function filterJobs() {
    document.querySelectorAll(".job").forEach(job => {
        const tags = job.getAttribute("data-tags").split(" ");
        const isVisible = activeTags.every(tag => tags.includes(tag));
        job.classList.toggle("hidden", !isVisible && activeTags.length > 0);
    });
}
