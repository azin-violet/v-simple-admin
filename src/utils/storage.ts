type StorageType = 'localStorage' | 'sessionStorage'

class Storage {
  private readonly storageType: StorageType

  constructor (storageType: StorageType = 'localStorage') {
    this.storageType = storageType
  }

  get<T = unknown> (key: string): T | null {
    const value = window[this.storageType].getItem(key)
    if (value === null) return null
    return JSON.parse(value)
  }

  set<T = unknown> (key: string, value: T): void {
    const strValue = JSON.stringify(value)
    window[this.storageType].setItem(key, strValue)
  }

  remove (key: string): void {
    window[this.storageType].removeItem(key)
  }
}

export default new Storage()
