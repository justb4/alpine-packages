const os = require("os");
const exec = require("child_process").exec;
const lsbRelease = require("lsb-release");
const shell = require("shelljs");

function puts(error, stdout, stderr) {
  sys.puts(stdout);
}

switch (os.type()) {
  case "linux":
    lsbRelease(function(_, data) {
      if (data.distributorID == "Alpine") {
        var child = exec(
          "apk update && apk add packages/x86_64/gdal-2.1.3-r1.apk --allow-untrusted",
          { async: true }
        );

        child.stdout.on("data", function(data) {
          console.log(data);
        });
      } else {
        console.warn("Sorry, your Linux distribution is not supported.");
      }
    });

    break;

  case "Darwin":
    console.warn(
      "You should probably be using Docker, but if you must: please install ogr2ogr through brew using `brew tap osgeo/osgeo4mac` and `brew install gdal2 --with-libkml`"
    );

    break;
  case "Windows_NT":
    console.warn(
      "Sorry, Windows is not supported. Good luck! You should probably be using Docker anyway."
    );
  default:
    console.warn("Sorry, your operating system is not yet supported. You should probably be using Docker anyway.");
}

shell.exit();
