var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readFile, writeFile } from 'fs';
export function saveToJsonFile(data, path) {
    return __awaiter(this, void 0, void 0, function* () {
        writeFile(path, data, (err) => {
            console.log(err);
            return err;
        });
    });
}
export function getJsonFileData(path) {
    let jsonData = '';
    readFile(path, { encoding: 'utf8', flag: 'r+' }, (err, data) => {
        if (err)
            throw err;
        jsonData = data.toString();
    });
    return jsonData;
}
