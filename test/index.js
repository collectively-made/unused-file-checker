import test from "tape"
import unusedFileChecker from "../src"

test("unusedFileChecker", (t) => {
  t.plan(1)
  t.equal(true, unusedFileChecker(), "return true")
})
