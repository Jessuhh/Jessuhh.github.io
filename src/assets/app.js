function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const quotes = [
    "Memento Mori,<br />Unus Annus",
    "I'm fluent in the following languages:<br />- Dutch<br />- English<br />- Sarcasm",
    "Longpolling the smart blockchain cloud using artificial intelligence since 2022!",
    "In Dutch we don't say: 'I don't care', we say: 'It can oxidize my buttocks' and I think that's beautiful.",
    "Eyyy ladders! I go up and I go down!",
    "Science isn't about why, it's about why not.",
    "The Enrichment Center reminds you that the Weighted Companion Cube will never threaten to  stab you and, in fact, cannot speak.",
    "Do you think I am trying to trick you with reverse psychology? I mean, seriously now.",
    "You, [Subject Name Here], Must Be The Pride Of [Subject Hometown Here].",
    "This was a triumph. I'm making a note here, 'Huge success'.",
    "There is nothing more deceptive than an obvious fact.",
    "Stress can ruin every day of your life. Dying can only ruin one.",
    "Thank you for helping us help you help us all.",
    "Making a literal difference metaphorically.",
    "The whole world at your fingertips, the ocean at your door. Twenty-thousand years of this, seven more to go.",
    "Do not go gentle into that good night, rage, rage against the dying of the light.",
    "Logic will get you from a to b, imagination will take you everywhere.",
    "My job is top secret, even I don't know what I'm doing.",
    "Let all that you do be done in love.",
    "Even so the body is not made up of one part but of many.",
    "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    "Bad company corrupts good character.",
    "A time to weep and a time to laugh, a time to mourn and a time to dance.",
    // The office quotes
    "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised.",
    "I don't hate it. I just don't like it at all and it's terrible.",
    "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    "Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.",
    "I understand nothing.",
    "If I don't have some cake soon, I might die.",
    "I am faster than 80 percent of all snakes.",
    "I hate the idea that someone out there hates me. I even hate thinking that al-Qaeda hates me. I think if they got to know me, they wouldn't hate me.",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "Guess what, I have flaws. What are they? Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me... No, don't sue me. That is the opposite of the point that I'm trying to make.",
    "Me think, why waste time say lot word, when few word do trick.",
    "I love inside jokes. I'd love to be a part of one someday.",
    "Who says exactly what they're thinking? What kind of a game is that?",
    "Reverse psychology is an awesome tool. I don't know if you guys know about it, but, basically, you make someone think the opposite of what you believe. And that tricks them into doing something stupid. Works like a charm.",
    "You cheated on me? When I specifically asked you not to?",
    "Congratulations! you found a quote that's not a quote from the Office!",
];

function refreshQuote() {
    Object.assign(document.getElementById("quote"), {
        innerHTML: quotes[randomInt(0, quotes.length - 1)],
    });
}

function updateTime() {
    const date = new Date();
    const timeString = date.toLocaleTimeString("en-UK", { timeZone: "Europe/Amsterdam" });
    const dateString = date.toLocaleDateString("en-UK", { timeZone: "Europe/Amsterdam" });
    Object.assign(document.getElementById("current-time"), {
        innerHTML: timeString,
    });
    Object.assign(document.getElementById("current-date"), {
        innerHTML: dateString,
    });
}

setInterval(updateTime, 1000);

refreshQuote();
updateTime();
