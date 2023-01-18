import { IGame } from '../entity';

type mockData = Array<[IGame, IGame, [IGame, IGame]]>;

export const mockData: mockData = [
    [
        {
            thumbnail:
                'https://cdn.cloudflare.steamstatic.com/steam/spotlights/e6316da209d824be76e98056/spotlight_image_english.jpg?t=1672758868',
            originalPrice: 1249,
            discountPercent: 65,
            description: {
                name: 'NBA2k23',
                about: 'Прийміть виклик NBA 2K23. Продемонструйте свій талант у MyCAREER. Обєднайте в команду сучасних зірок і безсмертних легенд у MyTEAM. Створіть власну династію в MyGM або ж змініть лігу на краще в MyLEAGUE. Візьміться за команди NBA чи WNBA у PLAY NOW і відчуйте, як гра',
                releaseDate: new Date('11.01.2022'),
                genre: ['Спорт', 'Баскетбол', 'Симулятор'],
            },
        },
        {
            thumbnail:
                'https://cdn.cloudflare.steamstatic.com/steam/spotlights/857269f582f4db8a870757dd/spotlight_image_english.jpg?t=1672878481',
            originalPrice: 459,
            discountPercent: 70,
            description: {
                name: 'Division',
                about: 'Прийміть Division',
                releaseDate: new Date('15.01.2022'),
                genre: ['Shooter', 'FPS', 'RPG'],
            },
        },
        [
            {
                thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1276790/header.jpg?t=1643427121',
                originalPrice: 349,
                discountPercent: 50,
                description: {
                    name: 'Ruined King',
                    about: 'Ruined king. Game from LOL universary.',
                    releaseDate: new Date('15.01.2020'),
                    genre: ['RPG', 'STREAM FIGHT'],
                },
            },
            {
                thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/868360/header.jpg?t=1667226571',
                originalPrice: 329,
                discountPercent: 60,
                description: {
                    name: 'Project Hospital',
                    about: 'Project Hospital',
                    releaseDate: new Date('22.01.2018'),
                    genre: ['Симулятор', 'Менеджмент', 'Стратегія'],
                },
            },
        ],
    ],
    [
        {
            thumbnail:
                'https://cdn.cloudflare.steamstatic.com/steam/spotlights/f1aa3ad588e1447fb8f082bf/spotlight_image_english.jpg?t=1673291633',
            originalPrice: 279,
            discountPercent: 50,
            description: {
                name: 'SKUL the hero slayer',
                about: 'Skul the hero slayer game... description',
                releaseDate: new Date('15.11.2022'),
                genre: ['Інді', 'Бойовик', 'Мандри'],
            },
        },
        {
            thumbnail:
                'https://cdn.cloudflare.steamstatic.com/steam/spotlights/19641521220389a21ffe298f/spotlight_image_english.jpg?t=1672949644',
            originalPrice: 799,
            discountPercent: 20,
            description: {
                name: 'The calisto protocol',
                about: 'The calisto protocol description',
                releaseDate: new Date('11.01.2023'),
                genre: ['Horror', 'FPS', 'RPG'],
            },
        },

        [
            {
                thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1549180/header.jpg?t=1673393220',
                originalPrice: 225,
                discountPercent: 75,
                description: {
                    name: 'Propnight',
                    about: 'Propnight game description',
                    releaseDate: new Date('15.05.2020'),
                    genre: ['Horror', 'Multiplayer'],
                },
            },
            {
                thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/559650/header.jpg?t=1673456148',
                originalPrice: 249,
                discountPercent: 75,
                description: {
                    name: 'Witch it',
                    about: 'Witch it description oh',
                    releaseDate: new Date('11.01.2018'),
                    genre: ['Fun', 'Менеджмент', 'Casual'],
                },
            },
        ],
    ],
];
