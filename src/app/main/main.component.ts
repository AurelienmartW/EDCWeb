import { Component, OnInit } from '@angular/core';
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  accountName = "asblobstest"
  containerName = "pictures"
  sas = "sp=racwdl&st=2022-06-17T07:22:52Z&se=2022-07-01T15:22:52Z&spr=https&sv=2021-06-08&sr=c&sig=sHNeJgqbxImTGA%2FuxQ%2Flzk5upnvmPFAAIstbjIOyvco%3D"

  containerClient = new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net?${this.sas}`).getContainerClient(this.containerName)

  constructor() { }

  ngOnInit(): void {
  }
  launchSA(conf:string) {
    if (conf !=''){
    window.open("https://jhiueikyz3.eu-west-1.awsapprunner.com/"+"?config="+conf)}
  
    else{
      window.open("https://jhiueikyz3.eu-west-1.awsapprunner.com/")
    }
  }
  
  launchSA_API(load:string) {
    window.open("https://192.168.1.112:4200/?name="+load)
  }
  load_image_azure(load:string) {
    const blobClient = this.containerClient.getBlobClient(load+'.jpeg')
    blobClient.download().then(resp => {
      resp.blobBody?.then(blob => {
        const url = window.URL.createObjectURL(blob)
        window.open(url)
      })
    })
  }

  load_image_gcp(load:string) {
    const url = `https://storage.googleapis.com/selfie-files/${load}.jpeg`
    window.open(url)
  }

  load_image_aws(load:string) {
    const oReq_aws = new XMLHttpRequest();
    const URL_aws = "https://iizy7po9ah.execute-api.eu-west-1.amazonaws.com/dev/pocarchi/" + load + '.jpeg';
    oReq_aws.open("GET", URL_aws, true);
    oReq_aws.responseType = 'blob';
    console.log(oReq_aws)
    oReq_aws.onload = function () {
      if (oReq_aws.status === 200) {
          // If successful, resolve the promise by passing back the request response
          const url = window.URL.createObjectURL(oReq_aws.response)
          window.open(url)
      } else {
          // If it fails, reject the promise with a error message
          console.error("Error")
      }
    };
    oReq_aws.send();
  }
}
