import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from './data.interface'

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'peso', title: 'PESO' },
      { id: 'valor', title: 'VALOR' },
      { id: 'quantidade', title: 'QUANTIDADE' },
    ],
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV;
