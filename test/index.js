import test from 'tape'
import unusedFileChecker from '../src'

test('One or more unused files are found.', (assert) => {
  assert.plan(1)

  let result = unusedFileChecker('test-course.zip').scan()

  result.then(unusedFiles => {
    let hasUnusedFiles = (Array.isArray(unusedFiles) && unusedFiles.length > 0)
    assert.equals(hasUnusedFiles, true, 'Should return an array with a length > 0.')
  })
})
