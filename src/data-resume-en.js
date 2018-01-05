const resume = {
    info: {
        firstname: 'Julie',
        lastname: 'Valet',
        title: 'Web Application Developer',
        location: 'Montreal, Canada',
        email: 'julie.valet@gmail.com',
        social: [
            { name: 'linkedin', link: 'https://www.linkedin.com/in/julie-valet-webdev/' },
            { name: 'github', link: 'https://github.com/julievalet' },
            { name: 'twitter', link: 'https://twitter.com/jvalet13' },
            { name: 'youtube', link: 'https://youtube.com/user/JulieTV13' },
            { name: 'instagram', link: 'https://instagram.com/_u/canyoutraveltheworld/' }
        ],
        available: 'Right away',
        about: ''
    },
    skills: {
        languages: [{ lang: 'French', level: 'native' }, { lang: 'English', level: 'fluent' }],
        dev: {
            FrontEnd: [
                { name: 'AngularJS', level: [1, 1, 1, 0, 0], time: '1+ years' },
                { name: 'ReactJS', level: [1, 1, 0, 0, 0], time: '< 6 months' },
                { name: 'jQuery', level: [1, 1, 1, 1, 0], time: '3+ years' },
                { name: 'HTML5', level: [1, 1, 1, 1, 1], time: '3+ years' },
                { name: 'CSS3', level: [1, 1, 1, 1, 0], time: '3+ years' },
                { name: 'Bootstrap', level: [1, 1, 1, 1, 0], time: '2+ years' },
                { name: 'Material', level: [1, 1, 0, 0, 0], time: '< 1 year' }
            ],
            BackEnd: [
                { name: 'NodeJS', level: [0, 0, 0, 0, 0], time: '< 6 months' },
                { name: 'PHP', level: [1, 1, 1, 1, 1], time: '4+ years' },
                { name: 'MySQL', level: [1, 1, 1, 1, 1], time: '4+ years' }
            ],
            Other: [
                { name: 'JSON', level: [1, 1, 1, 1, 1], time: '3+ years' },
                { name: 'Ajax', level: [1, 1, 1, 1, 0], time: '3+ years' },
                { name: 'ChartJS', level: [1, 1, 1, 1, 0], time: '2+ years' },
                { name: 'Google Charts', level: [1, 1, 1, 1, 0], time: '2+ years' },
                { name: 'jQPlot', level: [1, 1, 1, 1, 0], time: '2+ years' },
                { name: 'DataTable', level: [1, 1, 1, 0, 0], time: '3+ years' },
                { name: 'Git', level: [1, 1, 1, 0, 0], time: '< 1 year' },
                { name: 'Gulp', level: [1, 0, 0, 0, 0], time: '< 6 months' }
            ]
        }
    },
    education: [
        {
            diploma: 'Post-Graduate Degree in Multimedia',
            location: 'University of Technology of Reims, France',
            year: '2014'
        },
        {
            diploma: 'English as a Second Language',
            location: 'Harvard Extension School, Cambridge, MA, USA',
            year: 'Jan. - Apr. 2012'
        },
        {
            diploma: 'University Degree in Computer Sciences',
            location: 'University of Technology of Amiens, France',
            year: '2011'
        },
        {
            diploma: 'High School Diploma in Science of Engineering',
            location: 'High School of Albert, France',
            year: '2009'
        }
    ],
    onlineCourses: [
        {
            name: 'ES6 for Everyone',
            author: 'Wes Bos',
            url: 'https://es6.io'
        },
        {
            name: 'Learn ReactJS: Part I & II',
            author: 'Wes Bos',
            url: 'https://www.codecademy.com/learn/react-101'
        },
        {
            name: 'React For Beginners',
            author: 'Wes Bos',
            url: 'https://reactforbeginners.com/'
        },
        {
            name: 'Learn Redux',
            author: 'Wes Bos',
            url: 'https://learnredux.com/'
        },
        {
            name: 'Learn Node',
            author: 'Wes Bos',
            url: 'https://learnnode.com/'
        },
        {
            name: 'Javascript30',
            author: 'Wes Bos',
            url: 'https://javascript30.com'
        },
        {
            name: 'What the Flexbox?!',
            author: 'Wes Bos',
            url: 'https://flexbox.io'
        },
        {
            name: 'Git',
            author: 'CodeSchool',
            url: 'https://www.codeschool.com/learn/git'
        },
        {
            name: 'Shaping Up With AngularJS',
            author: 'CodeSchool',
            url: 'https://www.codeschool.com/courses/shaping-up-with-angularjs'
        }
    ],
    workXP: [
        {
            title: 'Web Application Developer',
            companyName: 'Net-Veille Systems',
            location: 'Levallois-Perret, France',
            year: 'Nov. 2014 - Sept. 2017',
            desc: [
                'Lead Developer of the Front and Back end of a repricing tool.',
                'Maintenance and development of a pricing monitor web application. (PriceVeille)',
                'Dynamic CSV and Excel reports generation with PHP, Graphs and Tables with Javascript.',
                'Used Tech : AngularJS, jQPlot, Google Charts, ChartJS, DataTable, JSON, PHPExcel, Spreadsheet Excel Writer, PHP, MySQL (InnoDB), Javascript, jQuery'
            ]
        },
        {
            title: 'Web Application Developer',
            companyName: 'Studio 303',
            location: 'Paris, France',
            year: 'Mar. - Jun. 2014 (Internship - 15 weeks)',
            desc: [
                'Media Asset Manager application development (PHP, HTML5, CSS3)',
                'SQL Data Base development',
                'Integration of the solution into an Avid environment (ISIS, Interplay AirSpeed​​)'
            ]
        },
        {
            title: 'Web Developer / Integrator',
            companyName: 'Association CARMEN/Canal Nord',
            location: 'Amiens, France',
            year: 'Mar. - Jun. 2011 (Internship - 10 weeks)',
            desc: ['Website rebuilding with Typo3', 'Tips for developing a video resources website', 'Web Consulting']
        },
        {
            title: 'Au Pair',
            companyName: 'Cultural Care Au Pair Agency',
            location: 'Boston, MA, USA & New York City, NY, USA',
            year: 'Sept. 2011 - Jun. 2013',
            desc: []
        }
    ],
    hobbys: [
        'Working out (bodyweight & weight training, yoga, swimming)',
        'Traveling (editing short videos of my travels)',
        'Photo Editing (with Adobe Lightroom)'
    ]
};

export default resume;
