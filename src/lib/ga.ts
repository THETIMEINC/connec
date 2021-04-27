import ua from 'universal-analytics'
import { v4 } from 'uuid'

const uaId = 'UA-78832414-6'

export default function (): ua.Visitor {
  return ua(uaId, v4())
}
