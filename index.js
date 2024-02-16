const express = require('express'); // 변수 설정
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001; // 포트 설정

app.use(cors());

const dataLength = 100000

// temp DB queried Data
const cveTableData = {
  data: Array.from({ length: dataLength }, (_, i) => ({
    componentType: 'Python' + (i + 1),
    componentName: 'pip',
    componentVersion: '9.0.3',
    cveId: `CVE-0000-0000${i}`,
    severity: 10.2,
    severityGroups: 'Critical',
    assetCount: 3,
  })),
  meta: {
    totalRowCount: dataLength,
  },
};

app.get('/api/data', (req, res) => {
  console.log(req.query)
  const { start, size, filters, globalFilter, sorting } = req.query

  console.log('filters', filters)
  console.log('globalFilter', globalFilter)
  console.log('sorting',sorting)

  const result = {
    data: cveTableData.data.slice(Number(start), Number(start)+Number(size)),
    meta:cveTableData.meta
  }

  console.log(result.data.length)

  res.send(result);

  console.log('-----------------')
});

app.listen(port, () => {
  console.log('http://localhost:3001');
});
