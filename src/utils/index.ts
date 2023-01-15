export const setCssVar = (prop: string, val: any, dom = document.documentElement) => {
  dom.style.setProperty(prop, val)
}

export const isEmptyObj = (val: Object) => {
  return Object.keys(val).length === 0
}
