import { useContext } from "react";
import { BuildContext } from "./BuildForm";

const makeNewBuild = () => {
  //grab the inputs via context providers
  const { buildName, isActive, statusName } = useContext(BuildContext);

  //build a new "fullBuild" object
    const newBuildObject = {
      "userId": 1,
      "statusId": 1,
      "name": buildName
      "buildWeight": 1700,
      "caseName": "Polaris",
      "caseColor": "purple",
      "caseDesigner": "ai03",
      "caseMaterialId": 1,
      "casePlateMaterialId": 2,
      "switchName": "zealios",
      "switchTypeId": 2,
      "switchWeight": 67,
      "switchLube": "tribosys 3203",
      "keycapName": "GMK Jamon",
      "keycapProfile": "Cherry",
      "keycapMaterialId": 3,
      "keycapSculpt": true
    }
  //send that object to the API
};
