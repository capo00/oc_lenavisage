import Uu5Elements from "uu5g05-elements";
import { Utils } from "uu_plus4u5g02";

const uuDocKitBaseUriMap = {
  "https://uuapp.plus4u.net/uu-myterritory-maing01/77869331ed894285b9a9de3c795bc5ea": "https://uuapp.plus4u.net/uu-dockit-maing02/f16aa6298c1b47efa228a85636dad55c/",
};

let lenaVisageDocumentId;

const Tools = {
  getBackButton: (onClick) => (
    <Uu5Elements.Button
      key="back"
      icon="mdi-arrow-left"
      onClick={onClick}
      significance="subdued"
      style={{ marginRight: 8 }}
    />
  ),

  async findDocKitBaseUri(mtBaseUri) {
    let docKitBaseUri = uuDocKitBaseUriMap[mtBaseUri];
    if (!docKitBaseUri) {
      alert(`uuMT Base Uri ` + mtBaseUri);
    }
    return docKitBaseUri;
  },

  async findLenaVisageDocumentId(docKitBaseUri) {
    if (!lenaVisageDocumentId) {
      const code = "lenaVisage";
      const uri = new URL("document/load", docKitBaseUri).toString();
      const data = await Utils.AppClient.get(uri, { code });
      lenaVisageDocumentId = data.data.id;
    }
    return lenaVisageDocumentId;
  },
};

export default Tools;
