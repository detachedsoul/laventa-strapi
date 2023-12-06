module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    proxy: env.bool('IS_PROXIED', true),
    url: env('PUBLIC_URL', 'https://laventa-strapi-z4xb.onrender.com'),
    app: {
        keys: env.array('APP_KEYS'),
    },
});
