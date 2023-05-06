import type { ConfigStyleCollection } from "@/types";
import getSchemaOptions from "@/utils/getSchemaOptions";
import * as collection from "@dicebear/collection";

const availableStyles: ConfigStyleCollection = {
  adventurer: {
    style: collection.adventurer,
    options: getSchemaOptions(collection.adventurer.schema ?? {}),
  },
  adventurerNeutral: {
    style: collection.adventurerNeutral,
    options: getSchemaOptions(collection.adventurerNeutral.schema ?? {}),
  },
  avataaars: {
    style: collection.avataaars,
    options: getSchemaOptions(collection.avataaars.schema ?? {}),
  },
};

export default availableStyles;
