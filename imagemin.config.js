module.exports = {
    "gifsicle": {
        "optimizationLevel": 1,
        "interlaced": false,
        "colors": 400
    },
    "mozjpeg": {
        "progressive": true,
        "quality": 90
    },
    "pngquant": {
        "quality": [0.7, 1]
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
        "quality": 90
    }
}