import { Express } from 'express';

import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

export class LoadingFile {
  handle(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);

    const parserFile = csvParse();

    stream.pipe(parserFile);

    parserFile.on('data', async (line) => {
    });
  }
}
