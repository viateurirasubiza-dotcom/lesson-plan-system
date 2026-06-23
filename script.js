/* =========================
   LESSON PLAN FULL SYSTEM JS
   ========================= */

/* LOCAL STORAGE KEYS */
const KEYS = {
    teachers: "lp_teachers",
    subjects: "lp_subjects",
    classes: "lp_classes",
    plans: "lp_plans"
};

/* GET DATA */
function getData(key){
    return JSON.parse(localStorage.getItem(key)) || [];
}

/* SAVE DATA */
function saveData(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

/* =========================
   TEACHERS MODULE
   ========================= */

function addTeacher(name,email,subject){
    let data = getData(KEYS.teachers);
    data.push({id:Date.now(),name,email,subject});
    saveData(KEYS.teachers,data);
}

function deleteTeacher(id){
    let data = getData(KEYS.teachers).filter(t=>t.id!==id);
    saveData(KEYS.teachers,data);
}

/* =========================
   SUBJECTS MODULE
   ========================= */

function addSubject(name,code,dept){
    let data = getData(KEYS.subjects);
    data.push({id:Date.now(),name,code,dept});
    saveData(KEYS.subjects,data);
}

function deleteSubject(id){
    let data = getData(KEYS.subjects).filter(s=>s.id!==id);
    saveData(KEYS.subjects,data);
}

/* =========================
   CLASSES MODULE
   ========================= */

function addClass(name,level,students){
    let data = getData(KEYS.classes);
    data.push({id:Date.now(),name,level,students});
    saveData(KEYS.classes,data);
}

function deleteClass(id){
    let data = getData(KEYS.classes).filter(c=>c.id!==id);
    saveData(KEYS.classes,data);
}

/* =========================
   LESSON PLAN MODULE
   ========================= */

function addLessonPlan(plan){
    let data = getData(KEYS.plans);
    data.push({
        id:Date.now(),
        ...plan,
        status:"Pending"
    });
    saveData(KEYS.plans,data);
}

function deletePlan(id){
    let data = getData(KEYS.plans).filter(p=>p.id!==id);
    saveData(KEYS.plans,data);
}

/* =========================
   DASHBOARD COUNTERS
   ========================= */

function updateDashboard(){
    document.querySelectorAll(".teachers-count")
    .forEach(el=>el.innerText=getData(KEYS.teachers).length);

    document.querySelectorAll(".subjects-count")
    .forEach(el=>el.innerText=getData(KEYS.subjects).length);

    document.querySelectorAll(".classes-count")
    .forEach(el=>el.innerText=getData(KEYS.classes).length);

    document.querySelectorAll(".plans-count")
    .forEach(el=>el.innerText=getData(KEYS.plans).length);
}

/* =========================
   SEARCH FUNCTION
   ========================= */

function searchTable(inputId, tableId, column){
    let input=document.getElementById(inputId).value.toLowerCase();
    let rows=document.querySelectorAll(`#${tableId} tr`);

    rows.forEach((row,index)=>{
        if(index===0) return;
        let cell=row.cells[column].innerText.toLowerCase();
        row.style.display=cell.includes(input)?"":"none";
    });
}

/* =========================
   INITIAL LOAD
   ========================= */

document.addEventListener("DOMContentLoaded",()=>{
    updateDashboard();
});

/* =========================
   EXAMPLE USAGE (for forms)
   ========================= */

/*
addTeacher("John","john@gmail.com","Math");
addSubject("Physics","PHY101","Science");
addClass("S1","Secondary",40);

addLessonPlan({
    teacher:"John",
    subject:"Math",
    class:"S1",
    topic:"Algebra"
});
*/
