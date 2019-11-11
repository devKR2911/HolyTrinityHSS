export default {
    name: "Courses",
    components: {},
    data() {
        return {
            courseList: [{
                    id: 0,
                    name: 'Arts Lesson',
                    classTime: '9:00am - 10am',
                    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
                    image: 'course-1.jpg'
                },
                {
                    id: 1,
                    name: 'Language Lesson',
                    classTime: '9:00am - 10am',
                    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
                    image: 'course-2.jpg'
                },
                {
                    id: 2,
                    name: 'Music Lesson',
                    classTime: '9:00am - 10am',
                    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
                    image: 'course-3.jpg'
                },
                {
                    id: 3,
                    name: 'Sports Lesson',
                    classTime: '9:00am - 10am',
                    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
                    image: 'course-4.jpg'
                },
                {
                    id: 4,
                    name: 'Study Lesson',
                    classTime: '9:00am - 10am',
                    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
                    image: 'course-5.jpg'
                },
                {
                    id: 5,
                    name: 'Experiment Lesson',
                    classTime: '9:00am - 10am',
                    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
                    image: 'course-6.jpg'
                },
            ]
        }
    },
    methods: {
        getImageSrc(obj) {
            return require('@assets/images/courses/' + obj.image);
        }
    }
};