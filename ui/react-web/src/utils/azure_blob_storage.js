import { BlobServiceClient } from '@azure/storage-blob';

const account = "shurra";
const sas = "?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-05-01T19:40:14Z&st=2021-05-01T11:40:14Z&spr=https,http&sig=7NvYuaz0%2FS7P7KXmf6VqD%2BF2BytLxtUgKzpkbeYt9m8%3D";

const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);

export const uploadFile = (folder, file, fileName) => {
  const containerClient = blobServiceClient.getContainerClient(folder);
  const blockBlobClient = containerClient.getBlockBlobClient(fileName || new Date());
  return blockBlobClient.upload(file, file.size);
}

export const readFile = async (folder, fileName) => {
  const containerClient = blobServiceClient.getContainerClient(folder);
  const blobClient = containerClient.getBlobClient(fileName);

  // Get blob content from position 0 to the end
  // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
  const downloadBlockBlobResponse = await blobClient.download();
  await blobToString(await downloadBlockBlobResponse.blobBody);

  // [Browsers only] A helper method used to convert a browser Blob into string.
  async function blobToString(blob) {
    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
      fileReader.onloadend = (ev) => {
        window.open(fileReader.result);
        resolve(ev.target.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsDataURL(blob);
    });
  }
}

export const deleteFile = (folder, fileName) => {
  const containerClient = blobServiceClient.getContainerClient(folder);
  const blobClient = containerClient.getBlobClient(fileName);

  return blobClient.delete();
};
