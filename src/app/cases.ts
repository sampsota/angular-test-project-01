export const cases = [
  {
    caseID: 'S19-1234',
    patientname: 'John Doe',
    patientdob: '1978-05-02',
    patientID: '258741',
    specimen: {
      specimenID: 'S19-1234-A',
      tissuetype: 'Breast',
      blocks:[{
        blockID: 'S19-1234-A1',
        tissuesubtype: 'duct',
        slides:[{
          slideID: 'S19-1234-A1-1',
          protocol: 'H&E'
        },
        {
          slideID: 'S19-1234-A1-2',
          protocol: 'ovDAB-V9'
        },
        {
          slideID: 'S19-1234-A1-3',
          protocol: 'ER'
        }]
      },
      {
        blockID: 'S19-1234-A2',
        tissuesubtype: 'duct',
        slides:[{
          slideID: 'S19-1234-A2-1',
          protocol: 'H&E'
        },
        {
          slideID: 'S19-1234-A2-2',
          protocol: 'ovDAB-V9'
        }]
      }]

    }
  }
];
