const animeList = [
    {
        id: 1,
        name: "Attack on Titan",
        author: "Hajime Isayama",
        dateOfRelease: "2013",
        producer: "Wit Studio, MAPPA"
    },
    {
        id: 2,
        name: "My Hero Academia",
        author: "Kohei Horikoshi",
        dateOfRelease: "2016",
        producer: "Bones"
    },
    {
        id: 3,
        name: "Demon Slayer",
        author: "Koyoharu Gotouge",
        dateOfRelease: "2019",
        producer: "Ufotable"
    },
    {
        id: 4,
        name: "One Piece",
        author: "Eiichiro Oda",
        dateOfRelease: "1999",
        producer: "Toei Animation"
    },
    {
        id: 5,
        name: "Fullmetal Alchemist: Brotherhood",
        author: "Hiromu Arakawa",
        dateOfRelease: "2009",
        producer: "BONES"
    },
    {
        id: 6,
        name: "Death Note",
        author: "Tsugumi Ohba",
        dateOfRelease: "2006",
        producer: "Madhouse"
    },
    {
        id: 7,
        name: "Sword Art Online",
        author: "Reki Kawahara",
        dateOfRelease: "2012",
        producer: "A-1 Pictures"
    },
    {
        id: 8,
        name: "Tokyo Ghoul",
        author: "Sui Ishida",
        dateOfRelease: "2014",
        producer: "Studio Pierrot"
    },
    {
        id: 9,
        name: "Hunter x Hunter",
        author: "Yoshihiro Togashi",
        dateOfRelease: "2011",
        producer: "Madman Entertainment"
    },
    {
        id: 10,
        name: "Neon Genesis Evangelion",
        author: "Hideaki Anno",
        dateOfRelease: "1995",
        producer: "Gainax"
    },
    {
        id: 11,
        name: "Paranoia Agent",
        author: "Satoshi Kon",
        dateOfRelease: "2004",
        producer: "Madhouse"
    },
    {
        id: 12,
        name: "Your Lie in April",
        author: "Naoshi Arakawa",
        dateOfRelease: "2014",
        producer: "A-1 Pictures"
    },
    {
        id: 13,
        name: "The Prince of Tennis",
        author: "Takeshi Konomi",
        dateOfRelease: "2001",
        producer: "Mitsubachi"
    },
    {
        id: 14,
        name: "Mob Psycho 100",
        author: "ONE",
        dateOfRelease: "2016",
        producer: "Bones"
    },
    {
        id: 15,
        name: "Gurren Lagann",
        author: "Kazuki Nakashima",
        dateOfRelease: "2007",
        producer: "Gainax"
    },
    {
        id: 16,
        name: "Monster",
        author: "Naoki Urasawa",
        dateOfRelease: "2004",
        producer: "Madhouse"
    },
    {
        id: 17,
        name: "Kabaneri of the Iron Fortress",
        author: "Tachikawa Yūichirō",
        dateOfRelease: "2016",
        producer: "Wit Studio"
    },
    {
        id: 18,
        name: "Anohana: The Flower We Saw That Day",
        author: "Yoshihiro Miyamoto",
        dateOfRelease: "2011",
        producer: "A-1 Pictures"
    },
    {
        id: 19,
        name: "One Punch Man",
        author: "ONE",
        dateOfRelease: "2015",
        producer: "Madhouse"
    },
    {
        id: 20,
        name: "The Wings of Honneamise",
        author: "Kazuki Nakashima",
        dateOfRelease: "1987",
        producer: "Gainax"
    },
];
const answers = [
    {
        name:'Animes released on 2013',
        answer : [
            {
                id: 1,
                name: "Attack on Titan",
                author: "Hajime Isayama",
                dateOfRelease: "2013",
                producer: "Wit Studio, MAPPA"
            },
            {
                id: 2,
                name: "My Hero Academia",
                author: "Kohei Horikoshi",
                dateOfRelease: "2016",
                producer: "Bones"
            },
            {
                id: 3,
                name: "Demon Slayer",
                author: "Koyoharu Gotouge",
                dateOfRelease: "2019",
                producer: "Ufotable"
            },
            {
                id: 4,
                name: "One Piece",
                author: "Eiichiro Oda",
                dateOfRelease: "1999",
                producer: "Toei Animation"
            },
        ], 
    },
    {
        name: 'Animes of the same author',
        answer: [
            {
                id: 5,
                name: "Fullmetal Alchemist: Brotherhood",
                author: "Hiromu Arakawa",
                dateOfRelease: "2009",
                producer: "BONES"
            },
            {
                id: 6,
                name: "Death Note",
                author: "Tsugumi Ohba",
                dateOfRelease: "2006",
                producer: "Madhouse"
            },
            {
                id: 7,
                name: "Sword Art Online",
                author: "Reki Kawahara",
                dateOfRelease: "2012",
                producer: "A-1 Pictures"
            },
            {
                id: 8,
                name: "Tokyo Ghoul",
                author: "Sui Ishida",
                dateOfRelease: "2014",
                producer: "Studio Pierrot"
            },
        ]
    },
    {
        name: 'Isekai animes',
        answer: [
            {
                id: 9,
                name: "Hunter x Hunter",
                author: "Yoshihiro Togashi",
                dateOfRelease: "2011",
                producer: "Madman Entertainment"
            },
            {
                id: 10,
                name: "Neon Genesis Evangelion",
                author: "Hideaki Anno",
                dateOfRelease: "1995",
                producer: "Gainax"
            },
            {
                id: 11,
                name: "Paranoia Agent",
                author: "Satoshi Kon",
                dateOfRelease: "2004",
                producer: "Madhouse"
            },
            {
                id: 12,
                name: "Your Lie in April",
                author: "Naoshi Arakawa",
                dateOfRelease: "2014",
                producer: "A-1 Pictures"
            },
        ]
    },
    {
        name: 'All anime movies',
        answer: [
            {
                id: 13,
                name: "The Prince of Tennis",
                author: "Takeshi Konomi",
                dateOfRelease: "2001",
                producer: "Mitsubachi"
            },
            {
                id: 14,
                name: "Mob Psycho 100",
                author: "ONE",
                dateOfRelease: "2016",
                producer: "Bones"
            },
            {
                id: 15,
                name: "Gurren Lagann",
                author: "Kazuki Nakashima",
                dateOfRelease: "2007",
                producer: "Gainax"
            },
            {
                id: 16,
                name: "Monster",
                author: "Naoki Urasawa",
                dateOfRelease: "2004",
                producer: "Madhouse"
            },
        ],
    },
]
const MOCKDATA = {
    animeList,
    answers,
} 

export default MOCKDATA;