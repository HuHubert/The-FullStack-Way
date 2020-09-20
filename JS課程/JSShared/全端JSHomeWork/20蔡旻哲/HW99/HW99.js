document.write('<ul class="tb">');
for (i = 1; i < 10; i++) {
  for (j = 1; j < 10; j++) {
    document.write('<li class="eleli">' + i + "*" + j + "=" + i * j + '</li>');
  }
}
document.write('<ul/>');