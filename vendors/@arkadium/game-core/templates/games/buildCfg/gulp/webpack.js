'use strict'

const rimraf = require('gulp-rimraf');
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const replace = require('gulp-replace');
const webpackStream = require('webpack-stream');
//const webpackConfig = require(process.cwd() + '/build_configurations/arena/webpack.config');
const jeditor = require("gulp-json-editor");
const jsonConcat = require('gulp-json-concat');
const tagVersion = require('gulp-tag-version');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const runSeq = require('run-sequence');
const gameversion = require(process.cwd() + '/gameversion.json');
let resizer = require('gulp-images-resizer');

gulp.task('image:resize', function(done) {

    gulp.task('image-clean', function () {
        return gulp.src('./resources/assets/images/1x/', {read: false})
            .pipe(rimraf({ force: false }))
            .on('error', gutil.log);
    });

    gulp.task('image-resize', ['image-clean'], function() {
        return gulp.src('resources/assets/images/2x/**/*.png')
            .pipe(resizer({
                format: "png",
                width: "50%"
            }))
            .pipe(gulp.dest('resources/assets/images/1x/'));
    });

    gulp.task('resize', ['image-clean','image-resize']);

    runSeq(
        'resize',
        done
    );
});

gulp.task('build:arena', function(done) {

    //arena-build

    gulp.task('arena-clean', function () {
        return gulp.src('./dist/arena/', {read: false})
            .pipe(rimraf({ force: false }))
            .on('error', gutil.log);
    });

    gulp.task('arena-imagemin', ['arena-build','arena-clean'], function () {
        return gulp.src(['resources/assets/images/2x/**/*.png'])
            .pipe(imagemin([imageminPngquant({quality: '80'})], {verbone: true}))
            .pipe(gulp.dest('dist/arena/build/resources/assets/images/2x'));
    });

    gulp.task('arena-resize', ['arena-build','arena-clean'], function() {
        return gulp.src('resources/assets/images/2x/**/*.png')
            .pipe(resizer({
                format: "png",
                width: "50%"
            }))
            .pipe(gulp.dest('dist/arena/build/resources/assets/images/1x/'));
    });

    gulp.task('arena-build', ['arena-clean'], function(callback) {
        return gulp.src('/src/index-arena-4.ts')
            .pipe(webpackStream(require(process.cwd() + '/build_configurations/arena/webpack.dist.config')))
            .pipe(gulp.dest('./dist/arena'));
    });

    //testrec-build

    gulp.task('testrec-build', ['arena-build'], function(callback) {
        return gulp.src('src/index-arena-4.ts')
            .pipe(webpackStream(require(process.cwd() + '/build_configurations/arena/webpack.testrec.config')))
            .pipe(gulp.dest('./dist/arena/testrec/'+gameversion.version));
    });

    gulp.task('testrec-imagemin', ['arena-build','arena-clean'], function () {
        return gulp.src(['resources/assets/images/2x/**/*.png'])
            .pipe(imagemin([imageminPngquant({quality: '80'})], {verbone: true}))
            .pipe(gulp.dest('dist/arena/testrec/'+gameversion.version+'/build/resources/assets/images/2x'));
    });

    gulp.task('testrec-resize', ['arena-build','arena-clean'], function() {
        return gulp.src('resources/assets/images/2x/**/*.png')
            .pipe(resizer({
                format: "png",
                width: "50%"
            }))
            .pipe(gulp.dest('dist/arena/testrec/'+gameversion.version+'/build/resources/assets/images/1x'));
    });

    //build

    gulp.task('build', ['arena-clean','arena-build', 'arena-imagemin'/*, 'arena-resize', 'testrec-build', 'testrec-imagemin', 'testrec-resize'*/]);

    // gulp.task('arena-replace', ['arena-arena'], function () {
    //     return gulp.src(['./dist/arena/' + gamecfg.main])
    //
    //         // .pipe(replace("PIXI", 'PIXI_POOL_8_BALL'))
    //         // .pipe(replace("ARK_game_arena_connector", 'ARK_game_arena_connector_A5_ROLL_PIXI'))
    //         // .pipe(replace("ArenaXApi", 'ArenaXApi_A5_ROLL_PIXI'))
    //
    //         .pipe(gulp.dest('./dist/build/build'));
    // });

    runSeq(
        'build',
        done
    );
});

gulp.task('build:phoenix', function(done) {

    gulp.task('phoenix-clean', function () {
        return gulp.src('./dist/phoenix/', {read: false})
            .pipe(rimraf({ force: false }))
            .on('error', gutil.log);
    });

    gulp.task('phoenix-imagemin', ['phoenix-build'], function () {
        return gulp.src('resources/assets/images/2x/**/*.png')
            .pipe(imagemin([imageminPngquant({quality: '80'})], {verbone: true}))
            .pipe(gulp.dest('dist/phoenix/build/resources/assets/images/2x'));
    });

    gulp.task('phoenix-build', ['phoenix-clean'], function(callback) {
        return gulp.src('./src/index-arena-5.ts')
            .pipe(webpackStream(require(process.cwd() + '/build_configurations/phoenix/webpack.phoenix.dist.config')))
            .pipe(gulp.dest('./dist/phoenix/'));
    });

    gulp.task('build', ['phoenix-clean','phoenix-build', 'phoenix-imagemin']);

    // gulp.task('arena-replace', ['arena-arena'], function () {
    //     return gulp.src(['./dist/arena/' + gamecfg.main])
    //
    //         // .pipe(replace("PIXI", 'PIXI_POOL_8_BALL'))
    //         // .pipe(replace("ARK_game_arena_connector", 'ARK_game_arena_connector_A5_ROLL_PIXI'))
    //         // .pipe(replace("ArenaXApi", 'ArenaXApi_A5_ROLL_PIXI'))
    //
    //         .pipe(gulp.dest('./dist/build/build'));
    // });

    runSeq(
        'build',
        done
    );
});

gulp.task('version:patch', function(done) {

    gulp.task('_version_date', function(callback) {
        return gulp.src("./gameversion.json")
            .pipe(jeditor(function(json) {
                var date = new Date();
                json.date = date.toString();
                return json;
            }))
            .pipe(gulp.dest("./"));
    });

    const git = require('gulp-git'),
        bump = require('gulp-bump'),
        filter = require('gulp-filter');
    /**
     * Bumping version number and tagging the repository with it.
     * Please read http://semver.org/
     *
     * You can use the commands
     *
     *     gulp patch     # makes v0.1.0 → v0.1.1
     *     gulp feature   # makes v0.1.1 → v0.2.0
     *     gulp release   # makes v0.2.1 → v1.0.0
     *
     * To bump the version numbers accordingly after you did a patch,
     * introduced a feature or made a backwards-incompatible release.
     */

    function inc(importance) {
        // get all the files to bump version in
        return gulp.src(['./gameversion.json'])
        // bump the version number in those files
            .pipe(bump({type: importance}))
            // save it back to filesystem
            .pipe(gulp.dest('./'))
            // commit the changed version number
            .pipe(git.commit('bumps package version'))
            // read only one file to get the version number
            .pipe(filter('gameversion.json'))
            // **tag it in the repository**
            .pipe(tagVersion());
    }

    gulp.task('_version_patch', ['_version_date'], function() { return inc('patch'); });
    //gulp.task('version_feature', function() { return inc('minor'); });
    //gulp.task('version_release', function() { return inc('major'); });

    gulp.task('version-update', ['_version_date', '_version_patch']);

    runSeq(
        'version-update',
        done
    );
});




