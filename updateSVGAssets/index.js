require('dotenv').config();
const axios = require('axios');
const figmaRestApi = require('./util/figmaRestApi');
const Utils = require('./util/utils');
const outputFolder = '../client/src/assets/allIcons/';
const rateLimit = 20;
const waitTimeInSeconds = 45;

const getProjectNode = async () => {
  return await figmaRestApi.get(
    'files/' +
      process.env.FIGMA_PROJECT_ID +
      '/nodes?ids=' +
      process.env.FIGMA_PROJECT_NODE_ID
  );
};

const getSVGURL = async (id) => {
  return await figmaRestApi.get(
    'images/' + process.env.FIGMA_PROJECT_ID + '/?ids=' + id + '&format=svg'
  );
};

const svgExporter = async () => {
  try {
    const response = await getProjectNode();

    const children = await response.data.nodes[
      process.env.FIGMA_PROJECT_NODE_ID
    ].document.children;

    const svgs = Utils.findAllByValue(children, 'COMPONENT');
    const numOfSvgs = svgs.length;

    Utils.createFolder(outputFolder);

    for (i = 0; i < numOfSvgs; i += rateLimit) {
      const requests = svgs.slice(i, i + rateLimit).map(async (svg) => {
        // Get URL of each SVG
        let svgName = await svg.name;

        if (svgName.includes('/')) {
          const nameArr = svg.name.split('/').join('-');
          svgName = nameArr;
        }

        const svgURL = await getSVGURL(svg.id);

        // Get SVG DOM
        const svgDOM = await axios.get(svgURL.data.images[svg.id]);
        Utils.writeToFile(
          outputFolder + `${Utils.camelCaseToDash(svgName)}.svg`,
          svgDOM.data
        );
      });

      await Promise.all(requests)
        .then(() => {
          return new Promise(function (resolve) {
            setTimeout(() => {
              resolve();
            }, waitTimeInSeconds * 1000);
          });
        })
        .catch((err) => console.error(`Error proccessing ${i} - Error ${err}`));
    }
  } catch (err) {
    console.error(err);
  }
};

svgExporter();
