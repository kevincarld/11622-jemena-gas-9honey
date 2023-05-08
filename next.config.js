/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'https://brandedcontent.nine.com.au/jemena/make-dream-home-dreamier', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'Jemena', // e.g Black Hawk
      title: 'Make your dream home even dreamier', // e.g Being a good pet parent starts at mealtime
      description: 'Home is where the heart is, sure. But when we think about the beating heart of a home, we often overlook the elements that make it operate at its dreamiest.',
      siteName: '9Honey', // The Sydney Morning Herald, Good Food
      icon: 'honey', // smh, goodfood, nine, afr, traveller, brisbanetimes, honey
      themeColour: '#26BCD7', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/05/11622_Jemena_Social.png',
      date: '08-05-23', // e.g 03-12-23
      year: '2023' // e.g 2023
    },
    jobCode: '11622-jemena-gas', // used for nine ga scripts
    guidelines: false, // shows or hides layout guideline bars
    activateMasthead: false, // shows or hides masthead
    mastheadOverride: 'honey', // overrides masthead that's pulling from hostname: e.g honey,style,travel,kitchen,you,parenting,coach,pets,celebrity
  }
}

module.exports = nextConfig