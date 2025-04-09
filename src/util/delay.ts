export default async function delay(ms: number) {
  return new Promise((response) => {
    setTimeout(() => {
      response('');
    }, ms);
  });
}
