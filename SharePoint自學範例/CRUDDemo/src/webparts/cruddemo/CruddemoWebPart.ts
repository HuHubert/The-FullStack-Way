import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CruddemoWebPart.module.scss';
import * as strings from 'CruddemoWebPartStrings';

import { ISPHttpClientOptions, SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { ISoftwareListItem } from './ISoftwareListItem';

export interface ICruddemoWebPartProps {
  description: string;
}

export default class CruddemoWebPart extends BaseClientSideWebPart <ICruddemoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<div>
     
    <div>
    <table border='5' bgcolor='#60B1E6' width="80%">

    <tr>
    <td>ProjectId</td>
    <td><input type='text' id='ProjectId' />
    </tr>

     
      <tr>
      <td>DisplayName</td>
      <td><input type='text' id='DisplayName' />
      </tr>

      <tr>
      <td>Description</td>
      <td><input type='text' id='Description' />
      </tr>

      <tr>
      <td>Visibility</td>
      <td>
      <select id="Visibility">
        <option value="Public">Public</option>
        <option value="Private">Private</option>
      </select>  
      </td>
     
      </tr>

      <tr>
      <td>ProjectTemplate </td>
      <td>
      <select id="ProjectTemplate ">
        <option value="Template 1">Template 1</option>
        <option value="Template 2">Template 2</option>
        <option value="Template 3">Template 3</option>
        <option value="Template 4">Template 4</option>
        <option value="Template 5">Template 5</option>
        <option value="Template 6">Template 6</option>
        <option value="Template 7">Template 7</option>
        <option value="Template 8">Template 8</option>
      </select>  
      </td>
      </tr>
      

      <tr>
      <td>Owner </td>
      <td><input type='text' id='Owner' />
      </tr>

      <tr>
      <td>ProjectStatus </td>
      <td>
      <select id="ProjectStatus ">
        <option value="Not Start">Not Start</option>
        <option value="Mobilization">Mobilization</option>
        <option value="In Progress">In Progress</option>
        <option value="Closing">Closing</option>
        <option value="Completed">Completed</option>
      </select>  
      </td>
      </tr>


      <tr>
      <td>StartDate </td>
      <td><input type='date' id='txtSoftwareName' />
      </tr>

      <tr>
      <td>EndDate </td>
      <td><input type='date' id='txtSoftwareName' />
      </tr>


      <tr>
      <td>TeamsUrl </td>
      <td><input type='url' id='txtSoftwareName' />
      <input type='submit' id='btnRead' value='資料綁定' />
      </td>
      </tr>

      <tr>
      <td>PlannerUrl </td>
      <td><input type='url' id='txtSoftwareName' />
      <input type='submit' id='btnRead' value='資料綁定' />
      </td>
      </tr>

       <tr>
      <td>TeamsId  </td>
      <td><input type='url' id='txtSoftwareName' />
      </tr>

      <tr>
      <td>GroupId  </td>
      <td><input type='url' id='txtSoftwareName' />
      </tr>
      
      <tr>
      <td>PlannerId </td>
      <td><input type='url' id='txtSoftwareName' />
      </tr>


      

      <tr>
      <td colspan='2' align='center'>
      <input type='submit'  value='Insert Item' id='btnSubmit' />
      <input type='submit'  value='Update' id='btnUpdate' />
      <input type='submit'  value='Delete' id='btnDelete' />      
      </td>
    </table>
    </div>
    <div id="divStatus"/>
          </div>`;

          this._bindEvents();
          this.readAllItems();
  }
  private readAllItems() : void{
    
    this._getListItems().then(listItems => {
      let html: string = '<table border=1 width=100% style="border-collapse: collapse;">';
      html += '<th>PlannerId</th> <th>DisplayName</th> <th>Description</th> <th>Visibility</th> <th>ProjectTemplate</th> <th>Owner</th>';

    listItems.forEach(listItem => {
      html += `<tr>            
      <td>${listItem.PlannerId}</td>
      <td>${listItem.DisplayName}</td>
      <td>${listItem.Description}</td>
      <td>${listItem.Visibility}</td>
      <td>${listItem.ProjectTemplate}</td>
      <td>${listItem.Owner}</td>
      <td>${listItem.ProjectStatus}</td>
      <td>${listItem.StartDate}</td>
      <td>${listItem.EndDate}</td>
      <td>${listItem.TeamsUrl}</td>
      <td>${listItem.PlannerUrl}</td>
      <td>${listItem.TeamsId}</td>
      <td>${listItem.GroupId}</td>
      <td>${listItem.PlannerId}</td>      
      </tr>`;
    });
    html += '</table>';
    const listContainer: Element = this.domElement.querySelector('#divStatus');
  
    listContainer.innerHTML = html;
    });


  }

  

  private _getListItems(): Promise<ISoftwareListItem[]> {
    const url: string = this.context.pageContext.site.absoluteUrl+"/_api/web/lists/getbytitle('FETC-PMIS')/items";
    return this.context.spHttpClient.get(url,SPHttpClient.configurations.v1)
    .then(response => {
    return response.json();
    })
    .then(json => {
    return json.value;
    }) as Promise<ISoftwareListItem[]>;
    }


  private _bindEvents(): void {
    this.domElement.querySelector('#btnSubmit').addEventListener('click', () => { this.addListItem(); });
    this.domElement.querySelector('#btnRead').addEventListener('click', () => { this.readListItem(); });
    this.domElement.querySelector('#btnUpdate').addEventListener('click', () => { this.updateListItem(); });
    this.domElement.querySelector('#btnDelete').addEventListener('click', () => { this.deleteListItem(); });
  }
  private deleteListItem(): void {
    
    let id: string = document.getElementById("txtID")["value"];
    const url: string = this.context.pageContext.site.absoluteUrl + "/_api/web/lists/getbytitle('FETC-PMIS')/items(" + id + ")";          
    const headers: any = { "X-HTTP-Method": "DELETE", "IF-MATCH": "*" };

    const spHttpClientOptions: ISPHttpClientOptions = {
      "headers": headers
    };


    this.context.spHttpClient.post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
    .then((response: SPHttpClientResponse) => {
      if (response.status === 204) {
        let message: Element = this.domElement.querySelector('#divStatus');
        message.innerHTML = "Delete: List Item has been deleted successfully.";
        
      } else {
        let message: Element = this.domElement.querySelector('#divStatus');
        message.innerHTML = "Failed to Delete..." + response.status + " - " + response.statusText;
      }
    });

  }
  private updateListItem() : void {
    
    var title = document.getElementById("txtSoftwareTitle")["value"];
    var softwareVendor = document.getElementById("ddlSoftwareVendor")["value"];
    var softwareDescription = document.getElementById("txtSoftwareDescription")["value"];
    var softwareName = document.getElementById("txtSoftwareName")["value"];
    var softwareVersion = document.getElementById("txtSoftwareVersion")["value"];

    let id: string = document.getElementById("txtID")["value"];

    const url: string = this.context.pageContext.site.absoluteUrl + "/_api/web/lists/getbytitle('FETC-PMIS')/items(" + id + ")";
    const itemBody: any = {
      "Title": title,
      "SoftwareVendor": softwareVendor,
      "SoftwareDescription": softwareDescription,
      "SoftwareName": softwareName,
      "SoftwareVersion": softwareVersion
    
    };
    const headers: any = {
      "X-HTTP-Method": "MERGE",
      "IF-MATCH": "*",
    };

    const spHttpClientOptions: ISPHttpClientOptions = {
      "headers": headers,
      "body": JSON.stringify(itemBody)
    };


    this.context.spHttpClient.post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
    .then((response: SPHttpClientResponse) => {
      if (response.status === 204) {
        let message: Element = this.domElement.querySelector('#divStatus');
        message.innerHTML = "List Item has been updated successfully.";          
      } else {
        let message: Element = this.domElement.querySelector('#divStatus');
        message.innerHTML = "List Item updation failed. " + response.status + " - " + response.statusText;
      }
    });


  }
  private readListItem(): void {
    
    let id: string= document.getElementById("txtID")["value"];
    this._getListItemByID(id).then(listItem => {

    document.getElementById("ProjectId")["value"] = listItem.ProjectId;
    document.getElementById("DisplayName")["value"] = listItem.DisplayName;
    document.getElementById("Description")["value"] = listItem.Description;
    document.getElementById("Visibility")["value"] = listItem.Visibility;
    document.getElementById("ProjectTemplate ")["value"] = listItem.ProjectTemplate;
    document.getElementById("Owner")["value"] = listItem.Owner;
    document.getElementById("ProjectStatus ")["value"] = listItem.ProjectStatus ;
    
    })
    .catch(error => {
      let message: Element = this.domElement.querySelector('#divStatus');    
      message.innerHTML = "Read: Could not fetch details.. "+error.message;
    });

  }

  private _getListItemByID(id: string): Promise<ISoftwareListItem> {
    const url: string = this.context.pageContext.site.absoluteUrl+"/_api/web/lists/getbytitle('FETC-PMIS')/items?$filter=Id eq "+id;
    return this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      
    return response.json();
    })
    .then( (listItems: any) => {
     
    const untypedItem: any = listItems.value[0];
    const listItem: ISoftwareListItem = untypedItem as ISoftwareListItem;
    return listItem;
    }) as Promise <ISoftwareListItem>;

  }


  
  private addListItem(): void {

    var softwaretitle = document.getElementById("txtSoftwareTitle")["value"];
    var softwarename = document.getElementById("txtSoftwareName")["value"];
    var softwareversion = document.getElementById("txtSoftwareVersion")["value"];
    var softwarevendor = document.getElementById("ddlSoftwareVendor")["value"];
    var softwareDescription = document.getElementById("txtSoftwareDescription")["value"];



    const siteurl: string = this.context.pageContext.site.absoluteUrl + "/_api/web/lists/getbytitle('FETC-PMIS')/items";

    
    const itemBody: any = {
      "Title": softwaretitle,
      "SoftwareVendor": softwarevendor,
      "SoftwareDescription": softwareDescription,
      "SoftwareName": softwarename,
      "SoftwareVersion": softwareversion,
     
    };

    
    const spHttpClientOptions: ISPHttpClientOptions = {
      "body": JSON.stringify(itemBody)
    };

    this.context.spHttpClient.post(siteurl, SPHttpClient.configurations.v1, spHttpClientOptions)
    .then((response: SPHttpClientResponse) => {
     
      if (response.status === 201) {
        let statusmessage: Element = this.domElement.querySelector('#divStatus');
        statusmessage.innerHTML = "List Item has been created successfully.";
        this.clear();
       
       
      } else {
        let statusmessage: Element = this.domElement.querySelector('#divStatus');
        statusmessage.innerHTML = "An error has occured i.e.  " + response.status + " - " + response.statusText;
      }
    });
    
  }

  private clear(): void {
    document.getElementById("txtSoftwareTitle")["value"] = '';
    document.getElementById("ddlSoftwareVendor")["value"] = 'Microsoft';
    document.getElementById("txtSoftwareDescription")["value"] = '';
    document.getElementById("txtSoftwareVersion")["value"] = '';
    document.getElementById("txtSoftwareName")["value"] = '';    
  }

  

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
