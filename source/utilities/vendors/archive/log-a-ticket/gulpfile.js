var sass = require('gulp-sass')(require('sass'));
const gsmaps = require('gulp-sourcemaps');
const gts = require('gulp-typescript');
var npmDist = require('gulp-npm-dist');
const gulpsass = require('gulp-sass');
const rename = require('gulp-rename');
const gulp = require('gulp');

const distFolderName = 'dist/';
const distFolder = gulp.dest(distFolderName);

exports.copyTS = function (callback) {
  const typesRoot = gulp.dest('types/');

  const tsResult = () => {
    const tsPrj = gts.createProject('tsconfig.json');
    const tsSourceCode = tsPrj.src();
    const mapsInit = gsmaps.init();
    const IdentityMap = gsmaps.identityMap();
    return tsSourceCode.pipe(mapsInit).pipe(IdentityMap).pipe(tsPrj());
  };
  const srcUrlMapper = (file) => {
    let x = distFolderName + file.relative.toString().split('\\').join('/') + '.map';
    console.log('RootForSourceMaps: ' + x);
    return x;
  };

  let tsR = tsResult();

  tsR.dts.pipe(typesRoot).on('error', function (err) {
    console.log('Gulp says: ' + err.message);
  });

  tsR.js
    .pipe(
      gsmaps.write('./', {
        includeContent: false,
        addComment: true, //This "Comment" is the "COMMENT" that the browser uses to reference the file.
        sourceMappingURL: srcUrlMapper,
        sourceRoot: '../src',
      })
    )
    .pipe(distFolder);

  callback();
};
exports.copySCSS = function (callback) {
  gulp
    .src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(
      rename(function (path) {
        path.dirname = '/css/' + path.dirname;
      })
    )
    .pipe(distFolder);
  callback();
};
exports.copyHTML = function (callback) {
  const distHtml = gulp.dest(distFolderName + 'html/');
  let Source = 'src/html';

  gulp.src(Source + '/**/*.html').pipe(distHtml);
  callback();
};
exports.copyProjects = function (callback) {
  const distProjects = gulp.dest(distFolderName + 'projects/');
  const srcProjects = 'src/projects';

  gulp.src(srcProjects + '/**/*').pipe(distProjects);
  callback();
};

/*-----------------------------------*/
/*
exports.copyTS = function (callback) {
  const typesRoot = gulp.dest('types/');

  const tsResult = () => {
    const tsPrj = gts.createProject('tsconfig.json');
    const tsSourceCode = tsPrj.src();
    const mapsInit = gsmaps.init();
    const IdentityMap = gsmaps.identityMap();
    return tsSourceCode.pipe(mapsInit).pipe(IdentityMap).pipe(tsPrj());
  };
  const srcUrlMapper = (file) => {
    let x = distFolderName + file.relative.toString().split('\\').join('/') + '.map';
    console.log('RootForSourceMaps: ' + x);
    return x;
  };

  let tsR = tsResult();

  tsR.dts.pipe(typesRoot).on('error', function (err) {
    console.log('Gulp says: ' + err.message);
  });

  tsR.js
    .pipe(
      gsmaps.write('./', {
        includeContent: false,
        addComment: true, //This "Comment" is the "COMMENT" that the browser uses to reference the file.
        sourceMappingURL: srcUrlMapper,
        sourceRoot: '../src',
      })
    )
    .pipe(distFolder);

  callback();
};
*/
/*-----------------------------------*/
