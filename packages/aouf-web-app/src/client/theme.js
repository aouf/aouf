import bkg from './assets/accueil-aouf-app.png';

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
  p: {
    margin: '16px 0',
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

  /* GENERIC CONTAINER */
  Container: {
    margin: '0 auto',
    maxWidth: '960px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* PAGES */
  // Home
  // - Hero section
  HomeHero: {
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

  // - Description section
  HomeDescription: {
    padding: '100px',

    color: '#fff',
    backgroundColor: '#102a33',
  },
  HomeDescriptionText: {
    maxWidth: '50%',
  },
  HomeDescriptionLogo: {
    width: '50%',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'center',
  },

  // - Features section
  HomeFeatures: {
    padding: '40px',

    position: 'relative',
    width: '100%',
    height: '100%',

    // White background for smartphone picture
    '&::before': {
      content: '""',
      display: 'block',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '1',
      backgroundColor: '#fd7b66',
      clipPath:
        'polygon(0 80%, 40% 110%, 50% 0, 100% 0, 100% 100%, 40% 110%, 0 100%)',
    },
    '& > *': {
      position: 'relative',
      zIndex: '1',
    },
  },
  HomeFeaturesScreen: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  HomeFeaturesIcons: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
};
