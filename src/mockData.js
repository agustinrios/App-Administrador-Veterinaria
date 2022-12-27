const mockData = {
  lists: {
    '01list': {
      id: '01List',
      title: 'To Do',
      cards: [
        {
          id: '01Card',
          title: 'comprar'
        },
        {
          id: '02Card',
          title: 'estudiar'
        },
        {
          id: '03Card',
          title: 'dormir'
        },
      ],
    },
    '02list': {
      id: '02List',
      title: 'In Progress',
      cards: [],
    }
  },
  listIds: ['01list', '02list'],
}

export default mockData
