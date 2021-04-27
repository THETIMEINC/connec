// https://json.conn.ec/@hirorock
interface Media {
  name: string
  content: string
  updated_at: string
}

interface User {
  user_name: string
  screen_name: string
  profile: string
  media: Array<Media>
}

interface ApiUser {
  user: User
}
