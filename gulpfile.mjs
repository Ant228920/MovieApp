import gulp from 'gulp'
import browserSync from 'browser-sync'
import rename from 'gulp-rename'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

const sassToCSS = () => {
    return gulp.src('app/main.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/css'))
}

const server = () => {
    const browser = browserSync.create()
    browser.init({
        server: {
            baseDir: 'public',
            index: 'pages/home-page.html'
        }
    })
    browser.watch('public/**/*').on('change', browser.reload)
}

const watchFiles = () => {
    gulp.watch('app/**/*.sass', gulp.series(sassToCSS))
}

const build = gulp.parallel(watchFiles, server)

export {
    sassToCSS,
    server,
    build as default
}
