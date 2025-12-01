// Load and show IP
async function loadIP() {
    const res = await fetch("/api/ip");
    const data = await res.json();
    const ip = data.ip;

    document.getElementById("ipDisplay").innerText = "Your IP: " + ip;
    return ip;
}

async function handleSearch() {
    const query = document.getElementById("search").value;
    if (!query) return alert("Enter a search term.");

    const ip = await loadIP();

    // Build a URL using the user's IP
    const url = `http://${ip}/search?q=${encodeURIComponent(query)}`;

    window.location.href = url;
}

loadIP();
