import {
  Beautifier,
  Language,
  BeautifierBeautifyData,
  DependencyType,
} from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";

const { pkg } = readPkgUp.sync({ cwd: __dirname });
export const beautifier: Beautifier = {
  name: "{{ name }}",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.{{ type }},
      name: "{{ name }}",
      package: "{{ packageName }}", // remove this line if executable
      program: "{{ exeCommand }}", // remove this line if node
      parseVersion: [],
      homepageUrl: "{{ homepageUrl }}",
      installationUrl: "{{ installationUrl }}",
      bugsUrl: "{{ bugsUrl }}",
      badges: []
    },
  ],
  options: {
    
  },
  resolveConfig: () => {

  },
  beautify({
    text,
    options,
    filePath,
    projectPath,
    dependencies,
    beautifierConfig,
  }: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {

    });
  },
};
export default beautifier;
