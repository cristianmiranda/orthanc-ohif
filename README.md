# ⚕ Orthanc + OHIF viewer + Authorization plugin

![Peek 2023-07-06 19-39](https://github.com/cristianmiranda/orthanc-ohif/assets/972572/6c13b5c1-7d6a-42d3-abb3-7cdb5716e714)

## 📚 Useful links

- [orthanc-setup-samples (using docker)](https://github.com/orthanc-server/orthanc-setup-samples/tree/master)
- [Demo DICOM files](https://www.rubomedical.com/dicom_files/index.html)
- [Orthanc Book - osimis/orthanc](https://book.orthanc-server.com/users/docker-osimis.html)
- [Orthanc Book - CORS](https://book.orthanc-server.com/faq/nginx.html?highlight=cors)
- [Orthanc Book - Authorization](https://book.orthanc-server.com/plugins/authorization.html)
- [OHIF Viewer - DICOMweb](https://docs.ohif.org/configuration/dataSources/dicom-web#configuration-learn-more)
- [OHIF Plugin announcement ](https://discourse.orthanc-server.org/t/new-plugin-ohif/3627)

### Usage

1. Unzip `orthanc/demo-study.zip`

2. Run the stack

```bash
docker-compose up
```

3. Upload the study manually (using the top right "Upload" button)

### Access OHIF Viewer fromm Orthanc

- Explorer: http://localhost:8042/app/explorer.html?auth-token=1234567890
- Viewer: http://localhost:8042/ohif/viewer?auth-token=1234567890&url=../studies/00945f86-454efb2a-f8390294-623debb1-91ea1a9b/ohif-dicom-json

![](https://imgur.com/PxLBxdy.png)

### Query studies

```bash
curl -H 'auth-token: 1234567890' 'http://localhost:8042/studies'

curl 'http://localhost:8042/studies?auth-token=1234567890'
```
