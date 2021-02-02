'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express_1 = __importDefault(require('express'));
const app = express_1.default();
const port = 3000;
app.get('/', (_, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});