export function serializeInternalLocationData(data) {
  let result = {};
  result['link'] = data['links']['self'];
  result['hits'] = data['hits']['hits'];
  return result;
}
