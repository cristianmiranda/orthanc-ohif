# ⚕ Orthanc + OHIF viewer + Authorization plugin

![dicom2](https://github.com/user-attachments/assets/74f829b9-7bfb-4ed1-9ab4-9e01e55bdcc6)

## 📚 Useful links

### Orthanc
- [Orthanc Book - orthancteam/orthanc](https://orthanc.uclouvain.be/book/users/docker-orthancteam.html)
- [Orthanc Book - CORS](https://book.orthanc-server.com/faq/nginx.html?highlight=cors)
- [Orthanc Book - Authorization](https://book.orthanc-server.com/plugins/authorization.html)

### OHIF
- [Config files](https://docs.ohif.org/configuration/configurationFiles)
- [OHIF Plugin announcement ](https://discourse.orthanc-server.org/t/new-plugin-ohif/3627)
 
### Misc
- [Demo DICOM files](https://www.rubomedical.com/dicom_files/index.html)
- [DICOM library](https://www.dicomlibrary.com/)
- [Demo Online OHIF Viewer](https://dicomviewer.net/local?datasources=dicomlocal)
- [orthanc-setup-samples (using docker)](https://github.com/orthanc-server/orthanc-setup-samples/tree/master)

## Usage

1. Run the stack

```bash
docker-compose up
```

2. Upload the study manually (using the top right "Upload" button and studies zipped in `orthanc/demo-study.zip`)

### Access Orthanc Explorer & OHIF Viewer

- Explorer: http://localhost:8042/app/explorer.html?token=1234567890
- Viewer: http://localhost:3000/viewer?StudyInstanceUIDs=1.2.840.113619.2.394.3337.1732016885.186.1&token=1234567890

![image](https://github.com/user-attachments/assets/c3281363-cf61-4a1b-9aa1-916947c24e16)

### Query studies

```bash
curl -H 'token: 1234567890' 'http://localhost:8042/studies'

curl 'http://localhost:8042/studies?token=1234567890'
```

## 🔐 Authorization

Modify `authenticator/server.js` and implement custom validation logic.

See more @ 
- https://book.orthanc-server.com/plugins/authorization.html#web-service
- https://docs.ohif.org/deployment/authorization/#token-based-authentication-in-url
