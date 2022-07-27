module.exports = {
    experimental: {
        forceSwcTransforms: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
                permanent: true,
            },
        ]
    },
}
