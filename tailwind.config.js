/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.pinimg.com/236x/b0/93/f8/b093f89548d1d4280812659bdb4f93d2.jpg')",
        'footer-texture': "url('https://i.pinimg.com/originals/b3/78/7a/b3787acab53ff86528de9abd1f3c8d75.png')",
        'landing-pic':"url('data:image/jpeg;base64,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')",
        'signin-pic':"url('https://t4.ftcdn.net/jpg/05/79/27/95/360_F_579279584_2W3rZgfWOR5m1ihU8DgSEaZwKyyPsby2.jpg')",
        'signup-pic':"url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/421b1552957103.5925d9876ce46.jpg')",
        // 'bts-pic':"url('https://w0.peakpx.com/wallpaper/114/430/HD-wallpaper-whales-art-beautiful-killer-ocean-fantasy-earth-abstract-digital-whale-gif-whales-meer-deutschland-killer.jpg')",
        'home-pic':"url('')",
        'pic':"url('https://cdn.wallpapersafari.com/81/58/2T80PW.jpg')"
      },
      colors:{
        sandle:'#936853'
      }
    },
  
  },
  variants: {
    extend: {
      backgroundClip: ['text'],
    },
  },
  plugins: [],
}