module.exports = {
    plugins: {
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-simple-vars': {},
        'postcss-import': {
            path: ["assets/css"]
        },
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
    },
};
