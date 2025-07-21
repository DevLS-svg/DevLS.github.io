const feed = document.getElementById("feed");

// Lista estática de publicações (você pode expandir isso depois dinamicamente)
const posts = [
  {
    title: "Fingerprint: Identidade Digital Invisível",
    file: "posts/fingerprint.html"
  },
  {
    title: "DevLS - A internet manual ainda respira!!",
    file: "posts/manual-web.html"
  },
  {
    title: "A Evolução dos ataques web - DevLS 2025",
    file: "posts/evolucao-ataques-web.html"
  }
  
];

function renderPosts() {
  feed.innerHTML = "";
  posts.forEach(post => {
    feed.innerHTML += `
      <div class="post-preview">
        <h2>${post.title}</h2>
        <a href="${post.file}" target="_blank">👁️ Ler publicação</a>
        <hr />
      </div>
    `;
  });
}

function alternarTema() {
  document.body.classList.toggle("modo-claro");
}
function alternarTema() {
  document.body.classList.toggle("modo-claro");

  const terminal = document.querySelectorAll(".terminal");
  terminal.forEach(el => {
    el.classList.toggle("modo-claro");
  });
}


window.addEventListener("load", renderPosts);
