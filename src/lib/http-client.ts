import fetch from 'node-fetch'

export class HttpClient {
  private _url: string

  constructor(params: { url: string }) {
    this._url = params.url
  }

  async getJson(): Promise<ApiUser> {
    const res = await fetch(this._url, { method: 'get' })
    const json = res.json()
    return json
  }
}
