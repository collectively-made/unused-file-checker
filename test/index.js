import test from 'tape';
import unusedFileChecker from '../src';

test('One or more unused files are found', (t) => {
  t.plan(1);

  let result = unusedFileChecker('test-course.zip').scan();
  t.equals((result.hasOwnProperty('unusedFiles') && result.unusedFiles.length > 0), true, 'Should return object with "unusedFiles" array with a length > 0.');
});
