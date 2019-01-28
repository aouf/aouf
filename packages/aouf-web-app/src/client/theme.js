export const GlobalSettings = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    // Set fontSize in % for rem sizing
    fontFamily: 'Montserrat, sans-serif',
  },
};

export const Theme = {
  /* LAYOUT */
  Navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '118px',
    padding: '60px',

    backgroundColor: '#102a33',
  },
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

  /* PAGES */
  // Home
  HomeHero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  HomeHeroTitle: {
    fontSize: '56.5px',
    fontWeight: 800,
    color: '#fd7b66',
    textTransform: 'uppercase',
  },
  HomeHeroTitleSpan: {
    color: '#102a33',
  },
  HomeHeroButton: {
    display: 'inline-block',
    margin: '18px 0 0 0',
    padding: '12px 20px',

    color: '#fff',
    fontWeight: 800,
    textDecoration: 'none',
    backgroundColor: '#102a33',
    borderRadius: '24px',
  },

  HomeDescription: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px',

    color: '#fff',
    backgroundColor: '#102a33',
  },
  HomeFeatures: {},
};