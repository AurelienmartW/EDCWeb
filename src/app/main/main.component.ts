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
    window.open("https://jhiueikyz3.eu-west-1.awsapprunner.com/"+"?config="+conf)
  }
  launchSA_API() {
    window.open("https://jhiueikyz3.eu-west-1.awsapprunner.com/")
  }
  load_image(load:string) {
    const blobClient = this.containerClient.getBlobClient(load)
    blobClient.download().then(resp => {
      resp.blobBody?.then(blob => {
        const url = window.URL.createObjectURL(blob)
        window.open(url)
      })
    })
  }

}
