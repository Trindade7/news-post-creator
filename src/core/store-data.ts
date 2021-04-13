import { readFile, writeFile, PathLike } from 'fs';

export async function saveToJsonFile(data: string, path: PathLike) {
  writeFile(path, data, (err) => {
    console.log(err);
    return err;
  });
}

export function getJsonFileData(path: PathLike): string {
  let jsonData = '';
  readFile(path, { encoding: 'utf8', flag: 'r+' }, (err, data) => {
    if (err) throw err;
    jsonData = data.toString();
  });

  return jsonData;
}