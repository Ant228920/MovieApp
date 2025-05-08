import gulp from 'gulp'
import browserSync from 'browser-sync'
import rename from 'gulp-rename'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import open from 'gulp-open'

const sass = gulpSass(dartSass)

const sassToCSS = () => {
    return gulp.src('app/main.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/css'))
}

const openPages = () => {
    const pages = [
        'public/pages/home-page.html',
        'public/pages/movies-open-page.html',
        'public/pages/movies-shows-page.html',
        'public/pages/shows-open-page.html',
        'public/pages/subscription-page.html',
        'public/pages/support-page.html'
    ];

    return gulp.src(pages)
        .pipe(open({ uri: '', app: 'chrome' }));
};

const server = () => {
    const browser = browserSync.create();
    browser.init({
        server: {
            baseDir: 'public',
            index: 'pages/home-page.html',
        },
        open: false // Вимкнути автоматичне відкриття браузера
    });

    browser.watch('public/**/*').on('change', browser.reload);
};

const watchFiles = () => {
    gulp.watch('app/**/*.scss', gulp.series(sassToCSS))
}

const build = gulp.series(
    sassToCSS,
    gulp.parallel(watchFiles, server, openPages)
);

export {
    sassToCSS,
    server,
    build as default
}
