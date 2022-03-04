require('dotenv').config()

module.exports = {
    lang: 'zh-TW',
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/earlyaccess/notosanstc.css?display=swap'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,user-scaleble=0,initial-scale=1.0,maximum-scale=1.0'
        }],
        ['script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        }]
    ],
    title: 'Note筆記',
    description: '各式各樣的筆記',
    base: '/vitepress/',
    repo: 'https://github.com/hmlu36/vitepress',
    search: true,
    serviceWorker: true,
    themeConfig: {
        editLinks: true,
        editLinkText: 'Edit this page',
        nav: [
            { text: '首頁', link: '/' },
            { text: '🚴單車生活', link: '/Bike/' },
            { text: '💼工作技巧', link: '/WorkSkill/' },
            { text: '💏婚禮相關', link: '/Wedding/' }
        ],
        sidebar: require('./sidebar'),
        //lastUpdated: false, // string | boolean
    },
    markdown: {
        lineNumbers: true,
    },
    sidebarDepth: 2
};
