/* =====================================================================
   snake.exe — ASCII snake. Opens with the Konami code
   (↑ ↑ ↓ ↓ ← → ← → B A) or with the "$ ./snake.sh" button in the footer.
   ===================================================================== */
(() => {
  const W = 28, H = 14;                 // playfield size (inside the border)
  const START_SPEED = 140, MIN_SPEED = 65;

  const modal = document.getElementById("snake");
  const board = document.getElementById("snake-board");
  const msg = document.getElementById("snake-msg");
  const scoreEl = document.getElementById("snake-score");
  const bestEl = document.getElementById("snake-best");
  if (!modal) return;

  const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
  const KEYS = {
    ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
    w: "up", s: "down", a: "left", d: "right", W: "up", S: "down", A: "left", D: "right",
  };

  let snake, dir, queue, food, score, best, state, timer, speed, lastFocus;

  try { best = Number(localStorage.getItem("snake-best")) || 0; } catch (e) { best = 0; }

  function reset() {
    const y = (H / 2) | 0;
    snake = [[6, y], [5, y], [4, y]];
    dir = "right";
    queue = [];
    score = 0;
    speed = START_SPEED;
    placeFood();
  }

  function placeFood() {
    const free = [];
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (!snake.some(([sx, sy]) => sx === x && sy === y)) free.push([x, y]);
    food = free[(Math.random() * free.length) | 0];
  }

  function render() {
    const grid = Array.from({ length: H }, () => Array(W).fill(" "));
    // faint dot grid so the field reads as a "screen"
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if ((x + y) % 4 === 0) grid[y][x] = "·";
    if (food) grid[food[1]][food[0]] = "*";
    snake.forEach(([x, y], i) => (grid[y][x] = i === 0 ? "@" : "o"));
    const top = "+" + "-".repeat(W) + "+";
    board.textContent = [top, ...grid.map((r) => "|" + r.join("") + "|"), top].join("\n");
    scoreEl.textContent = `${t("snake.score")}: ${String(score).padStart(4, "0")}`;
    bestEl.textContent = `${t("snake.best")}: ${String(best).padStart(4, "0")}`;
    msg.textContent =
      state === "ready" ? t("snake.start") :
      state === "paused" ? t("snake.paused") :
      state === "over" ? t("snake.over") : "";
  }

  function turn(next) {
    const last = queue.length ? queue[queue.length - 1] : dir;
    const [dx, dy] = DIRS[next], [lx, ly] = DIRS[last];
    if (dx === -lx && dy === -ly) return;   // no 180° turns
    if (next !== last && queue.length < 3) queue.push(next);
  }

  function step() {
    if (queue.length) dir = queue.shift();
    const [dx, dy] = DIRS[dir];
    const [hx, hy] = snake[0];
    const head = [hx + dx, hy + dy];
    const eating = head[0] === food[0] && head[1] === food[1];
    const body = eating ? snake : snake.slice(0, -1);
    const crash =
      head[0] < 0 || head[0] >= W || head[1] < 0 || head[1] >= H ||
      body.some(([x, y]) => x === head[0] && y === head[1]);

    if (crash) return gameOver();
    snake.unshift(head);
    if (eating) {
      score += 10;
      speed = Math.max(MIN_SPEED, speed - 4);
      placeFood();
      if (!food) return gameOver(); // filled the board
    } else {
      snake.pop();
    }
    render();
    timer = setTimeout(step, speed);
  }

  function gameOver() {
    state = "over";
    clearTimeout(timer);
    if (score > best) {
      best = score;
      try { localStorage.setItem("snake-best", String(best)); } catch (e) {}
    }
    render();
  }

  function action() {
    if (state === "running") { state = "paused"; clearTimeout(timer); render(); }
    else if (state === "paused") { state = "running"; render(); timer = setTimeout(step, speed); }
    else { reset(); state = "running"; render(); timer = setTimeout(step, speed); }
  }

  function open() {
    if (!modal.hidden) return;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    reset();
    state = "ready";
    render();
    document.getElementById("snake-close").focus();
  }

  function close() {
    clearTimeout(timer);
    state = "ready";
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  /* ---- Keyboard ---- */
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); return close(); }
    if (e.key === " " || e.key === "Enter") {
      if (e.target.closest && e.target.closest("#snake-close")) return; // let [x] work
      e.preventDefault();
      return action();
    }
    const d = KEYS[e.key];
    if (d) {
      e.preventDefault();
      if (state === "ready") action();
      if (state === "running") turn(d);
    }
  });

  /* ---- Touch: on-screen pad + swipes ---- */
  modal.querySelectorAll(".snake__pad [data-dir]").forEach((b) =>
    b.addEventListener("click", () => {
      const d = b.dataset.dir;
      if (d === "action") return action();
      if (state === "ready") action();
      if (state === "running") turn(d);
    })
  );
  let touchStart = null;
  board.addEventListener("touchstart", (e) => (touchStart = e.touches[0]), { passive: true });
  board.addEventListener("touchend", (e) => {
    if (!touchStart) return;
    const tch = e.changedTouches[0];
    const dx = tch.clientX - touchStart.clientX, dy = tch.clientY - touchStart.clientY;
    touchStart = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) return action();
    const d = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up");
    if (state === "ready") action();
    if (state === "running") turn(d);
  });

  /* ---- Open / close ---- */
  document.getElementById("snake-open").addEventListener("click", open);
  document.getElementById("snake-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("langchange", () => { if (!modal.hidden) render(); });

  /* ---- Konami code ---- */
  const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let k = 0;
  document.addEventListener("keydown", (e) => {
    if (!modal.hidden) return;
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    k = key === KONAMI[k] ? k + 1 : key === KONAMI[0] ? 1 : 0;
    if (k === KONAMI.length) { k = 0; open(); }
  });
})();
