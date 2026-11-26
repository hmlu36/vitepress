const path = require('path');
const fs = require('fs');

const readFilesFromDir = (dirPath) => {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    return files
        .filter((entry) => entry.isFile() && entry.name.endsWith('.md') && entry.name.toLowerCase() !== 'index.md')
        .map((entry) => entry.name.slice(0, -3));
};

const getSidebars = (dir) => {
    const dirPath = path.join(__dirname, '..', dir);
    const files = readFilesFromDir(dirPath);
    return files.map((file) => ({
        text: file,
        link: `/${dir}/${file}`,
    }));
};

module.exports = {
    '/Bike/': [
        {
            text: '🚴假日騎士日誌',
            link: '/Bike/BikeTravel/',
            collapsed: false,
            items: getSidebars('Bike/BikeTravel'),
        },
        {
            text: '🚲自行車know-how',
            link: '/Bike/BikeInfo/',
            collapsed: false,
            items: getSidebars('Bike/BikeInfo'),
        },
    ],
    '/WorkSkill/': [
        {
            text: '💼工作技巧',
            link: '/WorkSkill/',
            collapsed: false,
            items: getSidebars('WorkSkill'),
        },
        {
            text: '🐍Python',
            link: '/WorkSkill/Python/',
            collapsed: false,
            items: getSidebars('WorkSkill/Python'),
        },
        {
            text: '⚡Vite',
            link: '/WorkSkill/Vite/',
            collapsed: false,
            items: getSidebars('WorkSkill/Vite'),
        },
    ],
    '/Stock/': [
        {
            text: '📈股市',
            link: '/Stock/',
            collapsed: false,
            items: getSidebars('Stock'),
        },
    ],
    '/Wedding/': [
        {
            text: '💏婚禮相關',
            link: '/Wedding/',
            collapsed: false,
            items: getSidebars('Wedding'),
        },
    ],
    '/Geosat/': [
        {
            text: '🛰️經緯航太',
            link: '/Geosat/',
            collapsed: false,
            items: getSidebars('Geosat'),
        },
    ],
    '/House/': [
        {
            text: '🏠房屋',
            link: '/House/',
            collapsed: false,
            items: getSidebars('House'),
        },
    ],
};
