#include <string.h>

void to_uppercase(char *str) {
  char temp[255];
  for (int i = 0; i < strlen(str); i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      str[i] -= 32;
    }
  }
}

void to_lowercase(char *str) {
  for (int i = 0; i < strlen(str); i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      str[i] += 32;
    }
  }
}

void to_titlecase(char *str) {
  for (int i = 0; i < strlen(str); i++) {
    if (str[i] >= 'a' && str[i] <= 'z' && (i == 0 || str[i - 1] == ' ')) {
      str[i] -= 32;
    }
  }
}

void to_inverted_titlecase(char *str) {
  to_uppercase(str);

  for (int i = 0; i < strlen(str); i++) {
    if (str[i] >= 'A' && str[i] <= 'Z' && (i == 0 || str[i - 1] == ' ')) {
      str[i] += 32;
    }
  }
}
