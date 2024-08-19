export function formatData(data:string){
  return data.trim();
};

export function elipseString(string:string, delimiter:number) {
  if(string.length >= delimiter) {
    return `${string.slice(0, (delimiter - 3))}...`;
  }return string;
}