const selectedTags = [];
function addTag(tag) {
    if (!selectedTags.includes(tag)) {
        selectedTags.push(tag);
    } else {
        const index = selectedTags.indexOf(tag);
        selectedTags.splice(index, 1);
    }
    filterJobs();
}
function filterJobs() {
    const jobs = document.querySelectorAll(".job");
    jobs.forEach(job => {
        const jobTags = job.getAttribute("data-tags").split(" ");
        const isMatch = selectedTags.every(tag => jobTags.includes(tag));
        job.classList.toggle("hidden", !isMatch && selectedTags.length > 0);
    });
}
