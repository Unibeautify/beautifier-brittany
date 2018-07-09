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
  name: "{{ packageName }}",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.{{ type }},
      name: "{{ packageName }}",
      package: pkg,
      program: "{{ exeCommand }}",
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
