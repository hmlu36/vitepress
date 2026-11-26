require('dotenv').config();

module.exports = {
    ignoreDeadLinks: true,
    lang: 'zh-TW',
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/earlyaccess/notosanstc.css?display=swap',
            },
        ],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0',
            },
        ],
    ],
    title: 'Note筆記',
    description: '各式各樣的筆記',
    base: '/vitepress/',
    themeConfig: {
        search: {
            provider: 'local',
        },
        outline: {
            level: [2, 3],
            label: '本頁目錄',
        },
        editLink: {
            pattern: 'https://github.com/hmlu36/vitepress/edit/main/docs/:path',
            text: 'Edit this page',
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/hmlu36/vitepress' },
        ],
        nav: [
            { text: '首頁', link: '/' },
            { text: '🚴單車生活', link: '/Bike/' },
            { text: '💼工作技巧', link: '/WorkSkill/' },
            { text: '📈股市', link: '/Stock/' },
            { text: '💏婚禮相關', link: '/Wedding/' },
        ],
        sidebar: require('./sidebar'),
    },
    markdown: {
        lineNumbers: true,
    },
};
