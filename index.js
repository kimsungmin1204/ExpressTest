const express = require('express'); // 변수 설정
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001; // 포트 설정

app.use(cors());

const cveTableData = {
  data: Array.from({ length: 50 }, (_, i) => ({
    componentType: 'Python' + (i + 1),
    componentName: 'pip',
    componentVersion: '9.0.3',
    cveId: 'CVE-0000-00001',
    severity: 10.2,
    severityGroups: 'Critical',
    assetCount: 3,
  })),
  meta: {
    totalRowCount: 50,
  },
};

app.get('/api/data', (req, res) => {
  res.send(cveTableData);
});

app.listen(port, () => {
  console.log('http://localhost:3001');
});
