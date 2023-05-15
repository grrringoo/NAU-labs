#include "../munit/munit.h"
#include "../src/string_case_transform.h"
#include <stdio.h>

MunitResult test_to_uppercase(const MunitParameter params[], void *fixture) {
  char basic[] = "Hello World";
  char advanced[] = "";
  
  to_uppercase(basic);
  munit_assert_string_equal(basic, "HELLO WORLD");

  to_uppercase(advanced);
  munit_assert_string_equal(advanced, "");

  return MUNIT_OK;
}

MunitResult test_to_lowercase(const MunitParameter params[], void *fixture) {
  char basic[] = "Hello World";
  char advanced[] = "";
  
  to_lowercase(basic);
  munit_assert_string_equal(basic, "hello world");

  to_lowercase(advanced);
  munit_assert_string_equal(advanced, "");

  return MUNIT_OK;
}

MunitResult test_to_titlecase(const MunitParameter params[], void *fixture) {
  char basic[] = "hello world";
  char advanced[] = "";

  to_titlecase(basic);
  munit_assert_string_equal(basic, "Hello World");

  to_titlecase(advanced);
  munit_assert_string_equal(advanced, "");

  return MUNIT_OK;
}

MunitResult test_to_inverted_titlecase(const MunitParameter params[],
                                       void *fixture) {
  char basic[] = "hello world";
  char advanced[] = "";

  to_inverted_titlecase(basic);
  munit_assert_string_equal(basic, "hELLO wORLD");

  to_inverted_titlecase(advanced);
  munit_assert_string_equal(advanced, "");

  return MUNIT_OK;
}

MunitTest string_case_transform_tests[] = {
    {"/to_uppercase", test_to_uppercase, NULL, NULL, MUNIT_TEST_OPTION_NONE,
     NULL},
    {"/to_lowercase", test_to_lowercase, NULL, NULL, MUNIT_TEST_OPTION_NONE,
     NULL},
    {"/to_titlecase", test_to_titlecase, NULL, NULL, MUNIT_TEST_OPTION_NONE,
     NULL},
    {"/to_inverted_titlecase", test_to_inverted_titlecase, NULL, NULL,
     MUNIT_TEST_OPTION_NONE, NULL},
};

MunitSuite string_case_transform_suite = {"/string_case_transform",
                                          string_case_transform_tests, NULL, 1,
                                          MUNIT_SUITE_OPTION_NONE};

int main(int argc,  char **argv) {
  return munit_suite_main(&string_case_transform_suite, NULL, argc, argv);
}
