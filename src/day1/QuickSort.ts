
function qs(arr: number[],lo:number,hi:number):void{
    if (lo >= hi){
        return;
    }
    // pre
    const pIdx = partition(arr, lo, hi)
    // recurse
    qs(arr,lo,pIdx-1);
    qs(arr,pIdx+1,hi);
}

function partition(arr: number[],lo:number,hi:number):number{
    const p = arr[hi];
    let idx = lo - 1;

    for (let i= lo; i < hi; i++){
        if (arr[i]<=p){
            idx++;
            const tmp = arr[i];
            arr[i]=arr[idx]
            arr[idx]=tmp;
        }
    }

    idx++;
    // const tmp = arr[i];
    arr[hi] = arr[idx]
    arr[idx] = p;
    return idx
}
export default function quick_sort(arr: number[]): void {
   
    const lo= 0;
    const high = arr.length - 1; // max
    qs(arr,lo,high);

}