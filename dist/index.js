'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (filePath) {
  // Constructor
  var courseZip = new _courseFileScanner2.default(filePath);
  var courseFiles = courseZip.getCourseFiles();
  var courseDatFiles = courseZip.getDatFiles();

  // API
  var unusedFileChecker = {
    scan: function scan() {
      // Return the final response
      return new Promise(function (resolve, reject) {
        var unusedFiles = courseFiles.filter(unusedFileChecker._isUnusedFile);
        resolve(unusedFiles);
      });
    },

    _isUnusedFile: function _isUnusedFile(file) {
      var usedInArray = courseDatFiles.filter(function (datFile) {
        var fileContent = courseZip.getZipObject().readAsText(datFile);
        return fileContent.indexOf(file.courseFileId + '_') !== -1;
      });

      return usedInArray.length < 1;
    }

  };

  // Return API
  return unusedFileChecker;
};

var _courseFileScanner = require('course-file-scanner');

var _courseFileScanner2 = _interopRequireDefault(_courseFileScanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }