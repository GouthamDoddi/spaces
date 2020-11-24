export default (metadata, { keys, value }) => {
  if (value?.length * 1 == 0) {
    return metadata
  }
  return metadata.filter((o) => {
    return keys.some((key) => {
      if(typeof(key) == 'object') {
        console.log(key[0], key[1])
        return key[0][o[key[1]]]?.label?.toLowerCase()?.includes(value.toLowerCase().trim())
      } else {
        return o[key]?.toLowerCase()?.includes(value.toLowerCase().trim())
      }
    })
  })
}