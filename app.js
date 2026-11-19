/* =========================================================
   APP.JS - LOGIKA SIMULASI ABM SMK 2026
   Mengatur alur subtes, timer mundur per subtes, status jawaban,
   mode hafalan Klerikal Memory, dan penghitungan skor akhir.
   ========================================================= */

const state = {
  student: { nama: "", nisn: "", jurusan: "", mode: "full" },
  currentSubtestIdx: 0,
  currentQuestionIdx: 0,
  answers: {},      // { questionId: optionIndex }
  flagged: {},      // { questionId: true }
  timerInterval: null,
  memoryInterval: null,
  secondsLeft: 0
};

// DOM Elements
const views = {
  login: document.getElementById("view-login"),
  instruction: document.getElementById("view-instruction"),
  exam: document.getElementById("view-exam"),
  result: document.getElementById("view-result")
};

const topbarStatus = document.getElementById("topbar-status");
const subtestBadge = document.getElementById("subtest-badge");
const timerBox = document.getElementById("timer-box");
const timerDisplay = document.getElementById("timer-display");

function showView(viewName) {
  Object.keys(views).forEach((key) => {
    views[key].style.display = key === viewName ? (key === "exam" ? "grid" : "block") : "none";
  });
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// 1. LOGIN HANDLER
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  state.student.nama = document.getElementById("input-nama").value.trim();
  state.student.nisn = document.getElementById("input-nisn").value.trim();
  state.student.jurusan = document.getElementById("input-jurusan").value;
  state.student.mode = document.getElementById("input-mode").value;

  state.currentSubtestIdx = 0;
  state.currentQuestionIdx = 0;
  state.answers = {};
  state.flagged = {};

  topbarStatus.style.display = "flex";
  setupPracticeSwitcher();
  openSubtestInstruction(0);
});

function setupPracticeSwitcher() {
  const switcher = document.getElementById("practice-switcher");
  const select = document.getElementById("select-subtest");
  if (state.student.mode === "practice") {
    switcher.style.display = "flex";
    select.innerHTML = ABM_SUBTESTS.map(
      (s, idx) => `<option value="${idx}">Subtes ${s.id}: ${s.name} (${s.count} soal)</option>`
    ).join("");
    select.onchange = (e) => {
      clearInterval(state.timerInterval);
      openSubtestInstruction(parseInt(e.target.value, 10));
    };
  } else {
    switcher.style.display = "none";
  }
}

// 2. HALAMAN PETUNJUK SUBTES
function openSubtestInstruction(subtestIdx) {
  clearInterval(state.timerInterval);
  clearInterval(state.memoryInterval);

  state.currentSubtestIdx = subtestIdx;
  state.currentQuestionIdx = 0;
  const sub = ABM_SUBTESTS[subtestIdx];

  subtestBadge.textContent = `Subtes ${sub.id}/14`;
  timerDisplay.textContent = formatTime(sub.minutes * 60);
  timerBox.classList.remove("timer-danger");

  document.getElementById("inst-group").textContent = `Kelompok ${sub.group}`;
  document.getElementById("inst-number").textContent = `Subtes ${sub.id} dari 14`;
  document.getElementById("inst-title").textContent = sub.name;
  document.getElementById("inst-count").textContent = `${sub.count} Soal`;
  document.getElementById("inst-time").textContent = `${sub.minutes} Menit`;
  document.getElementById("inst-desc").textContent = sub.desc;

  // Khusus Subtes 14 (Klerikal Memory)
  const memPreview = document.getElementById("inst-memory-preview");
  const memTbody = document.getElementById("memory-table-body");
  if (sub.memoryTable) {
    memPreview.style.display = "block";
    memTbody.innerHTML = sub.memoryTable
      .map(
        (row) =>
          `<tr><td><strong>${row[0]}</strong></td><td>${row[1]}</td><td><strong>${row[2]}</strong></td><td>${row[3]}</td></tr>`
      )
      .join("");
    let memSec = 30;
    const memCountdown = document.getElementById("memory-countdown");
    memCountdown.textContent = `Waktu Hafalan: ${memSec} detik`;
    state.memoryInterval = setInterval(() => {
      memSec--;
      if (memSec <= 0) {
        clearInterval(state.memoryInterval);
        startSubtestExam();
      } else {
        memCountdown.textContent = `Waktu Hafalan: ${memSec} detik`;
      }
    }, 1000);
  } else {
    memPreview.style.display = "none";
  }

  showView("instruction");
}

document.getElementById("btn-start-subtest").addEventListener("click", () => {
  clearInterval(state.memoryInterval);
  startSubtestExam();
});

// 3. MULAI PENGERJAAN SUBTES
function startSubtestExam() {
  const sub = ABM_SUBTESTS[state.currentSubtestIdx];
  state.secondsLeft = sub.minutes * 60;

  if (state.student.mode === "practice") {
    document.getElementById("select-subtest").value = String(state.currentSubtestIdx);
  }

  showView("exam");
  renderQuestion();
  renderNavGrid();
  startSubtestTimer();
}

function startSubtestTimer() {
  clearInterval(state.timerInterval);
  timerDisplay.textContent = formatTime(state.secondsLeft);

  state.timerInterval = setInterval(() => {
    state.secondsLeft--;
    timerDisplay.textContent = formatTime(Math.max(0, state.secondsLeft));

    if (state.secondsLeft <= 30) {
      timerBox.classList.add("timer-danger");
    } else {
      timerBox.classList.remove("timer-danger");
    }

    if (state.secondsLeft <= 0) {
      clearInterval(state.timerInterval);
      alert(`Waktu untuk Subtes ${ABM_SUBTESTS[state.currentSubtestIdx].id} telah habis! Melanjutkan ke tahap berikutnya.`);
      advanceSubtest();
    }
  }, 1000);
}

// 4. RENDER SOAL & NAVIGASI
function renderQuestion() {
  const sub = ABM_SUBTESTS[state.currentSubtestIdx];
  const qObj = sub.questions[state.currentQuestionIdx];

  document.getElementById("exam-subtest-title").textContent = `Subtes ${sub.id}: ${sub.name}`;
  document.getElementById("exam-q-number").textContent = `Soal Nomor ${qObj.id} (${state.currentQuestionIdx + 1} dari ${sub.count})`;

  // Stimulus (Bacaan / Tabel / Kasus)
  const stimBox = document.getElementById("exam-stimulus");
  if (qObj.stimulus) {
    stimBox.style.display = "block";
    stimBox.innerHTML = qObj.stimulus;
  } else {
    stimBox.style.display = "none";
  }

  // Pertanyaan atau Perbandingan Klerikal
  const qTextEl = document.getElementById("exam-question-text");
  const optsEl = document.getElementById("exam-options");
  const letters = ["A", "B", "C", "D", "E"];

  if (sub.id === 13) {
    // Format khusus Klerikal Akurasi
    qTextEl.innerHTML = `
      <div>Bandingkan kedua data karakter berikut:</div>
      <div class="clerical-compare">
        <span>${qObj.left}</span>
        <span>&harr;</span>
        <span>${qObj.right}</span>
      </div>
    `;
    const clericalOpts = ["SAMA (Identik Persis)", "TIDAK SAMA (Ada Perbedaan)"];
    optsEl.innerHTML = clericalOpts
      .map((optText, idx) => {
        const isSelected = state.answers[qObj.id] === idx;
        return `
          <div class="option-item ${isSelected ? "selected" : ""}" data-idx="${idx}">
            <span class="option-letter">${letters[idx]}</span>
            <span>${optText}</span>
          </div>
        `;
      })
      .join("");
  } else {
    qTextEl.innerHTML = qObj.q;
    optsEl.innerHTML = qObj.opts
      .map((optText, idx) => {
        const isSelected = state.answers[qObj.id] === idx;
        return `
          <div class="option-item ${isSelected ? "selected" : ""}" data-idx="${idx}">
            <span class="option-letter">${letters[idx]}</span>
            <span>${optText}</span>
          </div>
        `;
      })
      .join("");
  }

  // Event klik pilihan jawaban
  optsEl.querySelectorAll(".option-item").forEach((el) => {
    el.addEventListener("click", () => {
      const chosen = parseInt(el.getAttribute("data-idx"), 10);
      state.answers[qObj.id] = chosen;
      renderQuestion();
      renderNavGrid();
    });
  });

  // Tombol Ragu-ragu
  const btnFlag = document.getElementById("btn-flag");
  if (state.flagged[qObj.id]) {
    btnFlag.classList.add("active");
  } else {
    btnFlag.classList.remove("active");
  }

  // Tombol Sebelumnya / Selanjutnya / Selesai Subtes
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnFinishSub = document.getElementById("btn-finish-subtest");

  btnPrev.disabled = state.currentQuestionIdx === 0;
  if (state.currentQuestionIdx === sub.questions.length - 1) {
    btnNext.style.display = "none";
    btnFinishSub.style.display = "inline-flex";
    btnFinishSub.textContent =
      state.currentSubtestIdx === ABM_SUBTESTS.length - 1
        ? "Selesai Seluruh Ujian ✓"
        : "Selesai Subtes Ini ✓";
  } else {
    btnNext.style.display = "inline-flex";
    btnFinishSub.style.display = "none";
  }
}

function renderNavGrid() {
  const sub = ABM_SUBTESTS[state.currentSubtestIdx];
  const grid = document.getElementById("nav-grid");
  let answeredCount = 0;

  grid.innerHTML = sub.questions
    .map((qObj, idx) => {
      const isAnswered = state.answers[qObj.id] !== undefined;
      if (isAnswered) answeredCount++;
      const isFlagged = !!state.flagged[qObj.id];
      const isCurrent = idx === state.currentQuestionIdx;

      let cls = "nav-btn";
      if (isCurrent) cls += " current";
      if (isFlagged) cls += " flagged";
      else if (isAnswered) cls += " answered";

      return `<button class="${cls}" data-qidx="${idx}">${idx + 1}</button>`;
    })
    .join("");

  document.getElementById("nav-answered-count").textContent = `${answeredCount} / ${sub.count} Dijawab`;

  grid.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.currentQuestionIdx = parseInt(btn.getAttribute("data-qidx"), 10);
      renderQuestion();
      renderNavGrid();
    });
  });
}

document.getElementById("btn-flag").addEventListener("click", () => {
  const sub = ABM_SUBTESTS[state.currentSubtestIdx];
  const qObj = sub.questions[state.currentQuestionIdx];
  state.flagged[qObj.id] = !state.flagged[qObj.id];
  renderQuestion();
  renderNavGrid();
});

document.getElementById("btn-prev").addEventListener("click", () => {
  if (state.currentQuestionIdx > 0) {
    state.currentQuestionIdx--;
    renderQuestion();
    renderNavGrid();
  }
});

document.getElementById("btn-next").addEventListener("click", () => {
  const sub = ABM_SUBTESTS[state.currentSubtestIdx];
  if (state.currentQuestionIdx < sub.questions.length - 1) {
    state.currentQuestionIdx++;
    renderQuestion();
    renderNavGrid();
  }
});

document.getElementById("btn-finish-subtest").addEventListener("click", () => {
  const isLast = state.currentSubtestIdx === ABM_SUBTESTS.length - 1;
  const msg = isLast
    ? "Apakah Anda yakin ingin mengakhiri seluruh simulasi dan melihat hasil?"
    : "Apakah Anda yakin ingin menyelesaikan subtes ini? Anda tidak dapat kembali ke subtes ini setelah berpindah.";
  if (confirm(msg)) {
    clearInterval(state.timerInterval);
    advanceSubtest();
  }
});

function advanceSubtest() {
  if (state.currentSubtestIdx < ABM_SUBTESTS.length - 1) {
    openSubtestInstruction(state.currentSubtestIdx + 1);
  } else {
    finishAllExam();
  }
}

// 5. HALAMAN HASIL & PEMBAHASAN
function finishAllExam() {
  clearInterval(state.timerInterval);
  topbarStatus.style.display = "none";

  document.getElementById("res-student-name").textContent = state.student.nama;
  document.getElementById("res-student-meta").textContent = `NISN: ${state.student.nisn} | Jurusan: ${state.student.jurusan}`;

  let totalCorrect = 0;
  let totalQuestions = 0;
  const domainStats = {}; // { groupName: { correct, total } }

  const subtestRows = ABM_SUBTESTS.map((sub) => {
    let subCorrect = 0;
    sub.questions.forEach((qObj) => {
      totalQuestions++;
      if (state.answers[qObj.id] === qObj.ans) {
        subCorrect++;
        totalCorrect++;
      }
    });

    if (!domainStats[sub.group]) {
      domainStats[sub.group] = { correct: 0, total: 0 };
    }
    domainStats[sub.group].correct += subCorrect;
    domainStats[sub.group].total += sub.count;

    const pct = Math.round((subCorrect / sub.count) * 100);
    return `
      <tr>
        <td>${sub.id}</td>
        <td><strong>${sub.name}</strong></td>
        <td>${sub.group}</td>
        <td>${sub.count}</td>
        <td>${subCorrect}</td>
        <td><strong>${pct}%</strong></td>
      </tr>
    `;
  }).join("");

  document.getElementById("res-total-correct").textContent = `${totalCorrect} / ${totalQuestions}`;
  document.getElementById("res-total-pct").textContent = `${Math.round((totalCorrect / totalQuestions) * 100)}%`;
  document.getElementById("res-subtest-tbody").innerHTML = subtestRows;

  // Render Domain Bars
  const domainBarsEl = document.getElementById("res-domain-bars");
  domainBarsEl.innerHTML = Object.keys(domainStats)
    .map((grp) => {
      const d = domainStats[grp];
      const pct = Math.round((d.correct / d.total) * 100);
      return `
        <div class="domain-item">
          <div class="domain-top">
            <span>${grp}</span>
            <span>${d.correct}/${d.total} (${pct}%)</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    })
    .join("");

  setupReviewSection();
  showView("result");
}

function setupReviewSection() {
  const filterSelect = document.getElementById("filter-review-subtest");
  filterSelect.innerHTML = ABM_SUBTESTS.map(
    (s) => `<option value="${s.id}">Subtes ${s.id}: ${s.name}</option>`
  ).join("");

  filterSelect.onchange = () => renderReviewList(parseInt(filterSelect.value, 10));
  renderReviewList(1);
}

function renderReviewList(subtestId) {
  const sub = ABM_SUBTESTS.find((s) => s.id === subtestId);
  const listEl = document.getElementById("review-list");
  const letters = ["A", "B", "C", "D", "E"];

  listEl.innerHTML = sub.questions
    .map((qObj) => {
      const userAns = state.answers[qObj.id];
      const isCorrect = userAns === qObj.ans;

      let questionHtml = "";
      let userText = "Tidak dijawab";
      let correctText = "";

      if (sub.id === 13) {
        const cOpts = ["SAMA", "TIDAK SAMA"];
        questionHtml = `<code>${qObj.left}</code> &harr; <code>${qObj.right}</code>`;
        if (userAns !== undefined) userText = `${letters[userAns]}. ${cOpts[userAns]}`;
        correctText = `${letters[qObj.ans]}. ${cOpts[qObj.ans]}`;
      } else {
        questionHtml = qObj.q;
        if (userAns !== undefined) userText = `${letters[userAns]}. ${qObj.opts[userAns]}`;
        correctText = `${letters[qObj.ans]}. ${qObj.opts[qObj.ans]}`;
      }

      return `
        <div class="review-card ${isCorrect ? "correct" : "wrong"}">
          <div><strong>Soal #${qObj.id}:</strong> ${questionHtml}</div>
          <div class="review-meta">
            <span class="${isCorrect ? "tag-correct" : "tag-wrong"}">Jawaban Anda: ${userText}</span>
            <span class="tag-correct">Kunci: ${correctText}</span>
          </div>
          <div style="margin-top:6px; font-size:0.88rem; color:#475569;">
            <strong>Pembahasan:</strong> ${qObj.exp}
          </div>
        </div>
      `;
    })
    .join("");
}

document.getElementById("btn-toggle-review").addEventListener("click", () => {
  const rev = document.getElementById("review-section");
  rev.style.display = rev.style.display === "none" ? "block" : "none";
});

document.getElementById("btn-restart").addEventListener("click", () => {
  if (confirm("Ulangi simulasi dari awal?")) {
    showView("login");
  }
});
