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
  // Layout
  Navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '118px',
    padding: '60px',

    backgroundColor: '#102a33',
  },
  NavbarTitle: {},
  NavbarTitleImage: { width: '101px', height: '65px' },
  NavbarMenu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  NavbarMenuItem: {
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

  Footer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '148px',
    padding: '60px',

    backgroundColor: '#102a33',
  },

  // Pages
  HomeHero: {},
  HomeDescription: {},
  HomeFeatures: {},
};
