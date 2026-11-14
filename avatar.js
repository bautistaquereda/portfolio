/* =====================================================================
   ASCII avatar: redraws itself on page load and blinks every few seconds.
   Works on both versions (night: .ascii-art--dark / day: .ascii-art--light).
   ===================================================================== */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SCRAMBLE = "@#%*+=~-:.";

  // Eye area (row, [from col, to col]) — same position in both versions
  const EYE_ROWS = { lids: 19, lashes: 20 };
  const EYE_COLS = [[35, 45], [51, 61]];

  const arts = [...document.querySelectorAll(".ascii-art")].map((el) => {
    const original = el.textContent;
    const isLight = el.classList.contains("ascii-art--light");
    return { el, original, blink: makeBlink(original, isLight) };
  });

  function makeBlink(text, isLight) {
    const rows = text.split("\n").map((r) => r.split(""));
    const skin = isLight ? " " : "@";   // light version is inverted
    const lash = isLight ? "=" : "-";
    for (const [from, to] of EYE_COLS) {
      for (let x = from; x <= to; x++) {
        if (rows[EYE_ROWS.lids]?.[x] !== undefined) rows[EYE_ROWS.lids][x] = skin;
        if (rows[EYE_ROWS.lashes]?.[x] !== undefined) rows[EYE_ROWS.lashes][x] = lash;
      }
    }
    return rows.map((r) => r.join("")).join("\n");
  }

  const visible = (a) => a.el.offsetParent !== null;
  let drawing = false;

  /* ---- Redraw on load: top-to-bottom wipe with a scrambled edge ---- */
  function redraw(art, duration = 1600) {
    const chars = art.original.split("");
    const lines = art.original.split("\n");
    const H = lines.length;
    // each char gets a reveal time: mostly by row, with some noise
    let row = 0;
    const at = chars.map((c) => {
      if (c === "\n") { row++; return 0; }
      return (row / H) * 0.75 + Math.random() * 0.25;
    });
    drawing = true;
    const t0 = performance.now();

    function frame(now) {
      const p = Math.min(1, (now - t0) / duration);
      let s = "";
      for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (c === "\n" || c === " ") s += c;
        else if (at[i] <= p - 0.06) s += c;                                       // settled
        else if (at[i] <= p) s += SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0]; // scrambling
        else s += " ";                                                             // not drawn yet
      }
      art.el.textContent = s;
      if (p < 1) requestAnimationFrame(frame);
      else { art.el.textContent = art.original; drawing = false; }
    }
    requestAnimationFrame(frame);
  }

  /* ---- Blink every few seconds (sometimes twice) ---- */
  function blinkOnce(art, ms = 130) {
    art.el.textContent = art.blink;
    setTimeout(() => (art.el.textContent = art.original), ms);
  }

  function scheduleBlink() {
    setTimeout(() => {
      const art = arts.find(visible);
      if (art && !drawing && !document.hidden) {
        blinkOnce(art);
        if (Math.random() < 0.25) setTimeout(() => blinkOnce(art), 260); // double blink
      }
      scheduleBlink();
    }, 2800 + Math.random() * 4200);
  }

  if (reduceMotion || !arts.length) return;
  const first = arts.find(visible);
  if (first) redraw(first);
  scheduleBlink();
})();
