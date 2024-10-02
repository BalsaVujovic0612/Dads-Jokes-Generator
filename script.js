const jokes = [
    { joke: "Why don't skeletons fight each other? They don't have the guts.", author: "Dad Bodkins" },
    { joke: "I only know 25 letters of the alphabet. I don’t know y.", author: "Papa Punny" },
    { joke: "What do you call fake spaghetti? An impasta!", author: "Pasta Pete" },
    { joke: "Why don’t eggs tell jokes? They’d crack each other up.", author: "Eggbert Yolk" },
    { joke: "Why couldn't the bicycle stand up by itself? It was two-tired.", author: "Wheelie Joe" },
    { joke: "I’m reading a book about anti-gravity. It’s impossible to put down!", author: "Bookworm Bob" },
    { joke: "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.", author: "Cheesy Charlie" },
    { joke: "Why did the scarecrow win an award? Because he was outstanding in his field.", author: "Farmer Phil" },
    { joke: "What do you call a fish with no eyes? Fsh.", author: "Captain Cod" },
    { joke: "I used to play piano by ear, but now I use my hands.", author: "Melody Mike" }
]

function createJokes(){
    let randomIndex = Math.floor(Math.random() * jokes.length)
    let randomJoke = jokes[randomIndex]

    document.getElementById('jokes').textContent = `${randomJoke.joke}`
    document.getElementById('author').textContent = `${randomJoke.author}`
}