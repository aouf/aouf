export const GlobalSettings = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    // Set fontSize in % for rem sizing
  },
};

export const Theme = {
  NavBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '118px',
    padding: '60px',

    backgroundColor: '#102a33',
  },
  NavBarTitle: {},
  NavBarTitleImage: { width: '101px', height: '65px' },
  NavBarMenu: {
    display: 'flex',
    justifyContent: 'space-between',

    li: {
      margin: '35px',
      '&:first-child': {
        margin: '35px 35px 35px 0',
      },
      '&:last-child': {
        margin: '35px 0 35px 35px',
      },
      listStyleType: 'none',
      a: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: 600,
        color: '#fd7b66',
        textDecoration: 'none',
        textTransform: 'uppercase',
      },
    },
  },
};
