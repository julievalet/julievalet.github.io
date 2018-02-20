const data = {
    en: {
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
            about:
                "Hello there, I'm Julie. I've been passionate about new technology since I can remember and started learning code in High School. I'm always up for a new challenge, that's why I moved to Canada a few months ago (with a work permit). I have been learning new things every day since I moved here. For example, this little website you're currently on is built with ReactJS using ES6. I made it so I could apply my new skills on a concrete and useful project. If you'd like to know more about my journey in the coding world, email me or checkout the rest of the site. Thanks for stopping by, looking forward to hear from you."
        },
        skills: {
            languages: [{ lang: 'French', level: 'native' }, { lang: 'English', level: 'fluent' }],
            dev: {
                FrontEnd: [
                    { name: 'ReactJS', level: [1, 1, 0, 0, 0], time: '< 6 months' },
                    { name: 'AngularJS', level: [1, 1, 1, 0, 0], time: '1+ years' },
                    { name: 'jQuery', level: [1, 1, 1, 1, 0], time: '3+ years' },
                    { name: 'Bootstrap', level: [1, 1, 1, 1, 0], time: '2+ years' },
                    { name: 'Material', level: [1, 1, 0, 0, 0], time: '< 1 year' }
                ],
                BackEnd: [
                    { name: 'NodeJS', level: [0, 0, 0, 0, 0], time: '< 6 months' },
                    { name: 'PHP', level: [1, 1, 1, 1, 1], time: '4+ years' },
                    { name: 'MySQL', level: [1, 1, 1, 1, 1], time: '4+ years' }
                ]
            },
            other: {
                Other: ['JSON', 'Ajax', 'ChartJS', 'Google Charts', 'jQPlot', 'DataTable', 'Git', 'Gulp']
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
        portfolio: [
            {
                title: 'Social Scroller',
                desc: 'Marketing Tool - Social Media Analytic Solution for Brands',
                tech: 'PHP, AngularJS, ChartJS Bootstrap, Material',
                medias: [
                    {
                        link: 'https://cl.ly/1A3e1J431P0x',
                        src:
                            'https://d2ffutrenqvap3.cloudfront.net/items/2b3M3p3T2S3Z1E1f0L35/Screen%20Recording%202018-02-16%20at%2003.27%20PM.gif'
                    },
                    {
                        link: 'https://cl.ly/123d0C3X2K2v',
                        src:
                            'https://d2ffutrenqvap3.cloudfront.net/items/0G2C020W1P402d0w3L27/Screen%20Recording%202018-02-16%20at%2003.28%20PM.gif'
                    }
                ]
            },
            {
                title: 'Price Veille',
                desc: 'Pricing Tool - Price Analytic Solution for Businesses (B2B)',
                tech: 'PHP, Javascript (JQuery), DataTables',
                medias: [
                    {
                        link: 'https://cl.ly/1F3G0V2z0O3S',
                        src:
                            'https://d2ffutrenqvap3.cloudfront.net/items/3S1A3w423a2h0I173t3E/Image%202018-02-20%20at%2012.30.52%20PM.png'
                    },
                    {
                        link: 'https://cl.ly/1F3t1Z3h2q0q',
                        src:
                            'https://d2ffutrenqvap3.cloudfront.net/items/3y2S3h3K021p0Q0L0D1a/Image%202018-02-20%20at%2012.32.53%20PM.png'
                    },
                    {
                        link: 'https://cl.ly/2x3y1h1v0f0S',
                        src:
                            'https://d2ffutrenqvap3.cloudfront.net/items/2X1K1x1r0Y0r2a0c2p3D/Screen%20Recording%202018-02-20%20at%2012.27%20PM.gif'
                    }
                ]
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
                author: 'Code Academy',
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
                year: 'Nov. 2014 - Jan. 2018',
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
                    'Integration of the solution into an Avid environment (ISIS, Interplay AirSpeedâ€‹â€‹)'
                ]
            },
            {
                title: 'Web Developer / Integrator',
                companyName: 'Association CARMEN/Canal Nord',
                location: 'Amiens, France',
                year: 'Mar. - Jun. 2011 (Internship - 10 weeks)',
                desc: [
                    'Website rebuilding with Typo3',
                    'Tips for developing a video resources website',
                    'Web Consulting'
                ]
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
    },
    fr: {
        info: {
            firstname: 'Julie',
            lastname: 'Valet',
            title: "Développeur d'Application Web",
            location: 'Montreal, Canada',
            email: 'julie.valet@gmail.com',
            social: [
                { name: 'linkedin', link: 'https://www.linkedin.com/in/julie-valet-webdev/' },
                { name: 'github', link: 'https://github.com/julievalet' },
                { name: 'twitter', link: 'https://twitter.com/jvalet13' },
                { name: 'youtube', link: 'https://youtube.com/user/JulieTV13' },
                { name: 'instagram', link: 'https://instagram.com/_u/canyoutraveltheworld/' }
            ],
            available: 'Tout de suite',
            about:
                "Hello there, I'm Julie. I've been passionate about new technology since I can remember and started learning code in High School. I'm always up for a new challenge, that's why I moved to Canada a few months ago and I have been learning new stuff every day since I got here. For example, this little website you're currently on is built with ReactJS using ES6. I made it so I could apply my new skills on a concrete and useful project. If you'd like to know more about my journey in the coding world, email me or checkout the rest of the site. Thanks for stopping by and I look forward to hearing from you."
        },
        skills: {
            languages: [{ lang: 'Français', level: 'natif' }, { lang: 'Anglais', level: 'courant' }],
            dev: {
                FrontEnd: [
                    { name: 'ReactJS', level: [1, 1, 0, 0, 0], time: '< 6 months' },
                    { name: 'AngularJS', level: [1, 1, 1, 0, 0], time: '1+ years' },
                    { name: 'jQuery', level: [1, 1, 1, 1, 0], time: '3+ years' },
                    { name: 'Bootstrap', level: [1, 1, 1, 1, 0], time: '2+ years' },
                    { name: 'Material', level: [1, 1, 0, 0, 0], time: '< 1 year' }
                ],
                BackEnd: [
                    { name: 'NodeJS', level: [0, 0, 0, 0, 0], time: '< 6 months' },
                    { name: 'PHP', level: [1, 1, 1, 1, 1], time: '4+ years' },
                    { name: 'MySQL', level: [1, 1, 1, 1, 1], time: '4+ years' }
                ]
            },
            other: {
                Autres: ['JSON', 'Ajax', 'ChartJS', 'Google Charts', 'jQPlot', 'DataTable', 'Git', 'Gulp']
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
        portfolio: [
            {
                title: 'Social Scroller',
                desc: "Outil Marketing - Montre l'étendu de ce qu'il se dit sur une marque",
                tech: 'PHP, AngularJS, ChartJS, Bootstrap, Material',
                medias: [
                    {
                        link: 'https://cl.ly/1A3e1J431P0x',
                        src:
                            'https://d2ffutrenqvap3.cloudfront.net/items/2b3M3p3T2S3Z1E1f0L35/Screen%20Recording%202018-02-16%20at%2003.27%20PM.gif'
                    },
                    {
                        link: 'https://cl.ly/123d0C3X2K2v',
                        src:
                            'https://d2ffutrenqvap3.cloudfront.net/items/0G2C020W1P402d0w3L27/Screen%20Recording%202018-02-16%20at%2003.28%20PM.gif'
                    }
                ]
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
                author: 'Code Academy',
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
                year: 'Nov. 2014 - Jan. 2018',
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
                    'Integration of the solution into an Avid environment (ISIS, Interplay AirSpeedâ€‹â€‹)'
                ]
            },
            {
                title: 'Web Developer / Integrator',
                companyName: 'Association CARMEN/Canal Nord',
                location: 'Amiens, France',
                year: 'Mar. - Jun. 2011 (Internship - 10 weeks)',
                desc: [
                    'Website rebuilding with Typo3',
                    'Tips for developing a video resources website',
                    'Web Consulting'
                ]
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
    }
};

export default data;
