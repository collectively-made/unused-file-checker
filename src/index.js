import scanner from 'course-file-scanner';

/**
 * @param {Type}
 * @return {Type}
 */
export default function (filePath) {
  let courseFile = scanner(filePath);

  return {
    scan: () => {
      // Initialize response object
      let returnObject = {
        unusedFiles: [],
        errors: []
      };

      // Return the final response
      return returnObject;
    }
  };
}
