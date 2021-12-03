// Use this sample to create your own voice commands
intent("hello", (p) => {
    p.play("(hey, what's going on ? | hi there)");
});

intent("What is your name ?", (p) => {
    p.play(
        "(hello | hi there) my name is Alan, I am your personal voice assistant"
    );
});

// BASIC INTERACTION
intent(
    "What does this app do ?",
    "what can be done here ?",
    "what can i do here ?",
    "what can you do ?",
    reply(
        "This is a search engine. you can search what ever you like and can command me to do things which are possible for me to do."
    )
);

// OPENING NEW TAB
intent("open a new tab", (p) => {
    p.play({ command: "open_new_tab" });
});

// songs
intent("play $(MUSIC* .+)", (p) => {
    p.play("Playing $(MUSIC) on YouTube Music");
    p.play({ command: "playMusic", value: `${p.MUSIC.value}` });
});

// GOOGLE SEARCH
intent(
    "Search $(WORD* .+)",
    reply("sure, Opening Google search "),
    (play_instance) => {
        play_instance.play({
            command: "searchCommand",
            value: `${play_instance.WORD.value}`,
        });
    }
);

// CLOSING TAB
intent(
    "(close tab | close this tab)",
    reply("(Sure, closing this tab | closing tab)"),
    (play_instance) => {
        play_instance.play({ command: "closeTab" });
    }
);

// OPENING WEBSITE
intent("Open $(SITE* .+)", reply("Sure, opening $(SITE)"), (play_instance) => {
    play_instance.play({
        command: "openSite",
        value: `${play_instance.SITE.value}`,
    });
});

// FIND MEANING OF A WORD
intent("what is the meaning of $(WORD* .+)", (play_instance) => {
    play_instance.play("Let me see what i can find on the internet !");
    play_instance.play({
        command: "searchWord",
        value: `${play_instance.WORD.value}`,
    });
});

// onCreateProject((p) => {
//     p.project.word = " hello ";
// });
//-------------------------------------//
