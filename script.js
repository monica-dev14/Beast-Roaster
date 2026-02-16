const beastBtn = document.getElementById('beast-btn');
const potatoBtn = document.getElementById('potato-btn');
const btnGroup = document.getElementById('btn-group');
const displayMeme = document.getElementById('display-meme');
const overlay = document.getElementById('overlay');
const responseArea = document.getElementById('response-area');
const messageText = document.getElementById('message');
const taskContainer = document.getElementById('task-container');
const taskText = document.getElementById('task-text');
const streakLabel = document.getElementById('streak-count');
const questionText = document.getElementById('question'); 

const beastAudio = new Audio('./beast.mp3'); 
const lazyAudio = new Audio('./lazy.mp3');

const beastMemes = [
    "https://i0.wp.com/winkgo.com/wp-content/uploads/2020/01/gym-memes-17.jpg?resize=768%2C768&ssl=1",
    "https://i.pinimg.com/474x/80/ff/8f/80ff8f73562b440dbcf3592d2d784dac.jpg?nii=t",
    "https://tse2.mm.bing.net/th/id/OIP.Nqe_sjNQ5Y3ah3xiHMjsiQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
];

const potatoMemes = [
    "https://th.bing.com/th/id/R.a9745dc4caa462890986d6d6bda599db?rik=urNojzS8eHsA4g&riu=http%3a%2f%2fkindyou.com%2fwp-content%2fuploads%2f2019%2f04%2fMorning-Workout-Meme-4.jpg&ehk=F6WmXnFRXcnFvuZMjeUVY14G7cIn42XusqCZf5zrlxA%3d&risl=&pid=ImgRaw&r=0",
    "https://i.pinimg.com/736x/e4/06/68/e40668965488b81039b6f31adfcdd3f7.jpg"
];

const relaxTasks = [
    "Nalla oru glass chill thanni kudi! 💧",
    "5 mins kanna moodi relax pannu! 🧘‍♂️",
    "Ulagame marandhu unakku pidicha song kelunga! 🎧"
];

const roasts = [
    "Next year-um idhe size shirt thaan pola? 👕",
    "Unna nambi dhaan gym-la fan-e odudhu போல! 😂",
    "Sappaattu mela irukura akkarai workout-la illaiye? 🥔"
];


let streak = localStorage.getItem('gymStreak') || 0;
streakLabel.innerText = streak;


function shareOnWhatsApp() {
    const shareMessage = `Machi! Enoda Gym Streak: ${streak} Days! 🔥 Innikki nan Beast Mode! Neenga inniki gym poningala?`;
    const url = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
    window.open(url, '_blank');
}


beastBtn.addEventListener('click', () => {
    beastAudio.currentTime = 0;
    beastAudio.play().catch(e => console.log("Sound error:", e));

  
            

    questionText.classList.add('hidden');
    
    const randomBeast = beastMemes[Math.floor(Math.random() * beastMemes.length)];
    displayMeme.src = randomBeast;
    displayMeme.className = "show-media beast-wow-effect";

    btnGroup.classList.add('fade-out');
    responseArea.classList.remove('hidden');
    taskContainer.classList.remove('hidden');
    
    const randomTask = relaxTasks[Math.floor(Math.random() * relaxTasks.length)];
    taskText.innerText = "RELAXATION TASK: " + randomTask;
    
  
    messageText.innerHTML = `King Behavior! Innikki mass pannitinga! 👑 <br> 
    <button id="whatsapp-btn" style="margin-top:15px; padding:10px; background:#25D366; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">Share on WhatsApp 📱</button>`;
    
    document.body.style.backgroundColor = "#064e3b";

    
    document.getElementById('whatsapp-btn').addEventListener('click', shareOnWhatsApp);
});


potatoBtn.addEventListener('click', () => {
    lazyAudio.currentTime = 0;
    lazyAudio.play().catch(e => console.log("Sound error:", e));
    
            

    questionText.classList.add('hidden');
    
    const randomPotato = potatoMemes[Math.floor(Math.random() * potatoMemes.length)];
    displayMeme.src = randomPotato;
    displayMeme.className = "show-media"; 
    
    overlay.classList.add('dim-active');
    btnGroup.classList.add('fade-out');
    
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    messageText.innerText = randomRoast;
    responseArea.classList.remove('hidden');

    setTimeout(() => {
        overlay.classList.remove('dim-active');
        btnGroup.classList.remove('fade-out');
        displayMeme.className = "hidden-media";
        questionText.classList.remove('hidden'); 
        responseArea.classList.add('hidden');
        document.body.style.backgroundColor = "#121212";
    }, 4000);
});


document.getElementById('done-task-btn').addEventListener('click', () => {
    beastAudio.pause(); 
    beastAudio.currentTime = 0;
    streak++;
    updateStreakDisplay();
    
    btnGroup.classList.remove('fade-out');
    taskContainer.classList.add('hidden');
    displayMeme.className = "hidden-media";
    questionText.classList.remove('hidden'); 
    messageText.innerText = "Super! Streak Updated! 🔥";
    document.body.style.backgroundColor = "#121212";
});

function updateStreakDisplay() {
    localStorage.setItem('gymStreak', streak);
    streakLabel.innerText = streak;
}