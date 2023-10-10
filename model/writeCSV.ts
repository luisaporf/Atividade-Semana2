import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from './data.interface'

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'title', title: 'TÍTULO' },
      { id: 'value', title: 'VALOR' },
    ],
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV;
