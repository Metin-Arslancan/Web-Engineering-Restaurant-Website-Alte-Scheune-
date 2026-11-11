const searchToggle = document.getElementById("searchToggle");
const searchBox    = document.getElementById("searchBox");
const searchInput  = document.getElementById("searchInput");

const resultCount  = document.getElementById("resultCount");
const prevBtn      = document.getElementById("prevResult");
const nextBtn      = document.getElementById("nextResult");

const content      = document.getElementById("content");

let overlayContainer = null;
let positions = [];
let currentIndex = -1;


// Suchfeld öffnen/schließen
searchToggle.addEventListener("click", (e) => {
    e.preventDefault();

    searchBox.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
        searchInput.focus();
    } else {
        clearOverlays();
        searchInput.value = "";
        resultCount.textContent = "0 Treffer";
    }
});

function clearOverlays() {
    if (overlayContainer) overlayContainer.remove();
    overlayContainer = null;
    positions = [];
    currentIndex = -1;
}

searchInput.addEventListener("input", () => {
    clearOverlays();
    const term = searchInput.value.trim();

    if (term.length < 1) {
        resultCount.textContent = "0 Treffer";
        return;
    }

    positions = findMatches(term);
    createOverlays(positions);

    resultCount.textContent = `${positions.length} Treffer`;

    if (positions.length > 0) goTo(0);
});

function findMatches(term) {
    const regex = new RegExp(term, "gi");

    const walker = document.createTreeWalker(
        content,
        NodeFilter.SHOW_TEXT
    );

    const found = [];
    let node;

    while ((node = walker.nextNode())) {
        const text = node.nodeValue;
        let match;
        while ((match = regex.exec(text)) !== null) {
            found.push({ node, index: match.index, length: match[0].length });
        }
    }

    return found;
}

function createOverlays(matches) {
    overlayContainer = document.createElement("div");
    overlayContainer.style.position = "absolute";
    overlayContainer.style.top = "0";
    overlayContainer.style.left = "0";
    overlayContainer.style.width = "100%";
    overlayContainer.style.height = "100%";
    overlayContainer.style.pointerEvents = "none";
    overlayContainer.style.zIndex = "9998";

    document.body.appendChild(overlayContainer);

    const range = document.createRange();

    matches.forEach((m, i) => {
        range.setStart(m.node, m.index);
        range.setEnd(m.node, m.index + m.length);

        const rect = range.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const highlight = document.createElement("div");
        highlight.className = "overlay-highlight";
        highlight.style.top = rect.top + window.scrollY + "px";
        highlight.style.left = rect.left + window.scrollX + "px";
        highlight.style.width = rect.width + "px";
        highlight.style.height = rect.height + "px";

        overlayContainer.appendChild(highlight);

        m.element = highlight;
    });
}

// Zu Treffer springen
function goTo(i) {
    if (positions.length === 0) return;

    positions.forEach(m => m.element.classList.remove("overlay-active"));

    currentIndex = (i + positions.length) % positions.length;
    const active = positions[currentIndex];

    active.element.classList.add("overlay-active");
    active.element.scrollIntoView({ behavior: "smooth", block: "center" });
}


// Buttons
prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
