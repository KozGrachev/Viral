const figmaApiExporter = require('figma-api-exporter').default;
const { writeIndex } = require('create-index');
const path = require('path');

const exporter = figmaApiExporter('156803-23d18172-25bb-4046-ba8f-35e9a7e81866'); //!! MOVE TO .ENV FILE ONCE WORKING


exporter.getSvgs({
    fileId: 'MoFSA80lexXuPB1z0DfR7U',
    canvas: 'Viral-Mockup',
  }).then(async svgsData => {
    await exporter.downloadSvgs({
      saveDirectory: '../src/assets/downloaded',
      svgsData: svgsData.svgs,
      lastModified: svgsData.lastModified,
      clearDirectory: true,
    });
  });




writeIndex([path.join(__dirname, '../src/assets/downloaded')], {
  update: true,
  extensions: ['svg'],
});