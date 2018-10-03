import {
  Beautifier,
  BeautifierBeautifyData,
  DependencyType,
  ExecutableDependency,
} from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";

const { pkg } = readPkgUp.sync({ cwd: __dirname });
export const beautifier: Beautifier = {
  name: "Brittany",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.Executable,
      name: "Brittany",
      program: "brittany",
      // parseVersion: [],
      homepageUrl: "https://github.com/lspitzner/brittany",
      installationUrl: "https://github.com/lspitzner/brittany#installation",
      bugsUrl: "https://github.com/lspitzner/brittany/issues",
      badges: [],
    },
  ],
  options: {
    Haskell: {},
  },
  beautify({
    text,
    options,
    filePath,
    projectPath,
    dependencies,
    beautifierConfig,
  }: BeautifierBeautifyData) {
    const brittany = dependencies.get<ExecutableDependency>("Brittany");
    return brittany
      .run({ args: [], stdin: text, options: {} })
      .then(({ exitCode, stderr, stdout }) => {
        if (exitCode) {
          return Promise.reject(stderr);
        }
        return Promise.resolve(stdout);
      });
  },
};
export default beautifier;
