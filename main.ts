console.log("Hello");

import fs from "fs";

const folderNames = [
  "Accessibility",
  "Alert",
  "Alphabet",
  "Animals",
  "Arrows",
  "Astronomy",
  "Automotive",
  "Buildings",
  "Business",
  "Camping",
  "Charity",
  "Charts + Diagrams",
  "Childhood",
  "Clothing + Fashion",
  "Coding",
  "Communication",
  "Connectivity",
  "Construction",
  "Design",
  "Devices + Hardware",
  "Disaster + Crisis",
  "Editing",
  "Emoji",
  "Education",
  "Energy",
  "Files",
  "Film + Video",
  "Food + Beverage",
  "Fruits + Vegetables",
  "Gaming",
  "Genders",
  "Halloween",
  "Hands",
  "Holidays",
  "Household",
  "Humanitarian",
  "Logistics",
  "Maps",
  "Maritime",
  "Marketing",
  "Mathematics",
  "Media Playback",
  "Medical + Health",
  "Money",
  "Moving",
  "Music + Audio",
  "Nature",
  "Numbers",
  "Photos + Images",
  "Political",
  "Punctuation + Symbols",
  "Religion",
  "Science",
  "Science Fiction",
  "Security",
  "Shapes",
  "Shopping",
  "Social",
  "Spinners",
  "Sports + Fitness",
  "Text Formatting",
  "Time",
  "Toggle",
  "Transportation",
  "Travel + Hotel",
  "Users + People",
  "Weather",
  "Writing",
];

function createFolders() {
  for (let index = 0; index < folderNames.length; index++) {
    const folderPath = "./icons/" + folderNames[index];
    fs.mkdirSync(folderPath);

    // create sub folders
    fs.mkdirSync(folderPath + "/solid");
    fs.mkdirSync(folderPath + "/stroke");
  }
}

// createFolders();



function generateFileNames(path: string){

  console.log('generating...')
  const dir = fs.readdirSync(path)
  const json = JSON.stringify(dir)
  // saving
  fs.writeFileSync('./temp/names.json', json)

  console.log('done')
}

// generateFileNames('./temp/icons')



function addPrefix(path: string, prefix: string) {
  let files = fs.readdirSync(path);
  console.log(files)
  files.forEach((file) => {
    const newFile = prefix+file
    const oldPath = path+'/'+file
    const newPath = path+'/'+newFile
    fs.renameSync(oldPath, newPath)
  });
}

addPrefix("sayam/ionicons","ionicon-")