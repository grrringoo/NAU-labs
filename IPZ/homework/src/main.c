#include "string_case_transform.h"
#include <stdio.h>

void print_result(void (*transform)(char *), char *str) {
  transform(str);
  printf("%s\n", str);
}

int main() {
  char str[255] = "Hello World!";

  print_result(to_lowercase, str);
  print_result(to_titlecase, str);
  print_result(to_inverted_titlecase, str);

  return 0;
}
