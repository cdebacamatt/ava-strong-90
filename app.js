const STORAGE_KEY = "ava-strong-90:v1";
const TOTAL_SESSIONS = 39;

const phases = [
  {
    id: "foundation",
    name: "Foundation",
    range: "Sessions 1-12",
    focus: "Learn the machines, own clean reps, leave with confidence.",
    rule: "Do 2-3 rounds. Stop while she still has 2-4 good reps left.",
    sessions: [1, 12],
  },
  {
    id: "build",
    name: "Build",
    range: "Sessions 13-26",
    focus: "Add weight slowly, build stamina, strengthen the base position.",
    rule: "Do 3 rounds. Add a little weight only when the top reps feel clean.",
    sessions: [13, 26],
  },
  {
    id: "performance",
    name: "Performance",
    range: "Sessions 27-39",
    focus: "Turn strength into repeatable competition energy.",
    rule: "Do 3-4 rounds. Keep every rep sharp; no sloppy max attempts.",
    sessions: [27, 39],
  },
];

const exerciseLibrary = {
  "leg-press": {
    name: "Seated Leg Press",
    category: "Lower",
    equipment: "ProMaxima CM-750 or P-5600 Seated Leg Press",
    machineTag: "Match the label: Leg Press / Seated Leg Press",
    video: "https://www.youtube.com/watch?v=IZxyjW7MPJQ",
    cues: [
      "Set the back pad so knees start bent but comfortable.",
      "Feet stay flat and about hip-width on the platform.",
      "Press through the whole foot and stop before the knees lock hard.",
    ],
    avoid: "Do not let hips lift off the pad or bounce out of the bottom.",
  },
  "leg-curl": {
    name: "Leg Curl",
    category: "Lower",
    equipment: "ProMaxima P-5200 Prone Leg Curl or Leg Extension/Leg Curl combo",
    machineTag: "Match the label: Leg Curl / Prone Leg Curl",
    video: "https://www.youtube.com/results?search_query=beginner+machine+leg+curl+proper+form",
    cues: [
      "Line the knee joint up with the machine pivot.",
      "Pull heels toward the body without lifting hips off the pad.",
      "Lower slowly until the legs are almost straight again.",
    ],
    avoid: "Do not use a weight that makes the hips pop up or the low back arch.",
  },
  "leg-extension": {
    name: "Leg Extension",
    category: "Lower",
    equipment: "ProMaxima P-5100 or P-5500 Leg Extension",
    machineTag: "Match the label: Leg Extension",
    video: "https://www.youtube.com/watch?v=YyvSfVjQeL0",
    cues: [
      "Adjust the pad just above the ankles.",
      "Sit tall with the back against the pad.",
      "Lift smoothly, pause for control, then lower slowly.",
    ],
    avoid: "Do not swing the weight or slam the stack.",
  },
  "glute-ham": {
    name: "Glute Ham Developer",
    category: "Lower",
    equipment: "ProMaxima P-5400 Glute Hamstring Developer",
    machineTag: "Match the label: Glute Hamstring Developer",
    video: "https://www.youtube.com/results?search_query=beginner+glute+ham+developer+hip+extension+proper+form",
    cues: [
      "Start with short, controlled bodyweight reps.",
      "Keep ribs down and squeeze glutes to come up.",
      "Stop the set before the low back starts doing the work.",
    ],
    avoid: "Do not do aggressive full-range GHD sit-ups in this plan.",
  },
  "inner-outer-thigh": {
    name: "Inner / Outer Thigh",
    category: "Lower",
    equipment: "ProMaxima P-6300 Inner Thigh / Outer Thigh",
    machineTag: "Match the label: Outer Thigh / Inner Thigh",
    video: "https://www.youtube.com/results?search_query=hip+abductor+adductor+machine+proper+form",
    cues: [
      "Sit tall and keep hips square on the seat.",
      "Move through a comfortable range without bouncing.",
      "Use this as a control finisher, not a max-strength lift.",
    ],
    avoid: "Do not force a wider range than the hips can control.",
  },
  "db-rdl": {
    name: "Dumbbell Romanian Deadlift",
    category: "Lower",
    equipment: "Dumbbells",
    machineTag: "Free-weight hinge for basing strength",
    video: "https://www.youtube.com/watch?v=CQp5I9KgdXI",
    cues: [
      "Soft knees, long spine, weights close to thighs.",
      "Push hips back until hamstrings stretch.",
      "Stand tall by squeezing glutes, not by leaning back.",
    ],
    avoid: "Do not reach for the floor if the back starts rounding.",
  },
  "chest-press": {
    name: "Chest Press",
    category: "Upper",
    equipment: "ProMaxima P-1000, P-1050, or Chest/Incline/Shoulder Press",
    machineTag: "Match the label: Chest Press / Flat Bench Press",
    video: "https://www.youtube.com/watch?v=xUm0BiZCWlQ",
    cues: [
      "Set handles near mid-chest.",
      "Shoulder blades stay back against the pad.",
      "Press smoothly and keep wrists stacked.",
    ],
    avoid: "Do not flare elbows straight out to shoulder height.",
  },
  "incline-chest-press": {
    name: "Incline Chest Press",
    category: "Upper",
    equipment: "ProMaxima P-1300 Incline Chest Press",
    machineTag: "Match the label: Incline Chest Press",
    video: "https://www.youtube.com/results?search_query=machine+incline+chest+press+proper+form",
    cues: [
      "Set the seat so handles start around upper chest.",
      "Keep shoulder blades pinned to the pad.",
      "Press up and slightly forward without shrugging.",
    ],
    avoid: "Do not let the shoulders roll forward at the bottom.",
  },
  "shoulder-press": {
    name: "Unilateral Shoulder Press",
    category: "Upper",
    equipment: "ProMaxima P-2200 Unilateral Shoulder Press",
    machineTag: "Match the label: Unilateral Shoulder Press",
    video: "https://www.youtube.com/results?search_query=unilateral+machine+shoulder+press+proper+form",
    cues: [
      "Set the seat so handles start just below shoulder height.",
      "Brace ribs down and press one arm or both arms smoothly.",
      "Control the handle back down without dropping the stack.",
    ],
    avoid: "Do not arch the low back to finish the rep.",
  },
  "lateral-raise": {
    name: "Lateral Raise",
    category: "Upper",
    equipment: "ProMaxima P-2100 Lateral Raise",
    machineTag: "Match the label: Lateral Raise",
    video: "https://www.youtube.com/results?search_query=machine+lateral+raise+proper+form",
    cues: [
      "Keep chest tall and shoulders away from ears.",
      "Lift until upper arms are around shoulder height.",
      "Lower slowly and keep wrists relaxed.",
    ],
    avoid: "Do not shrug or throw the pads upward.",
  },
  "lat-pulldown": {
    name: "Hi Lat Pull",
    category: "Upper",
    equipment: "ProMaxima CM-720 Hi Lat Pull",
    machineTag: "Match the label: Hi Lat Pull",
    video: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
    cues: [
      "Sit tall and keep thighs locked under the pad.",
      "Pull elbows down toward the ribs.",
      "Control the handles up without shrugging.",
    ],
    avoid: "Do not pull behind the neck.",
  },
  "seated-row": {
    name: "Seated Cable Row",
    category: "Upper",
    equipment: "ProMaxima CM-725, P-4200, or P-144 Seated Row",
    machineTag: "Match the label: Seated Cable Row / Seated Row",
    video: "https://www.youtube.com/watch?v=GZbfZ033f74",
    cues: [
      "Start tall with ribs stacked over hips.",
      "Pull handles toward lower ribs.",
      "Pause and squeeze shoulder blades without leaning back.",
    ],
    avoid: "Do not turn the row into a body swing.",
  },
  "rear-delt-pec-deck": {
    name: "Rear Delt / Pec Deck",
    category: "Upper",
    equipment: "ProMaxima P-1100 Rear Deltoid / Pectoral Contractor",
    machineTag: "Match the label: Rear Deltoid / Pectoral Contractor",
    video: "https://www.youtube.com/results?search_query=rear+delt+pec+deck+machine+proper+form",
    cues: [
      "Use rear-delt mode for shoulder stability most days.",
      "Keep chest on the pad and arms slightly bent.",
      "Open wide, pause, then return with control.",
    ],
    avoid: "Do not yank the handles behind the body.",
  },
  "assisted-pullup": {
    name: "Assisted Pull-up",
    category: "Upper",
    equipment: "StairMaster Gravitron 2000 or assisted pull-up station",
    machineTag: "Match the label: Gravitron / assisted pull-up",
    video: "https://www.youtube.com/watch?v=DSIFQxx3u-w",
    cues: [
      "Use enough assistance to move cleanly.",
      "Start by pulling shoulder blades down.",
      "Finish with chest proud and control the lower.",
    ],
    avoid: "Do not kick or swing for reps.",
  },
  "triceps-pushdown": {
    name: "Triceps Pushdown",
    category: "Upper",
    equipment: "ProMaxima CM-746, P-3100, or P-3200 Tricep Press Down",
    machineTag: "Match the label: Tricep Extension / Push Down",
    video: "https://www.youtube.com/results?search_query=tricep+pushdown+machine+proper+form",
    cues: [
      "Pin elbows near the sides or against the pad.",
      "Push down until arms are straight but not jammed.",
      "Return slowly until elbows bend again.",
    ],
    avoid: "Do not let shoulders roll forward or elbows drift.",
  },
  "arm-curl": {
    name: "Arm Curl",
    category: "Upper",
    equipment: "ProMaxima P-3000 Arm Curl",
    machineTag: "Match the label: Arm Curl",
    video: "https://www.youtube.com/results?search_query=machine+arm+curl+proper+form",
    cues: [
      "Set the pad so elbows sit comfortably on support.",
      "Curl without lifting the elbows.",
      "Lower slowly until arms are almost straight.",
    ],
    avoid: "Do not rock the torso to move the weight.",
  },
  "pallof-press": {
    name: "Cable Pallof Press",
    category: "Core",
    equipment: "ProMaxima CM-730 Adjustable Cable Column",
    machineTag: "Match the label: Adjustable Cable Column",
    video: "https://www.youtube.com/watch?v=axgv7H_VQOo",
    cues: [
      "Stand sideways to the cable.",
      "Press hands straight out and resist rotation.",
      "Move slow enough that hips stay square.",
    ],
    avoid: "Do not let the cable twist the body.",
  },
  "rotary-torso": {
    name: "Rotary Torso",
    category: "Core",
    equipment: "ProMaxima P-6200 Rotary Torso",
    machineTag: "Match the label: Rotary Torso",
    video: "https://www.youtube.com/results?search_query=rotary+torso+machine+proper+form",
    cues: [
      "Start very light and brace before rotating.",
      "Move through a short, smooth range.",
      "Let the ribs and hips stay controlled instead of twisting fast.",
    ],
    avoid: "Do not crank hard into the end range.",
  },
  "ab-low-back": {
    name: "Abdominal / Low Back",
    category: "Core",
    equipment: "ProMaxima P-6500 Abdominal / Low Back",
    machineTag: "Match the label: Abdominal / Low Back",
    video: "https://www.youtube.com/results?search_query=ab+back+extension+machine+proper+form",
    cues: [
      "Use a light load and small controlled reps.",
      "For abs, curl ribs toward hips without yanking the neck.",
      "For low back, move slowly and stop at a straight body line.",
    ],
    avoid: "Do not turn this into fast crunching or hard back extension.",
  },
  "captains-chair": {
    name: "Captain's Chair Knee Raise",
    category: "Core",
    equipment: "Vertical knee raise station",
    machineTag: "Use the tower with forearm pads and back pad",
    video: "https://www.youtube.com/results?search_query=captains+chair+knee+raise+proper+form",
    cues: [
      "Press forearms into the pads and keep shoulders down.",
      "Lift knees toward the chest without swinging.",
      "Lower slowly until legs are still under control.",
    ],
    avoid: "Do not kip or let the low back yank into arching.",
  },
  "farmer-carry": {
    name: "Farmer Carry",
    category: "Core",
    equipment: "Dumbbells",
    machineTag: "Grip and posture work for basing",
    video: "https://www.youtube.com/watch?v=MH8id-EaoPA",
    cues: [
      "Stand tall with weights at the sides.",
      "Walk slowly, ribs down, shoulders quiet.",
      "Grip hard without leaning side to side.",
    ],
    avoid: "Do not choose weight that changes posture.",
  },
  "bike-intervals": {
    name: "Bike Intervals",
    category: "Conditioning",
    equipment: "Stationary bike",
    machineTag: "Use after strength when legs still feel springy",
    video: "https://www.youtube.com/results?search_query=stationary+bike+intervals+beginner+proper+form",
    cues: [
      "Set seat so the knee stays slightly bent at the bottom.",
      "Hard intervals should feel powerful, not frantic.",
      "Easy intervals should let breathing settle.",
    ],
    avoid: "Do not sprint so hard that form breaks.",
  },
};

const gymMachineGroups = [
  {
    title: "Leg strength",
    machines: "CM-750/P-5600 leg press, P-5100/P-5500 leg extension, P-5200 leg curl, P-5400 glute ham, P-6300 inner/outer thigh.",
  },
  {
    title: "Pressing power",
    machines: "P-1000 chest press, P-1050 flat bench press, P-1300 incline chest press, P-2200 shoulder press, P-2100 lateral raise.",
  },
  {
    title: "Back and basing support",
    machines: "CM-720 hi lat pull, CM-725/P-4200/P-144 seated row, P-1100 rear delt/pec deck, StairMaster Gravitron.",
  },
  {
    title: "Core and arms",
    machines: "P-6200 rotary torso, P-6500 abdominal/low back, CM-730 cable column, CM-746/P-3100/P-3200 triceps, P-3000 arm curl.",
  },
];

const workouts = [
  {
    id: "A",
    title: "Base Power",
    purpose: "Machine-based leg strength, grip, and the braced body position she needs for basing.",
    minutes: "50-60 min",
    type: "Strength",
    warmup: "5 min incline walk or bike, 10 bodyweight squats, 10 hip hinges, 2 light leg press sets.",
    exercises: [
      { id: "leg-press", base: "2-3", reps: "10-12", rest: "90 sec" },
      { id: "leg-curl", base: "2-3", reps: "10-12", rest: "75 sec" },
      { id: "leg-extension", base: "2-3", reps: "10-12", rest: "75 sec" },
      { id: "seated-row", base: "2-3", reps: "10-12", rest: "75 sec" },
      { id: "farmer-carry", base: "3-4", reps: "25-35 sec", rest: "60 sec" },
      { id: "pallof-press", base: "2-3", reps: "10 each", rest: "45 sec" },
    ],
  },
  {
    id: "B",
    title: "Stunt Stability",
    purpose: "Shoulders, back, core, and push strength for controlled lifts.",
    minutes: "45-55 min",
    type: "Strength",
    warmup: "5 min bike, arm circles, band rows, wall slides, 2 easy press sets.",
    exercises: [
      { id: "chest-press", base: "2-3", reps: "8-10", rest: "75 sec" },
      { id: "lat-pulldown", base: "2-3", reps: "8-10", rest: "75 sec" },
      { id: "shoulder-press", base: "2-3", reps: "8-10", rest: "75 sec" },
      { id: "rear-delt-pec-deck", base: "2-3", reps: "10-12", rest: "60 sec" },
      { id: "assisted-pullup", base: "2-3", reps: "4-6", rest: "90 sec" },
      { id: "captains-chair", base: "2-3", reps: "6-10", rest: "60 sec" },
    ],
  },
  {
    id: "C",
    title: "Competition Engine",
    purpose: "Posterior-chain strength, shoulder control, and finish-line conditioning for routines.",
    minutes: "48-60 min",
    type: "Strength",
    warmup: "5 min easy bike, glute bridges, 2 light leg curl sets, 2 easy rows.",
    exercises: [
      { id: "db-rdl", base: "2-3", reps: "8-10", rest: "90 sec" },
      { id: "glute-ham", base: "2-3", reps: "8-10", rest: "90 sec" },
      { id: "inner-outer-thigh", base: "2-3", reps: "12 each", rest: "60 sec" },
      { id: "lat-pulldown", base: "2-3", reps: "10-12", rest: "75 sec" },
      { id: "rotary-torso", base: "2-3", reps: "8 each", rest: "60 sec" },
      { id: "bike-intervals", base: "8", reps: "20 sec hard / 70 sec easy", rest: "Built in" },
    ],
  },
  {
    id: "D",
    title: "Quick Conditioning",
    purpose: "Optional short day for endurance without beating up joints.",
    minutes: "24-32 min",
    type: "Optional",
    warmup: "5 min easy bike or treadmill walk, then 2 gentle build-up efforts.",
    exercises: [
      { id: "bike-intervals", base: "10", reps: "20 sec hard / 70 sec easy", rest: "Built in" },
      { id: "lateral-raise", base: "2", reps: "12-15", rest: "45 sec" },
      { id: "triceps-pushdown", base: "2", reps: "10-12", rest: "45 sec" },
      { id: "arm-curl", base: "2", reps: "10-12", rest: "45 sec" },
      { id: "ab-low-back", base: "2", reps: "10 each", rest: "45 sec" },
      { id: "pallof-press", base: "2", reps: "10 each", rest: "45 sec" },
    ],
  },
];

const badges = [
  { id: "first", icon: "🌱", name: "First Workout", text: "First strength session complete." },
  { id: "fire", icon: "🔥", name: "On Fire", text: "Seven-day workout streak." },
  { id: "phase1", icon: "💪", name: "Phase Crusher", text: "Foundation phase complete." },
  { id: "cheer-ready", icon: "👑", name: "Cheer Ready", text: "All 39 sessions finished." },
  { id: "pr-queen", icon: "⚡", name: "PR Queen", text: "Ten personal records set." },
  { id: "barbell", icon: "🏋️", name: "Barbell Boss", text: "First Build phase workout logged." },
];

const glossaryTerms = [
  {
    term: "Set",
    simple: "One round of an exercise.",
    example: "2 sets of leg press means she does one round, rests, then does one more round.",
  },
  {
    term: "Rep",
    simple: "One clean time doing the move.",
    example: "10 reps means press the machine out and back 10 controlled times.",
  },
  {
    term: "Rest",
    simple: "The break between rounds.",
    example: "Rest 75 seconds before starting the next round.",
  },
  {
    term: "Weight",
    simple: "How heavy the machine or dumbbells were.",
    example: "If the pin is at 35 lb, log 35.",
  },
  {
    term: "Effort",
    simple: "How hard the set felt.",
    example: "6 feels easy, 7 feels good, 8 feels hard, 9 is too hard for most days.",
  },
  {
    term: "RPE",
    simple: "A trainer word for effort.",
    example: "She can use the app's Effort box instead of worrying about the term RPE.",
  },
  {
    term: "PR",
    simple: "Personal record, her best logged weight on a move.",
    example: "If she leg presses 70 lb for the first time, that can become a PR.",
  },
  {
    term: "Phase",
    simple: "A part of the 90-day plan.",
    example: "Foundation is the first phase where she learns machines and clean form.",
  },
];

let state = loadState();
let selectedWorkoutId = recommendedWorkout().id;
let selectedChartExerciseId = "leg-press";

const views = {
  todayView: document.querySelector("#todayView"),
  planView: document.querySelector("#planView"),
  libraryView: document.querySelector("#libraryView"),
  progressView: document.querySelector("#progressView"),
  fuelView: document.querySelector("#fuelView"),
};

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

let deferredInstallPrompt = null;
const installButton = document.querySelector("#installButton");
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  try {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  } catch {
    // Service workers are only available from secure hosted pages.
  }
}

renderAll();

function renderAll() {
  renderToday();
  renderPlan();
  renderLibrary();
  renderProgress();
  renderFuel();
}

function showView(viewId) {
  Object.entries(views).forEach(([id, node]) => node.classList.toggle("is-active", id === viewId));
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.view === viewId;
    tab.classList.toggle("is-active", active);
    if (active) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  });
  scrollToTop();
  if (viewId === "progressView") drawProgressChart();
}

function scrollToTop() {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function renderToday() {
  const completed = strengthLogs().length;
  const sessionNumber = Math.min(completed + 1, TOTAL_SESSIONS);
  const phase = phaseForSession(sessionNumber);
  const recommended = recommendedWorkout();
  const selected = workouts.find((workout) => workout.id === selectedWorkoutId) || nextWorkout();
  const progress = Math.min(100, Math.round((completed / TOTAL_SESSIONS) * 100));

  views.todayView.innerHTML = `
    <article class="hero-panel">
      <span class="kicker">Session ${sessionNumber} of ${TOTAL_SESSIONS}</span>
      <h2 class="hero-title" id="todayTitle">${selected.title}</h2>
      <p class="hero-copy">${selected.purpose}</p>
      <div class="hero-grid">
        <div class="stat-tile stat-phase"><span class="stat-label">Current phase</span><span class="stat-value">${phase.name}</span></div>
        <div class="stat-tile"><span class="stat-value">${selected.minutes}</span><span class="stat-label">Time</span></div>
        <div class="stat-tile"><span class="stat-value">${progress}%</span><span class="stat-label">90-day path</span></div>
      </div>
    </article>

    ${renderCompetitionBanner()}
    ${renderCheckIn()}
    ${renderGlossaryPreview()}

    <section class="section">
      <div class="progress-rail" aria-label="${progress}% complete">
        <div class="progress-fill" style="width:${progress}%"></div>
      </div>
      <p class="mini-copy" style="margin-top:8px">${phase.rule}</p>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2>Choose Today</h2>
          <p>${adaptiveCopy(recommended)}</p>
        </div>
      </div>
      <div class="workout-switcher">
        ${workouts
          .map(
            (workout) => `
          <button class="pill ${workout.id === selected.id ? "is-active" : ""}" data-workout="${workout.id}" type="button">
            ${workout.id}. ${workout.title.split(" ")[0]}
          </button>`,
          )
          .join("")}
      </div>
      <div class="soft-note">
        Warm-up: ${selected.warmup}
      </div>
    </section>

    <form class="section" id="workoutForm">
      <div class="exercise-list">
        ${selected.exercises.map((item) => renderWorkoutExercise(item, phase)).join("")}
      </div>
      <div class="save-row">
        <p class="mini-copy">Save the best clean set for each move. Progress beats perfection.</p>
        <button class="primary-button" type="submit">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
          Save
        </button>
      </div>
    </form>
  `;

  views.todayView.querySelectorAll("[data-workout]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedWorkoutId = button.dataset.workout;
      renderToday();
    });
  });

  views.todayView.querySelectorAll("[data-checkin-field]").forEach((button) => {
    button.addEventListener("click", () => {
      setCheckIn(button.dataset.checkinField, button.dataset.value);
      selectedWorkoutId = recommendedWorkout().id;
      renderAll();
      pulse();
    });
  });

  views.todayView.querySelector("#workoutForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveWorkout(selected, phase);
  });
}

function renderCompetitionBanner() {
  const days = daysUntilCompetition();
  if (days === null) {
    return `
      <section class="section competition-banner">
        <span class="tag gold">Competition countdown</span>
        <p>Add her next competition date in Progress to pin the countdown here.</p>
      </section>
    `;
  }
  const label = days === 0 ? "Competition is today." : `${days} day${days === 1 ? "" : "s"} until competition.`;
  return `
    <section class="section competition-banner is-live">
      <span class="tag gold">Countdown</span>
      <h3>${label}</h3>
      <p>Every clean set is another vote for confident basing.</p>
    </section>
  `;
}

function renderCheckIn() {
  const check = checkInForToday();
  const energy = ["Low", "Good", "High"];
  const soreness = ["None", "Mild", "Sore"];
  return `
    <section class="section checkin-card">
      <div>
        <span class="tag jade">3-second check-in</span>
        <h3>How are you feeling today?</h3>
        <p class="mini-copy">The app uses this to suggest the smartest workout for today.</p>
      </div>
      <div class="checkin-grid">
        <div>
          <span class="checkin-label">Energy</span>
          <div class="segmented">
            ${energy
              .map(
                (item) => `
              <button class="${check.energy === item ? "is-selected" : ""}" data-checkin-field="energy" data-value="${item}" type="button">${item}</button>`,
              )
              .join("")}
          </div>
        </div>
        <div>
          <span class="checkin-label">Soreness</span>
          <div class="segmented">
            ${soreness
              .map(
                (item) => `
              <button class="${check.soreness === item ? "is-selected" : ""}" data-checkin-field="soreness" data-value="${item}" type="button">${item}</button>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderGlossaryPreview() {
  return `
    <section class="section glossary-help">
      <details>
        <summary>New to gym words? Tap here.</summary>
        <div class="glossary-grid compact">
          ${glossaryTerms
            .slice(0, 6)
            .map(
              (item) => `
            <article class="glossary-term">
              <h3>${item.term}</h3>
              <p>${item.simple}</p>
            </article>`,
            )
            .join("")}
        </div>
        <p class="mini-copy">The full glossary is in the Moves tab.</p>
      </details>
    </section>
  `;
}

function adaptiveCopy(workout) {
  const check = checkInForToday();
  if (!check.energy && !check.soreness) {
    return "Start with the check-in, then the app will steer her toward the smartest session.";
  }
  return `Today looks like ${workout.id}. ${workout.title}. ${workout.purpose}`;
}

function renderWorkoutExercise(item, phase) {
  const exercise = exerciseLibrary[item.id];
  const previous = bestForExercise(item.id);
  const target = progressionHint(item.id);
  const phaseSets = item.base.replace("2-3", phase.id === "foundation" ? "2" : "3").replace("3-4", phase.id === "performance" ? "4" : "3");
  return `
    <article class="exercise-card">
      <div class="exercise-topline">
        <div>
          <h3 class="exercise-title">${exercise.name}</h3>
          <p class="exercise-purpose">${exercise.equipment}</p>
          ${exercise.machineTag ? `<span class="machine-chip">${exercise.machineTag}</span>` : ""}
        </div>
        <a class="video-link" href="${exercise.video}" target="_blank" rel="noreferrer" aria-label="Open ${exercise.name} video">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5z" /></svg>
        </a>
      </div>
      <div class="rx-grid">
        <div class="rx-box"><span class="rx-label">Rounds</span><span class="rx-value">${phaseSets}</span><span class="rx-help">sets</span></div>
        <div class="rx-box"><span class="rx-label">Clean reps</span><span class="rx-value">${item.reps}</span><span class="rx-help">times</span></div>
        <div class="rx-box"><span class="rx-label">Break</span><span class="rx-value">${item.rest}</span><span class="rx-help">rest</span></div>
      </div>
      <details class="exercise-more">
        <summary>Form cues</summary>
        <ul class="cue-list">
          ${exercise.cues.map((cue) => `<li>${cue}</li>`).join("")}
          <li>${exercise.avoid}</li>
        </ul>
      </details>
      ${target ? `<div class="progression-tip">${target}</div>` : ""}
      <div class="log-grid">
        <label class="log-field"><span>Weight</span><input inputmode="decimal" name="${item.id}-weight" placeholder="${previous.weight || "lbs"}" /><small>How heavy</small></label>
        <label class="log-field"><span>Clean reps</span><input inputmode="numeric" name="${item.id}-reps" placeholder="${previous.reps || item.reps}" /><small>How many</small></label>
        <label class="log-field"><span>Effort</span><select name="${item.id}-rpe"><option value="">Pick</option><option value="6">6 easy</option><option value="7">7 good</option><option value="8">8 hard</option><option value="9">9 too hard</option></select><small>How it felt</small></label>
      </div>
    </article>
  `;
}

function renderPlan() {
  const completed = strengthLogs().length;
  const sessionNumber = Math.min(completed + 1, TOTAL_SESSIONS);
  const phase = phaseForSession(sessionNumber);

  views.planView.innerHTML = `
    <section class="section" style="margin-top:0">
      <h2 id="planTitle">90-Day Plan</h2>
      <p class="mini-copy">Three strength sessions repeat in order: A, B, C. If a week gets busy, continue with the next session instead of restarting.</p>
    </section>
    <section class="section">
      <div class="phase-grid">
        ${phases
          .map(
            (item) => `
          <article class="phase-card ${item.id === phase.id ? "is-current" : ""}">
            <span class="tag ${item.id === phase.id ? "jade" : ""}">${item.range}</span>
            <h3>${item.name}</h3>
            <p>${item.focus}</p>
            <div class="soft-note" style="margin-top:10px">${item.rule}</div>
          </article>`,
          )
          .join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>Workout Menu</h2>
          <p>Strength first, conditioning only when recovery is good.</p>
        </div>
      </div>
      <div class="phase-grid">
        ${workouts.map(renderWorkoutSummary).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>Her Gym Machines</h2>
          <p>These names come from the machine labels in the photos.</p>
        </div>
      </div>
      <div class="phase-grid">
        ${gymMachineGroups
          .map(
            (group) => `
          <article class="workout-card">
            <span class="tag gold">${group.title}</span>
            <p class="exercise-purpose machine-copy">${group.machines}</p>
          </article>`,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWorkoutSummary(workout) {
  return `
    <article class="workout-card">
      <div class="exercise-topline">
        <div>
          <span class="tag ${workout.type === "Optional" ? "gold" : "jade"}">${workout.type}</span>
          <h3 style="margin-top:8px">${workout.id}. ${workout.title}</h3>
          <p class="exercise-purpose">${workout.purpose}</p>
        </div>
      </div>
      <div class="workout-meta">
        ${workout.exercises
          .map((item) => `<span class="tag">${exerciseLibrary[item.id].name}</span>`)
          .join("")}
      </div>
    </article>
  `;
}

function renderLibrary(filter = "All", query = "") {
  const categories = ["All", "Lower", "Upper", "Core", "Conditioning"];
  const normalizedQuery = query.trim().toLowerCase();
  const exercises = Object.entries(exerciseLibrary)
    .map(([id, exercise]) => ({ id, ...exercise }))
    .filter((exercise) => filter === "All" || exercise.category === filter)
    .filter(
      (exercise) =>
        !normalizedQuery ||
        `${exercise.name} ${exercise.equipment} ${exercise.machineTag || ""} ${exercise.category}`.toLowerCase().includes(normalizedQuery),
    );

  views.libraryView.innerHTML = `
    <section class="section" style="margin-top:0">
      <h2 id="libraryTitle">Move Library</h2>
      <p class="mini-copy">Search a machine name, then tap the video button for a form demo.</p>
      <input class="search-input" id="librarySearch" type="search" placeholder="Search moves or equipment" value="${escapeAttr(query)}" />
      <div class="filter-row">
        ${categories.map((category) => `<button class="pill ${category === filter ? "is-active" : ""}" data-filter="${category}" type="button">${category}</button>`).join("")}
      </div>
    </section>
    ${renderGlossarySection()}
    <section class="section">
      <div class="exercise-list">
        ${exercises.length ? exercises.map(renderLibraryCard).join("") : `<div class="empty-state">No moves match that search.</div>`}
      </div>
    </section>
  `;

  views.libraryView.querySelector("#librarySearch").addEventListener("input", (event) => {
    renderLibrary(filter, event.target.value);
  });
  views.libraryView.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => renderLibrary(button.dataset.filter, query));
  });
}

function renderGlossarySection() {
  return `
    <section class="section glossary-section">
      <div class="section-head">
        <div>
          <h2>Gym Words</h2>
          <p>Plain-English meanings for the words she will see in workouts.</p>
        </div>
      </div>
      <div class="glossary-grid">
        ${glossaryTerms
          .map(
            (item) => `
          <article class="glossary-term">
            <h3>${item.term}</h3>
            <p>${item.simple}</p>
            <span>${item.example}</span>
          </article>`,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLibraryCard(exercise) {
  return `
    <article class="exercise-card">
      <div class="exercise-topline">
        <div>
          <span class="tag">${exercise.category}</span>
          <h3 class="exercise-title" style="margin-top:8px">${exercise.name}</h3>
          <p class="exercise-purpose">${exercise.equipment}</p>
          ${exercise.machineTag ? `<span class="machine-chip">${exercise.machineTag}</span>` : ""}
        </div>
        <a class="video-link" href="${exercise.video}" target="_blank" rel="noreferrer" aria-label="Open ${exercise.name} video">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5z" /></svg>
        </a>
      </div>
      <ul class="cue-list">
        ${exercise.cues.map((cue) => `<li>${cue}</li>`).join("")}
        <li>${exercise.avoid}</li>
      </ul>
    </article>
  `;
}

function renderProgress() {
  const logs = strengthLogs();
  const completed = logs.length;
  const progress = Math.min(100, Math.round((completed / TOTAL_SESSIONS) * 100));
  const last = state.logs[0];
  const currentPhase = phaseForSession(Math.min(completed + 1, TOTAL_SESSIONS));
  const prs = personalRecords();
  const chartOptions = exercisesForChart();
  if (!chartOptions.some((item) => item.id === selectedChartExerciseId)) {
    selectedChartExerciseId = chartOptions[0]?.id || "leg-press";
  }

  views.progressView.innerHTML = `
    <section class="section" style="margin-top:0">
      <h2 id="progressTitle">Progress</h2>
      <p class="mini-copy">Every saved workout becomes proof she can handle the gym herself.</p>
    </section>
    <section class="section metric-grid">
      <div class="metric"><b>${completed}</b><span>Strength sessions</span></div>
      <div class="metric"><b>${progress}%</b><span>90-day plan</span></div>
      <div class="metric"><b>${sessionsThisWeek()}</b><span>This week</span></div>
      <div class="metric"><b>${currentPhase.name}</b><span>Current phase</span></div>
    </section>
    <section class="section recap-card">
      <span class="tag rose">Weekly recap</span>
      <h3>This week's recap</h3>
      <p>${weeklyRecap()}</p>
    </section>
    <section class="section chart-card">
      <div class="section-head compact">
        <div>
          <h2>Strength Line</h2>
          <p>Best logged weight over time.</p>
        </div>
        <select id="chartExercise" aria-label="Chart exercise">
          ${chartOptions.map((item) => `<option value="${item.id}" ${item.id === selectedChartExerciseId ? "selected" : ""}>${item.name}</option>`).join("")}
        </select>
      </div>
      <canvas id="progressChart" width="420" height="180" aria-label="Progress chart"></canvas>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>Personal Bests</h2>
          <p>Best logged weight for each move.</p>
        </div>
      </div>
      <div class="phase-grid">
        ${
          prs.length
            ? prs
                .slice(0, 8)
                .map(
                  (pr) => `
                <article class="history-card">
                  <h3>${pr.name}</h3>
                  <p>${pr.weight} lb x ${pr.reps || "-"} reps ${pr.date ? "on " + formatDate(pr.date) : ""}</p>
                </article>`,
                )
                .join("")
            : `<div class="empty-state">Personal bests appear after the first saved workout.</div>`
        }
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>Badges</h2>
          <p>Small wins that keep the plan moving.</p>
        </div>
      </div>
      <div class="badge-grid">
        ${badges
          .map(
            (badge) => {
              const earned = isBadgeEarned(badge.id);
              return `
          <div class="badge ${earned ? "is-earned" : "is-locked"}">
            <b><span class="badge-icon">${earned ? badge.icon : "◇"}</span>${badge.name}</b>
            <span>${badge.text}</span>
          </div>`;
            },
          )
          .join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <h2>History</h2>
          <p>${last ? "Last saved: " + formatDate(last.date) : "No workouts saved yet."}</p>
        </div>
        <button class="text-button" type="button" id="exportButton">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg>
          Export
        </button>
        <button class="text-button" type="button" id="shareButton">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12v7h16v-7" /><path d="M12 15V4m0 0 4 4m-4-4-4 4" /></svg>
          Share
        </button>
      </div>
      <div class="history-list">
        ${
          state.logs.length
            ? state.logs
                .slice(0, 8)
                .map(
                  (log) => `
              <article class="history-card">
                <span class="tag ${log.type === "Optional" ? "gold" : "jade"}">${log.workoutId}. ${log.workoutTitle}</span>
                <h3>${formatDate(log.date)}</h3>
                <p>${log.exercises.filter((entry) => entry.weight || entry.reps).length} moves logged.</p>
              </article>`,
                )
                .join("")
            : `<div class="empty-state">Save today&apos;s session to start the record.</div>`
        }
      </div>
    </section>
    <section class="section source-card">
      <h3>Settings</h3>
      <p>Change dates only if she wants the 90-day plan or competition countdown adjusted.</p>
      <label class="log-field" style="margin-top:10px"><span>Start date</span><input class="date-input" id="startDateInput" type="date" value="${state.startDate}" /></label>
      <label class="log-field" style="margin-top:10px"><span>Competition date</span><input class="date-input" id="competitionDateInput" type="date" value="${state.competitionDate || ""}" /></label>
      <button class="text-button full-width" type="button" id="soundToggle">
        Sound effects: ${state.soundOn ? "On" : "Off"}
      </button>
    </section>
  `;

  views.progressView.querySelector("#chartExercise").addEventListener("change", (event) => {
    selectedChartExerciseId = event.target.value;
    drawProgressChart();
  });
  views.progressView.querySelector("#exportButton").addEventListener("click", exportProgress);
  views.progressView.querySelector("#shareButton").addEventListener("click", generateShareCard);
  views.progressView.querySelector("#startDateInput").addEventListener("change", (event) => {
    state.startDate = event.target.value || todayISO();
    persist();
    showToast("Start date updated.");
    renderAll();
  });
  views.progressView.querySelector("#competitionDateInput").addEventListener("change", (event) => {
    state.competitionDate = event.target.value || "";
    persist();
    showToast(state.competitionDate ? "Competition countdown set." : "Competition countdown cleared.");
    renderAll();
  });
  views.progressView.querySelector("#soundToggle").addEventListener("click", () => {
    state.soundOn = !state.soundOn;
    persist();
    pulse();
    renderProgress();
  });
  drawProgressChart();
}

function renderFuel() {
  views.fuelView.innerHTML = `
    <section class="section" style="margin-top:0">
      <h2 id="fuelTitle">Fuel + Supplements</h2>
      <p class="mini-copy">Food, sleep, hydration, and steady training do the heavy lifting. Supplements are optional and parent-approved while she is under 18.</p>
    </section>
    <section class="section fuel-grid">
      <article class="fuel-card">
        <span class="tag jade">Best daily stack</span>
        <h3>Food-first basics</h3>
        <p>Carbs before training, protein after training, water all day, and a normal dinner. This supports cheer endurance better than stimulant products.</p>
      </article>
      <article class="fuel-card">
        <span class="tag">Simple option</span>
        <h3>Protein powder</h3>
        <p>Only useful if meals are short on protein. Choose whey or a plant protein with third-party testing. One shake after training is enough.</p>
      </article>
      <article class="fuel-card">
        <span class="tag gold">Practice days</span>
        <h3>Electrolytes</h3>
        <p>Water is enough for most gym sessions. Electrolytes make sense for long, sweaty practices, hot gyms, or back-to-back cheer days.</p>
      </article>
      <article class="fuel-card alert-note">
        <span class="tag rose">Under 18 note</span>
        <h3>Creatine and pre-workout</h3>
        <p>Creatine has evidence for adults, but because she is 17 until November 15, 2026, use it only after a pediatrician or sports dietitian says yes. Avoid energy drinks, stimulant pre-workouts, fat burners, hormone boosters, and iron or vitamin D unless labs show a need.</p>
      </article>
    </section>
    <section class="section source-card">
      <h3>Source Notes</h3>
      <p>These links are for parent review and safety context.</p>
      <div class="link-list">
        <a href="https://www.healthychildren.org/English/news/Pages/Guidance-on-Resistance-Training-for-Children.aspx?form=XCXCUUZZ" target="_blank" rel="noreferrer">AAP resistance training guidance <span>Open</span></a>
        <a href="https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Sports-Nutrition-for-Busy-Families-and-Busy-Lifestyles.aspx?form=XCXCUUZZ" target="_blank" rel="noreferrer">AAP sports nutrition basics <span>Open</span></a>
        <a href="https://ods.od.nih.gov/pdf/factsheets/ExercisePerformance-Consumer.pdf" target="_blank" rel="noreferrer">NIH performance supplement fact sheet <span>Open</span></a>
        <a href="https://www.nccih.nih.gov/health/energy-drinks" target="_blank" rel="noreferrer">NCCIH energy drink safety <span>Open</span></a>
      </div>
    </section>
  `;
}

function saveWorkout(workout, phase) {
  const form = views.todayView.querySelector("#workoutForm");
  const data = new FormData(form);
  const previousRecords = personalRecordMap();
  const earnedBefore = earnedBadgeIds();
  const entries = workout.exercises.map((item) => ({
    id: item.id,
    name: exerciseLibrary[item.id].name,
    weight: cleanNumber(data.get(`${item.id}-weight`)),
    reps: String(data.get(`${item.id}-reps`) || "").trim(),
    rpe: String(data.get(`${item.id}-rpe`) || "").trim(),
  }));

  const hasData = entries.some((entry) => entry.weight || entry.reps || entry.rpe);
  if (!hasData) {
    showToast("Add at least one weight, clean rep count, or effort before saving.");
    return;
  }

  const newPrs = entries
    .filter((entry) => Number(entry.weight) > Number(previousRecords.get(entry.id)?.weight || 0))
    .map((entry) => ({
      id: entry.id,
      name: entry.name,
      weight: entry.weight,
      reps: entry.reps,
      date: todayISO(),
    }));

  state.logs.unshift({
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    date: todayISO(),
    workoutId: workout.id,
    workoutTitle: workout.title,
    type: workout.type,
    phase: phase.name,
    exercises: entries,
    prs: newPrs,
  });

  persist();
  selectedWorkoutId = nextWorkout().id;
  const earnedAfter = earnedBadgeIds();
  const newBadge = badges.find((badge) => earnedAfter.has(badge.id) && !earnedBefore.has(badge.id));
  pulse(newPrs.length ? [50, 30, 110] : [35]);
  playDing(newPrs.length ? 880 : 520);
  if (newPrs.length) {
    showCelebration("New PR", `${newPrs[0].name}: ${newPrs[0].weight} lb${newPrs.length > 1 ? ` plus ${newPrs.length - 1} more` : ""}.`);
  } else if (newBadge) {
    showCelebration("Badge unlocked", `${newBadge.icon} ${newBadge.name}`);
  } else {
    showToast(`${workout.title} saved.`);
  }
  renderAll();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.logs)) {
      return {
        startDate: saved.startDate || todayISO(),
        competitionDate: saved.competitionDate || "",
        soundOn: Boolean(saved.soundOn),
        checkins: saved.checkins && typeof saved.checkins === "object" ? saved.checkins : {},
        logs: saved.logs,
      };
    }
  } catch {
    // Ignore invalid local data and start fresh.
  }
  return { startDate: todayISO(), competitionDate: "", soundOn: false, checkins: {}, logs: [] };
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast("Progress could not be saved on this browser.");
  }
}

function strengthLogs() {
  return state.logs.filter((log) => log.type !== "Optional");
}

function nextWorkout() {
  const completed = strengthLogs().length;
  return workouts[completed % 3];
}

function phaseForSession(sessionNumber) {
  return phases.find((phase) => sessionNumber >= phase.sessions[0] && sessionNumber <= phase.sessions[1]) || phases.at(-1);
}

function sessionsThisWeek() {
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(now.getDate() - 6);
  return state.logs.filter((log) => new Date(`${log.date}T00:00:00`) >= startOfDay(weekAgo)).length;
}

function checkInForToday() {
  return state.checkins[todayISO()] || {};
}

function setCheckIn(field, value) {
  state.checkins[todayISO()] = { ...checkInForToday(), [field]: value };
  persist();
}

function recommendedWorkout() {
  const next = nextWorkout();
  const check = checkInForToday();
  if (check.energy === "Low" && (check.soreness === "Mild" || check.soreness === "Sore")) return workouts.find((workout) => workout.id === "D");
  if (check.soreness === "Sore" && (next.id === "A" || next.id === "C")) return workouts.find((workout) => workout.id === "B");
  if (check.energy === "Low") return workouts.find((workout) => workout.id === "D");
  return next;
}

function daysUntilCompetition() {
  if (!state.competitionDate) return null;
  const target = startOfDay(new Date(`${state.competitionDate}T00:00:00`));
  const now = startOfDay(new Date());
  return Math.max(0, Math.ceil((target - now) / 86400000));
}

function progressionHint(exerciseId) {
  const exercise = exerciseLibrary[exerciseId];
  if (!exercise || exercise.category === "Conditioning") return "";
  const record = personalRecordMap().get(exerciseId);
  if (!record?.weight) return "First target: pick a weight she can control with 2-4 reps left.";
  const latest = bestForExercise(exerciseId);
  const rpe = Number(latest.rpe || 0);
  const step = exerciseId === "leg-press" ? 10 : 5;
  if (rpe >= 9) return `Hold ${record.weight} lb until the reps feel smoother.`;
  return `Next target: try ${Number(record.weight) + step} lb when warm-ups feel clean.`;
}

function personalRecordMap() {
  const records = new Map();
  state.logs.forEach((log) => {
    log.exercises.forEach((entry) => {
      const weight = Number(entry.weight);
      if (!weight) return;
      const current = records.get(entry.id);
      if (!current || weight > Number(current.weight)) {
        records.set(entry.id, {
          name: entry.name,
          weight,
          reps: entry.reps,
          date: log.date,
        });
      }
    });
  });
  return records;
}

function personalRecords() {
  return Array.from(personalRecordMap().values()).sort((a, b) => b.weight - a.weight);
}

function prCount() {
  return state.logs.reduce((total, log) => total + (Array.isArray(log.prs) ? log.prs.length : 0), 0);
}

function currentStreak() {
  const dates = new Set(strengthLogs().map((log) => log.date));
  let streak = 0;
  const cursor = startOfDay(new Date());
  while (dates.has(toISODate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function isBadgeEarned(id) {
  return earnedBadgeIds().has(id);
}

function earnedBadgeIds() {
  const completed = strengthLogs().length;
  const earned = new Set();
  if (completed >= 1) earned.add("first");
  if (currentStreak() >= 7) earned.add("fire");
  if (completed >= 12) earned.add("phase1");
  if (completed >= TOTAL_SESSIONS) earned.add("cheer-ready");
  if (prCount() >= 10) earned.add("pr-queen");
  if (strengthLogs().some((log) => log.phase === "Build")) earned.add("barbell");
  return earned;
}

function weeklyRecap() {
  const weekAgo = startOfDay(new Date());
  weekAgo.setDate(weekAgo.getDate() - 6);
  const weekLogs = state.logs.filter((log) => new Date(`${log.date}T00:00:00`) >= weekAgo);
  const prs = weekLogs.flatMap((log) => log.prs || []);
  const top = weekLogs
    .flatMap((log) => log.exercises)
    .filter((entry) => Number(entry.weight))
    .sort((a, b) => Number(b.weight) - Number(a.weight))[0];
  if (!weekLogs.length) {
    return "This week is wide open. Start with one clean session, log the weights, and give yourself proof that you showed up.";
  }
  const topLift = top ? `${top.name} at ${top.weight} lb` : "clean logged reps";
  return `You completed ${weekLogs.length} workout${weekLogs.length === 1 ? "" : "s"} this week and hit ${prs.length} PR${prs.length === 1 ? "" : "s"}. Your strongest lift was ${topLift}. Keep the next session clean, confident, and just a little stronger than last time.`;
}

function bestForExercise(exerciseId) {
  for (const log of state.logs) {
    const entry = log.exercises.find((item) => item.id === exerciseId && (item.weight || item.reps));
    if (entry) return entry;
  }
  return {};
}

function drawProgressChart() {
  const canvas = document.querySelector("#progressChart");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);

  const logs = [...strengthLogs()].reverse();
  const padding = 28;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  context.strokeStyle = "#e5e0da";
  context.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = padding + (chartHeight / 4) * i;
    context.beginPath();
    context.moveTo(padding, y);
    context.lineTo(width - padding, y);
    context.stroke();
  }

  context.fillStyle = "#746f6a";
  context.font = "700 12px Inter, system-ui, sans-serif";
  const exercise = exerciseLibrary[selectedChartExerciseId] || exerciseLibrary["leg-press"];
  context.fillText(exercise.name, padding, 18);

  const pointsRaw = logs
    .map((log) => {
      const entry = log.exercises.find((item) => item.id === selectedChartExerciseId && Number(item.weight));
      return entry ? { date: log.date, weight: Number(entry.weight) } : null;
    })
    .filter(Boolean);

  if (!pointsRaw.length) {
    context.fillStyle = "#746f6a";
    context.fillText("Log weight for this move to draw the line.", padding, height / 2);
    return;
  }

  const maxWeight = Math.max(...pointsRaw.map((point) => point.weight));
  context.fillText(`${maxWeight} lb best`, width - padding - 76, 18);

  const points = pointsRaw.map((point, index) => ({
    x: padding + (chartWidth * index) / Math.max(1, pointsRaw.length - 1),
    y: padding + chartHeight - (chartHeight * point.weight) / Math.max(5, maxWeight),
    weight: point.weight,
  }));

  context.strokeStyle = "#0f9f82";
  context.lineWidth = 4;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  points.forEach((point, index) => {
    if (index === 0) context.moveTo(point.x, point.y);
    else context.lineTo(point.x, point.y);
  });
  context.stroke();

  points.forEach((point, index) => {
    context.fillStyle = index === points.length - 1 ? "#df4c6b" : "#f1b938";
    context.beginPath();
    context.arc(point.x, point.y, index === points.length - 1 ? 5 : 3, 0, Math.PI * 2);
    context.fill();
  });
}

function exercisesForChart() {
  return Object.entries(exerciseLibrary)
    .map(([id, exercise]) => ({ id, name: exercise.name, category: exercise.category }))
    .filter((exercise) => exercise.category !== "Conditioning");
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ava-strong-90-progress-${todayISO()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Progress export created.");
}

function generateShareCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const context = canvas.getContext("2d");
  const completed = strengthLogs().length;
  const records = personalRecords();
  const phase = phaseForSession(Math.min(completed + 1, TOTAL_SESSIONS));
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#11100f");
  gradient.addColorStop(0.52, "#38241c");
  gradient.addColorStop(1, "#fff3df");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(255,255,255,.12)";
  context.fillRect(80, 90, 920, 1170);
  context.strokeStyle = "rgba(247,230,189,.38)";
  context.lineWidth = 4;
  context.strokeRect(80, 90, 920, 1170);
  context.fillStyle = "#fffaf2";
  context.font = "900 58px system-ui, sans-serif";
  context.fillText("Ava Strong 90", 130, 190);
  context.fillStyle = "#f7e6bd";
  context.font = "800 30px system-ui, sans-serif";
  context.fillText(`${phase.name} Phase`, 130, 245);
  context.fillStyle = "#fff";
  context.font = "900 112px system-ui, sans-serif";
  context.fillText(`${completed}/${TOTAL_SESSIONS}`, 130, 430);
  context.font = "800 34px system-ui, sans-serif";
  context.fillText("strength sessions complete", 130, 485);
  const stats = [
    ["PRs", String(prCount())],
    ["This week", String(sessionsThisWeek())],
    ["Streak", String(currentStreak())],
  ];
  stats.forEach(([label, value], index) => {
    const x = 130 + index * 285;
    context.fillStyle = "rgba(255,250,242,.16)";
    context.fillRect(x, 570, 240, 160);
    context.fillStyle = "#fff";
    context.font = "900 58px system-ui, sans-serif";
    context.fillText(value, x + 28, 640);
    context.fillStyle = "#f7e6bd";
    context.font = "800 28px system-ui, sans-serif";
    context.fillText(label, x + 28, 690);
  });
  context.fillStyle = "#fffaf2";
  context.font = "900 42px system-ui, sans-serif";
  context.fillText("Top lift", 130, 835);
  context.fillStyle = "#f7e6bd";
  context.font = "800 34px system-ui, sans-serif";
  const top = records[0];
  context.fillText(top ? `${top.name}: ${top.weight} lb` : "First PR coming soon", 130, 895);
  context.fillStyle = "#11100f";
  context.fillRect(130, 1050, 820, 90);
  context.fillStyle = "#fffaf2";
  context.font = "900 32px system-ui, sans-serif";
  context.fillText("Built for cheer strength, basing confidence, and consistency.", 165, 1107);
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `ava-strong-share-${todayISO()}.png`;
  link.click();
  showToast("Share card created.");
  pulse([35, 30, 80]);
}

function cleanNumber(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  const number = Number(trimmed.replace(/[^0-9.]/g, ""));
  return Number.isFinite(number) && number > 0 ? String(number) : "";
}

function todayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

function toISODate(date) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(`${value}T00:00:00`),
  );
}

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

function showToast(message) {
  document.querySelectorAll(".toast").forEach((toast) => toast.remove());
  const template = document.querySelector("#toastTemplate");
  const toast = template.content.firstElementChild.cloneNode(true);
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function pulse(pattern = [35]) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

function playDing(frequency = 660) {
  if (!state.soundOn) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audio = new AudioContext();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.setValueAtTime(0.0001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, audio.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.22);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start();
    oscillator.stop(audio.currentTime + 0.24);
  } catch {
    // Audio is optional and may be blocked by browser settings.
  }
}

function showCelebration(title, message) {
  document.querySelectorAll(".celebration").forEach((node) => node.remove());
  const celebration = document.createElement("div");
  celebration.className = "celebration";
  celebration.innerHTML = `
    <div class="confetti" aria-hidden="true">
      ${Array.from({ length: 26 }, (_, index) => `<i style="--i:${index}"></i>`).join("")}
    </div>
    <div class="celebration-card" role="dialog" aria-modal="true" aria-label="${escapeAttr(title)}">
      <span class="tag gold">Ava Strong 90</span>
      <h2>${title}</h2>
      <p>${message}</p>
      <button class="primary-button" type="button">Keep going</button>
    </div>
  `;
  celebration.querySelector("button").addEventListener("click", () => celebration.remove());
  celebration.addEventListener("click", (event) => {
    if (event.target === celebration) celebration.remove();
  });
  document.body.appendChild(celebration);
  window.setTimeout(() => celebration.remove(), 5200);
}
