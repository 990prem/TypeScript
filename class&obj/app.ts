class Music {
    constructor(
        public name: string,
        public artist: string,
        public thumbnail: string = "default.jpg",
        public length: number = 0,
        public free: boolean = false
    ) {}
}

const song = new Music(
    "Believer",
    "Imagine Dragons"
);

console.log(song.name);
console.log(song.artist);