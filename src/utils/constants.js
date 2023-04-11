const MASTERS_EE = {
  classValue: [
    {name: 'Kyaminipa', value: 'Kyaminipa'},

    {name: 'Early Preschool 1', value: 'Early Preschool 1'},

    {name: 'Early Preschool 2', value: 'Early Preschool 2'},
  ],

  planLibrary: [
    {name: 'Halle Berry - Activities', value: 'Halle Berry - Activities'},
  ],

  type: [
    {name: 'Enhancement', value: 'Enhancement'},

    {name: 'Focus', value: 'Focus'},

    {name: 'Small Group', value: 'ESmall Group'},
  ],

  scales: [
    {name: '3-5 years: LCG early Math', value: '3-5 years: LCG early Math'},

    {name: '3-5 years: LCG Language', value: '3-5 years: LCG Language'},

    {name: '3-5 years: LCG Literacy', value: '3-5 years: LCG Literacy'},
  ],

  goals: {
    '3-5 years: LCG early Math': [
      {
        name: 'Attempts to learn Objects',

        value: 'Attempts to learn Objects',
      },

      {
        name: 'Draws/Talks about aspects of Earth( eg soil, trees)',

        value: 'Draws/Talks about aspects of Earth( eg soil, trees) ',
      },

      {
        name: 'Talks about characteristics of living things ',

        value: 'Talks about characteristics of living things',
      },
    ],
    '3-5 years: LCG Language': [
      {
        name: 'Distinguishes plants from animals',

        value: 'Distinguishes plants from animals',
      },
    ],
  },
};

const TABLE_DATA = [
  {
    id: 1,
    class: 'Kyaminipa',
    planLibrary: 'Halle Berry - Activities',
    type: 'Enhancement',
    title: 'Drawing Trees',
    preparation: 'need brush and color',
    keyword: 'paint',
    notes: 'database',
    facilitating:
      'schools were located in the same campus to facilitate the sharing of resources',
    description: 'Drawing trees with crayons and filling colors',
    scale: '3-5 years: LCG early Math',
    goals: 'Attempts to learn Objects',
    attachment: 'file',
  },

  {
    id: 1,

    class: 'Early Preschool 1',

    planLibrary: 'Halle Berry - Activities',

    type: 'focus',

    title: 'drawing mountains',

    preparation: 'need colors',

    keyword: 'paint, mountain',

    notes: '50',

    facilitating:
      'schools were located in the same campus to facilitate the sharing of resources',

    description: 'Drawing trees with crayons and filling colors',

    scale: '3-5 years: LCG early Math',

    goals: 'Draws/Talks about aspects of Earth( eg soil, trees)',

    attachment: 'file',
  },

  {
    id: 1,

    class: 'Early Preschool 2',

    planLibrary: 'Halle Berry - Activities',

    type: 'Small Group',

    title: 'reading Alphabets',

    preparation: 'need brush and color',

    keyword: 'paint',

    notes: 'database',

    facilitating:
      'schools were located in the same campus to facilitate the sharing of resources',

    description: 'Drawing trees with crayons and filling colors',

    scale: '3-5 years: LCG Language',

    goals: undefined,

    attachment: 'file',
  },
];

const delay = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(true);
    }, 2000);
  });
};

const SELECTBOX_DEFAULT_LABEL = 'Please Select';

export {MASTERS_EE, SELECTBOX_DEFAULT_LABEL, delay, TABLE_DATA};
