import ua from "universal-analytics";
import { v4 as uuidv4 } from "uuid";
const ua_id = "UA-78832414-6";

export default function () {
  return ua(ua_id, uuidv4());
}
