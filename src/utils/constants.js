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

  gaols: {
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
    '-5 years: LCG Language': [
      {
        name: 'Distinguishes plants from anilmals',

        value: 'Distinguishes plants from anilmals',
      },
    ],
  },
};

const TABLE_DATA = [
  {
    activity: 'Drawing Trees',
    activity_description: 'Drawing trees with crayons and filling colors',
  },
  {
    activity: 'identifying objects',
    activity_description: 'identifying objects',
  },
  {
    activity:
      'identifying objects long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data ',
    activity_description:
      'identifying objects long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data long data',
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
