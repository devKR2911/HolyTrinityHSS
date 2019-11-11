export default {
    name: 'Teachers',
    data() {
        return {
            staffGroupObj: {
                image: 'Staff-Group.jpg',
            },
            facultiesListOne: [{
                    id: 0,
                    name: 'Mrs. RUBY MATHAI',
                    designation: 'Principal (M.Sc, B.Ed)',
                    image: 'RubyMathai.jpg',
                },
                {
                    id: 1,
                    name: 'Mrs. CHITHRALEKHA K.S',
                    designation: 'Director (M.Sc, B.Ed)',
                    image: 'ChithraLekha.jpg',
                },
            ],

            facultiesListTwo: [{
                    id: 0,
                    name: 'Mrs. ANNAMMA GEORGE',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'AnnammaGeorge.jpg',
                },
                {
                    id: 1,
                    name: 'Mrs. ARYA M.S',
                    designation: 'Teacher (M.Sc, B.Ed)',
                    image: 'AryaMS.jpg',
                },
                {
                    id: 2,
                    name: 'Mrs. DEEPA S.S',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'Deepa.jpg',
                },
                {
                    id: 3,
                    name: 'Mrs. JYOTHI THOMAS',
                    designation: 'Teacher (M.Tech)',
                    image: 'Jyothi.jpg',
                },
                {
                    id: 4,
                    name: 'Mrs. LALU ALEX',
                    designation: 'Teacher (B.Sc, B.Ed)',
                    image: 'LaluAlex.jpg',
                },
                {
                    id: 5,
                    name: 'Mrs. LEKSHMI I',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'Lekshmi.jpg',
                },
                {
                    id: 6,
                    name: 'Mrs. MANJU I.T',
                    designation: 'Teacher (B.Sc, B.Ed)',
                    image: 'Manju.jpg',
                },
                {
                    id: 7,
                    name: 'Mrs. PRAMEELA DEVI',
                    designation: 'Teacher (M.A, NTTC)',
                    image: 'Prameela.jpg',
                },
                {
                    id: 8,
                    name: 'Mrs. PRITTY MOL PIOUS',
                    designation: 'Teacher (B.A, B.Ed)',
                    image: 'Pritty.jpg',
                },
                {
                    id: 9,
                    name: 'Mrs. RASHMI R.P',
                    designation: 'Teacher (M.Sc, M.Ed)',
                    image: 'Rashmi.jpg',
                },
                {
                    id: 10,
                    name: 'Mrs. REKHA G',
                    designation: 'Teacher (M.Sc, B.Ed)',
                    image: 'Rekha.jpg',
                },
                {
                    id: 11,
                    name: 'Mrs. REMYA A.R',
                    designation: 'Teacher (B.Sc, B.Ed)',
                    image: 'Remya.jpg',
                },
                {
                    id: 12,
                    name: 'Mrs. RESHMI RATHEESH',
                    designation: 'Teacher (B.E)',
                    image: 'ReshmiRatheesh.jpg',
                },
                {
                    id: 13,
                    name: 'Mrs. SAVITHA K.S',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'Savitha.jpg',
                },
                {
                    id: 14,
                    name: 'Mrs. SOORYA V.P',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'Soorya.jpg',
                },
                {
                    id: 15,
                    name: 'Mrs. Dr. SOUJI S',
                    designation: 'Teacher (M.Sc, PhD)',
                    image: 'Souji.png',
                },
                {
                    id: 16,
                    name: 'Mrs. SOVI T.K',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'Sovi.png',
                },
                {
                    id: 17,
                    name: 'Mrs. SREEJA J.S',
                    designation: 'Teacher (PP, TTC)',
                    image: 'Sreeja.jpg',
                },
                {
                    id: 18,
                    name: 'Mrs. SUKHI V.K',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'Sukhi.jpg',
                },
                {
                    id: 19,
                    name: 'Mr. VIJU S NAIR',
                    designation: 'Teacher (M.A, B.Ed)',
                    image: 'VijuS.jpg',
                },

            ]
        };
    },
    methods: {
        getImageSrc(staff) {
            return require('@assets/images/teachers/' + staff.image);
        }
    },
    watch: {},
};