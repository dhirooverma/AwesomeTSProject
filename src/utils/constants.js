const MASTERS_EE = {
  classValue: [
    {name: 'Kyaminipa', value: 'Kyaminipa', key: '1'},

    {name: 'Early Preschool 1', value: 'Early Preschool 1', key: '2'},

    {name: 'Early Preschool 2', value: 'Early Preschool 2', key: '3'},
  ],

  planLibrary: [
    {
      name: 'Halle Berry - Activities',
      value: 'Halle Berry - Activities',
      key: '1',
    },
  ],

  type: [
    {name: 'Enhancement', value: 'Enhancement', key: '1'},

    {name: 'Focus', value: 'Focus', key: '2'},

    {name: 'Small Group', value: 'ESmall Group', key: '3'},
  ],

  scales: [
    {
      name: '3-5 years: LCG early Math',
      value: '3-5 years: LCG early Math',
      key: '1',
    },

    {
      name: '3-5 years: LCG Language',
      value: '3-5 years: LCG Language',
      key: '2',
    },

    {
      name: '3-5 years: LCG Literacy',
      value: '3-5 years: LCG Literacy',
      key: '3',
    },
  ],

  goals: {
    1: [
      {
        name: 'Attempts to learn Objects',

        value: 'Attempts to learn Objects',
        key: '1',
      },

      {
        name: 'Draws/Talks about aspects of Earth( eg soil, trees)',

        value: 'Draws/Talks about aspects of Earth( eg soil, trees) ',
        key: '2',
      },

      {
        name: 'Talks about characteristics of living things ',

        value: 'Talks about characteristics of living things',
        key: '3',
      },
    ],
    2: [
      {
        name: 'Distinguishes plants from animals',

        value: 'Distinguishes plants from animals',
        key: '1',
      },
      {
        name: 'Disting5555555555555555555555555555uishes plants from animals',

        value: 'Distin55555555555555555555555555555guishes plants from animals',
        key: '2',
      },
    ],
  },
};

const TABLE_DATA = [
  {
    id: 1,

    class: '1',

    planLibrary: '1',

    type: '1',

    title: 'Drawing Trees',

    preparation: 'need brush and color',

    keyword: 'paint',

    notes: 'database',

    facilitating:
      'schools were located in the same campus to facilitate the sharing of resources',

    description: 'Drawing trees with crayons and filling colors',

    scale: '1',

    goals: ['1', '2'],

    attachment: 'file',
  },

  {
    id: 2,

    class: '2',

    planLibrary: '1',

    type: '2',

    title: 'drawing mountains',

    preparation: 'need colors',

    keyword: 'paint, mountain',

    notes: '50',

    facilitating:
      'schools were located in the same campus to facilitate the sharing of resources',

    description: 'Drawing trees with crayons and filling colors',

    scale: '1',

    goals: ['1'],

    attachment: 'file',
  },

  {
    id: 3,

    class: '2',

    planLibrary: '1',

    type: 'Small Group',

    title: 'reading Alphabets',

    preparation: 'need brush and color',

    keyword: 'paint',

    notes: 'database',

    facilitating:
      'schools were located in the same campus to facilitate the sharing of resources',

    description: 'Drawing trees with crayons and filling colors',

    scale: '2',

    goals: ['1'],

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
