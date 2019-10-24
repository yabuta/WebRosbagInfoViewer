module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false,
            targets: {
              node: true
            }
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
      ]
    },
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              node: true
            }
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
      ]
    },
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              node: true
            }
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
      ]
    }
  }
};
