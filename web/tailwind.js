module.exports = {
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "100%",
         xl: "1600px"
      }
    },
    minWidth: {
      '0': '0',
      '200': '200pt',
      'full': '100%',
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  corePlugins: {},
  plugins: [],
}
