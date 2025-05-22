
async function generate() {
  const url = document.getElementById("bskyUrl").value;
  const output = document.getElementById("output");
  const downloadBtn = document.getElementById("downloadBtn");

  // Dummy rendering for now
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#000";
  ctx.font = "48px sans-serif";
  ctx.fillText("Bluesky Post", 50, 100);
  ctx.font = "32px sans-serif";
  ctx.fillText(url, 50, 200);

  output.innerHTML = "";
  output.appendChild(canvas);

  downloadBtn.style.display = "block";
}

function downloadImage() {
  const canvas = document.querySelector("canvas");
  const link = document.createElement("a");
  link.download = "bluesky-story.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
