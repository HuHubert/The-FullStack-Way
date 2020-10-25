import { Version } from '@microsoft/sp-core-library';

import {

  IPropertyPaneConfiguration,

  PropertyPaneTextField

} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ReadSpListItemsWebPart.module.scss';

import * as strings from 'ReadSpListItemsWebPartStrings';

import {

  SPHttpClient,

  SPHttpClientResponse   

} from '@microsoft/sp-http';

import {

  Environment,

  EnvironmentType

} from '@microsoft/sp-core-library';

export interface IReadSpListItemsWebPartProps

 {

  description: string;

}

export interface ISPLists 

{

  value: ISPList[];

}

export interface ISPList 

{

  ProjectId : string;

  DisplayName : string;

  Description  :string;

  Visibility : string;

  ProjectTemplate : string;

  Owner : string;

  ProjectStatus : string;

  StartDate : string;

  EndDate : string;

  TeamsUrl : string;

  PlannerUrl : string;

  TeamsId : string;

  GroupId : string;

  PlannerId : string;


}

export default class ReadSpListItemsWebPart extends BaseClientSideWebPart <IReadSpListItemsWebPartProps>

 {

  private _getListData(): Promise<ISPLists>

   {

    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('FETC-PMIS-Demo')/Items",SPHttpClient.configurations.v1)

        .then((response: SPHttpClientResponse) => 

        {

        return response.json();

        });

    }

    private _renderListAsync(): void

    {

   

     if (Environment.type == EnvironmentType.SharePoint || 

              Environment.type == EnvironmentType.ClassicSharePoint) {

      this._getListData()

        .then((response) => {

          this._renderList(response.value);

        });

 }

  }

  private _renderList(items: ISPList[]): void 

   {

    let html: string = '<table border=1 width=100% style="border-collapse: collapse;">';

    html += '<th>Project Id</th> <th>Display Name</th> <th>Description</th> <th>Visibility</th> <th>ProjectTemplate</th> <th>Owner</th> <th>ProjectStatus</th> <th>StartDate</th> <th>EndDate</th>' ;

    items.forEach((item: ISPList) => {

      html += `

      <tr>            

          <td>${item.ProjectId }</td>

          <td>${item.DisplayName }</td>

          <td>${item.Description }</td>

          <td>${item.Visibility}</td>

          <td>${item.ProjectTemplate}</td>

          <td>${item.Owner}</td>
          
          <td>${item.ProjectStatus}</td>

          <td>${item.StartDate}</td>

          <td>${item.EndDate}</td>


        

          

          </tr>

          `;

    });


          // <td>${item.TeamsUrl}</td>

          // <td>${item.PlannerUrl}</td>

          // <td>${item.TeamsId}</td>

          // <td>${item.GroupId}</td>

          // <td>${item.PlannerId}</td>


    html += '</table>';

  

    const listContainer: Element = this.domElement.querySelector('#spListContainer');

    listContainer.innerHTML = html;

  }

  public render(): void {

    this.domElement.innerHTML = `

      <div class="${ styles.readSpListItems }">


  

          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">

          <div>List Items</div>

          <br>

           <div id="spListContainer" />

        </div>

      </div>`;

      this._renderListAsync();

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