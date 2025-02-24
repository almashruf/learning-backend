FileSystem.appendFile("hey.text", "hello how are you", function (err) {
  if (err) console.error(err);
  else console.log("done");
});
