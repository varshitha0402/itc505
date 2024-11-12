const storySegments = {
    start: {
        text: "You are a pirate captain sailing the high seas in search of a legendary treasure. One morning, your crew spots a mysterious island on the horizon. Do you sail towards it or continue searching for the treasure?",
        choices: ["Sail towards the island", "Continue searching for treasure"],
        consequence: { 
            "Sail towards the island": "island", 
            "Continue searching for treasure": "treasure" 
        },
        image: "download.jpeg"
    },
    island: {
        text: "As you approach the island, a dense fog rolls in, and a strange voice echoes from the shore. Do you dock the ship and investigate or sail away?",
        choices: ["Dock the ship", "Sail away"],
        consequence: { 
            "Dock the ship": "mystery", 
            "Sail away": "treasure" 
        },
        image: "download (1).jpeg"
    },
    treasure: {
        text: "You continue your journey, but a rival pirate ship appears on the horizon. They challenge you to a battle for the treasure. Do you fight or try to escape?",
        choices: ["Fight", "Escape"],
        consequence: { 
            "Fight": "battle", 
            "Escape": "escape" 
        },
        image: "download (2).jpeg"
    },
    mystery: {
        text: "On the island, you discover an ancient temple. Inside, you find a cursed treasure chest. Do you open it or leave it alone?",
        choices: ["Open the chest", "Leave it alone"],
        consequence: { 
            "Open the chest": "curse", 
            "Leave it alone": "treasure" 
        },
        image: "download (3).jpeg"
    },
    battle: {
        text: "The battle with the rival pirates is fierce. You have the upper hand, but their captain offers you a truce. Do you accept or continue fighting?",
        choices: ["Accept truce", "Continue fighting"],
        consequence: { 
            "Accept truce": "truce", 
            "Continue fighting": "victory" 
        },
        image: "download (4).jpeg"
    },
    escape: {
        text: "You manage to escape the pirate ship, but your crew is scattered and your ship is heavily damaged. You drift aimlessly in the open sea. Do you try to repair your ship or look for another crew?",
        choices: ["Repair ship", "Look for another crew"],
        consequence: { 
            "Repair ship": "repair", 
            "Look for another crew": "crew" 
        },
        image: "download (5).jpeg"
    },
    curse: {
        text: "The chest is cursed, and you are immediately struck with misfortune. Your ship begins sinking and your crew abandons you. Do you try to swim to safety or call for help?",
        choices: ["Swim to safety", "Call for help"],
        consequence: { 
            "Swim to safety": "survival", 
            "Call for help": "rescue" 
        },
        image: "download (6).jpeg"
    },
    truce: {
        text: "The rival pirate captain honors the truce and offers you a share of their treasure. Do you trust them or betray them?",
        choices: ["Trust them", "Betray them"],
        consequence: { 
            "Trust them": "treasureShare", 
            "Betray them": "betrayal" 
        },
        image: "download (7).jpeg"
    },
    victory: {
        text: "You defeat the rival pirates and take their treasure. However, your crew turns on you, wanting the treasure for themselves. Do you fight them or share the treasure?",
        choices: ["Fight them", "Share the treasure"],
        consequence: { 
            "Fight them": "mutiny", 
            "Share the treasure": "peace" 
        },
        image: "download (8).jpeg"
    },
    treasureShare: {
        text: "You receive your share of the treasure and live the rest of your life as a wealthy pirate, ruling the seas with respect.",
        choices: [],
        consequence: {},
        image: "wealth.jpg"
    },
    betrayal: {
        text: "Your betrayal causes chaos. The rival pirates hunt you down and you are forced to walk the plank.",
        choices: [],
        consequence: {},
        image: "download (9).jpeg"
    },
    peace: {
        text: "Sharing the treasure leads to peace and prosperity among your crew. You live out your days as a respected captain.",
        choices: [],
        consequence: {},
        image: "download (10).jpeg"
    },
    mutiny: {
        text: "Your crew mutinies, and you are overthrown. Your fate is sealed as the crew takes the treasure for themselves.",
        choices: [],
        consequence: {},
        image: "download (11).jpeg"
    },
    survival: {
        text: "You manage to survive on a deserted island, but you are forever alone, haunted by the curse you unleashed.",
        choices: [],
        consequence: {},
        image: "download (12).jpeg"
    },
    rescue: {
        text: "You are rescued by another ship, but your reputation as a cursed pirate follows you wherever you go.",
        choices: [],
        consequence: {},
        image: "download (13).jpeg"
    },
    crew: {
        text: "You gather a new crew, but the dangers of the sea prove too much. Your ship is lost in a storm, and your crew is scattered.",
        choices: [],
        consequence: {},
        image: "download (14).jpeg"
    }
};

let currentSegment = "start";

function startGame() {
    currentSegment = "start"; // Reset to the start of the game
    updatePage();
}

function updatePage() {
    const segment = storySegments[currentSegment];
    document.getElementById("story").innerHTML = `<div class="question">${segment.text}</div>`;
    document.getElementById("image").innerHTML = `<img src="${segment.image}" alt="Story Image">`;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Clear previous choices
    segment.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => {
            currentSegment = segment.consequence[choice];
            updatePage();
        };
        choicesDiv.appendChild(button);
    });
}

startGame();
