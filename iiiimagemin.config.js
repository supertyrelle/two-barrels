module.exports = {
    "gifsicle": {
        "optimizationLevel": 1,
        "interlaced": true,
        "colors": 380
    },
    "mozjpeg": {
        "progressive": true,
        "quality": 80
    },
    "pngquant": {
        "quality": [0.8, 1]
    },
    "svgo": {
        "plugins": [{
                "removeViewBox": true
            },
            {
                "cleanupIDs": true
            },
        ]
    },
    "webp": {
        "quality": 80
    }
}