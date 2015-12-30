import Scanner from 'course-file-scanner';

/**
 * @param {Type}
 * @return {Type}
 */
export default function (filePath) {
  // Constructor
  let courseZip = new Scanner(filePath);
  let courseFiles = courseZip.getCourseFiles();
  let courseDatFiles = courseZip.getDatFiles();

  // API
  let unusedFileChecker = {
    scan: () => {
      let unusedFiles = courseFiles.filter(unusedFileChecker._isUnusedFile);

      // Return the final response
      return unusedFiles;
    },

    _isUnusedFile: (file) => {
      let usedInArray = courseDatFiles.filter((datFile) => {
        let fileContent = courseZip.getZipObject().readAsText(datFile);
        return (fileContent.indexOf(file.courseFileId + '_') !== -1);
      });

      // if (usedInArray.length > 0) console.log(file.courseFileId + ' found in ' + usedInArray.length + ' files.');

      return (usedInArray.length > 0);
    }

  };

  // Return API
  return unusedFileChecker;
}
